<script lang="ts" setup></script>

<template>
  <div id="wizard_Service" class="tab-pane" role="tabpanel">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">First Name<span class="required">*</span></label>
          <input type="text" name="firstName" class="form-control" placeholder="Parsley" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Last Name<span class="required">*</span></label>
          <input type="text" name="lastName" class="form-control" placeholder="Montana" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Email Address<span class="required">*</span></label>
          <input type="email" class="form-control" id="inputGroupPrepend2" aria-describedby="inputGroupPrepend2" placeholder="example@example.com.com" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Phone Number<span class="required">*</span></label>
          <input type="number" name="phoneNumber" class="form-control" placeholder="(+1)408-657-9007" required />
        </div>
      </div>
      <div class="col-lg-12 mb-3">
        <div class="mb-3">
          <label class="text-label form-label">Where are you from<span class="required">*</span></label>
          <input type="text" name="place" class="form-control" required />
        </div>
      </div>
    </div>
  </div>
</template>
