// composables/useBusiness.js
export const useBusiness = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl || '/api/v1'

  // State
  const businesses = ref([])
  const business = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Validation helpers
  const validateI18nString = (value, fieldName) => {
    if (!value || typeof value !== 'object') {
      throw new Error(`${fieldName} must be an object with cn, en, th properties`)
    }
    if (!value.cn || !value.en || !value.th) {
      throw new Error(`${fieldName} must have cn, en, and th properties`)
    }
  }

  const validateI18nNumber = (value, fieldName) => {
    if (!value || typeof value !== 'object') {
      throw new Error(`${fieldName} must be an object with cn, en, th properties`)
    }
    if (typeof value.cn !== 'number' || typeof value.en !== 'number' || typeof value.th !== 'number') {
      throw new Error(`${fieldName} cn, en, and th must be numbers`)
    }
  }

  const validateBusinessData = (data) => {
    const required = [
      'service_type_id',
      'business_type_id', 
      'business_model_id',
      'business_name_i18n',
      'business_person_i18n',
      'business_address_i18n',
      'business_contact_i18n',
      'business_email_i18n',
      'shop_name_i18n',
      'shop_address_i18n',
      'shop_time_i18n',
      'shop_phone_i18n',
      'shop_details_i18n',
      'latitude_i18n',
      'longitude_i18n'
    ]

    for (const field of required) {
      if (!data[field]) {
        throw new Error(`${field} is required`)
      }
    }

    // Validate i18n strings
    const i18nStringFields = [
      'business_name_i18n',
      'business_person_i18n',
      'business_address_i18n',
      'business_contact_i18n',
      'business_email_i18n',
      'shop_name_i18n',
      'shop_address_i18n',
      'shop_time_i18n',
      'shop_phone_i18n',
      'shop_details_i18n'
    ]

    for (const field of i18nStringFields) {
      validateI18nString(data[field], field)
    }

    // Validate i18n numbers
    validateI18nNumber(data.latitude_i18n, 'latitude_i18n')
    validateI18nNumber(data.longitude_i18n, 'longitude_i18n')

    // Validate business_list if provided
    if (data.business_list && Array.isArray(data.business_list)) {
      data.business_list.forEach((item, index) => {
        if (!item.business_list_name_i18n) {
          throw new Error(`business_list[${index}].business_list_name_i18n is required`)
        }
        if (!item.business_list_price_i18n) {
          throw new Error(`business_list[${index}].business_list_price_i18n is required`)
        }
        validateI18nString(item.business_list_name_i18n, `business_list[${index}].business_list_name_i18n`)
        validateI18nNumber(item.business_list_price_i18n, `business_list[${index}].business_list_price_i18n`)
      })
    }

    // Validate business_social_media if provided
    if (data.business_social_media && Array.isArray(data.business_social_media)) {
      data.business_social_media.forEach((item, index) => {
        if (!item.social_media_id) {
          throw new Error(`business_social_media[${index}].social_media_id is required`)
        }
        if (!item.social_media_link_i18n) {
          throw new Error(`business_social_media[${index}].social_media_link_i18n is required`)
        }
        validateI18nString(item.social_media_link_i18n, `business_social_media[${index}].social_media_link_i18n`)
      })
    }

    // Validate business_open_date if provided
    if (data.business_open_date && Array.isArray(data.business_open_date)) {
      data.business_open_date.forEach((item, index) => {
        if (!item.day_name_i18n) {
          throw new Error(`business_open_date[${index}].day_name_i18n is required`)
        }
        validateI18nString(item.day_name_i18n, `business_open_date[${index}].day_name_i18n`)
      })
    }
  }

  // Create FormData for file uploads
  const createFormData = (data) => {
    const formData = new FormData()
    
    // Basic fields
    formData.append('service_type_id', data.service_type_id)
    formData.append('business_type_id', data.business_type_id)
    formData.append('business_model_id', data.business_model_id)
    
    // I18n string fields
    formData.append('business_name_i18n', JSON.stringify(data.business_name_i18n))
    formData.append('business_person_i18n', JSON.stringify(data.business_person_i18n))
    formData.append('business_address_i18n', JSON.stringify(data.business_address_i18n))
    formData.append('business_contact_i18n', JSON.stringify(data.business_contact_i18n))
    formData.append('business_email_i18n', JSON.stringify(data.business_email_i18n))
    formData.append('shop_name_i18n', JSON.stringify(data.shop_name_i18n))
    formData.append('shop_address_i18n', JSON.stringify(data.shop_address_i18n))
    formData.append('shop_time_i18n', JSON.stringify(data.shop_time_i18n))
    formData.append('shop_phone_i18n', JSON.stringify(data.shop_phone_i18n))
    formData.append('shop_details_i18n', JSON.stringify(data.shop_details_i18n))
    formData.append('latitude_i18n', JSON.stringify(data.latitude_i18n))
    formData.append('longitude_i18n', JSON.stringify(data.longitude_i18n))
    
    // File uploads
    if (data.image_cover) {
      formData.append('image_cover', data.image_cover)
    }
    if (data.image_profile) {
      formData.append('image_profile', data.image_profile)
    }
    
    // Array fields
    if (data.business_list) {
      formData.append('business_list', JSON.stringify(data.business_list))
    }
    if (data.business_social_media) {
      formData.append('business_social_media', JSON.stringify(data.business_social_media))
    }
    if (data.business_open_date) {
      formData.append('business_open_date', JSON.stringify(data.business_open_date))
    }
    
    // Multiple file uploads
    if (data.business_documents && Array.isArray(data.business_documents)) {
      data.business_documents.forEach(file => {
        formData.append('business_documents', file)
      })
    }
    if (data.business_img && Array.isArray(data.business_img)) {
      data.business_img.forEach(file => {
        formData.append('business_img', file)
      })
    }
    
    formData.append('Status', data.status ? 'true' : 'false')
    
    return formData
  }

  // API Methods
  const fetchBusinesses = async () => {
    try {
      loading.value = true
      error.value = null
      
      const response = await $fetch(`${baseURL}/management/business`, {
        method: 'GET'
      })
      
      businesses.value = response
      return response
    } catch (err) {
      error.value = err.message || 'Failed to fetch businesses'
      throw err
    } finally {
      loading.value = false
    }
  }

  const fetchBusiness = async (id) => {
    try {
      loading.value = true
      error.value = null
      
      const response = await $fetch(`${baseURL}/management/business/${id}`, {
        method: 'GET'
      })
      
      business.value = response
      return response
    } catch (err) {
      error.value = err.message || 'Failed to fetch business'
      throw err
    } finally {
      loading.value = false
    }
  }

  const createBusiness = async (data) => {
    try {
      loading.value = true
      error.value = null
      
      // Validate data
      validateBusinessData(data)
      
      const formData = createFormData(data)
      
      const response = await $fetch(`${baseURL}/management/business`, {
        method: 'POST',
        body: formData
      })
      
      // Refresh businesses list
      await fetchBusinesses()
      
      return response
    } catch (err) {
      error.value = err.message || 'Failed to create business'
      throw err
    } finally {
      loading.value = false
    }
  }

  const updateBusiness = async (id, data) => {
    try {
      loading.value = true
      error.value = null
      
      // Validate data
      validateBusinessData(data)
      
      const formData = createFormData(data)
      
      const response = await $fetch(`${baseURL}/management/business/${id}`, {
        method: 'PUT',
        body: formData
      })
      
      // Refresh businesses list
      await fetchBusinesses()
      
      return response
    } catch (err) {
      error.value = err.message || 'Failed to update business'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Utility functions
  const resetError = () => {
    error.value = null
  }

  const getI18nValue = (i18nObject, locale = 'th') => {
    if (!i18nObject || typeof i18nObject !== 'object') return ''
    return i18nObject[locale] || i18nObject.th || i18nObject.en || i18nObject.cn || ''
  }

  const createEmptyBusiness = () => ({
    service_type_id: '',
    business_type_id: '',
    business_model_id: '',
    business_name_i18n: { cn: '', en: '', th: '' },
    business_person_i18n: { cn: '', en: '', th: '' },
    business_address_i18n: { cn: '', en: '', th: '' },
    business_contact_i18n: { cn: '', en: '', th: '' },
    business_email_i18n: { cn: '', en: '', th: '' },
    shop_name_i18n: { cn: '', en: '', th: '' },
    shop_address_i18n: { cn: '', en: '', th: '' },
    shop_time_i18n: { cn: '', en: '', th: '' },
    shop_phone_i18n: { cn: '', en: '', th: '' },
    shop_details_i18n: { cn: '', en: '', th: '' },
    latitude_i18n: { cn: 0, en: 0, th: 0 },
    longitude_i18n: { cn: 0, en: 0, th: 0 },
    business_list: [],
    business_social_media: [],
    business_open_date: [],
    status: true
  })

  return {
    // State
    businesses: readonly(businesses),
    business: readonly(business),
    loading: readonly(loading),
    error: readonly(error),
    
    // Methods
    fetchBusinesses,
    fetchBusiness,
    createBusiness,
    updateBusiness,
    
    // Utilities
    resetError,
    getI18nValue,
    createEmptyBusiness,
    validateBusinessData
  }
}