<script lang="ts" setup></script>

<template>
  <div id="wizard_Time" class="tab-pane" role="tabpanel">
    <div class="row">
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Company Name<span class="required">*</span></label>
          <input type="text" name="firstName" class="form-control" placeholder="Cellophane Square" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Company Email Address<span class="required">*</span></label>
          <input type="email" class="form-control" id="emial1" placeholder="example@example.com.com" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Company Phone Number<span class="required">*</span></label>
          <input type="number" name="phoneNumber" class="form-control" placeholder="(+1)408-657-9007" required />
        </div>
      </div>
      <div class="col-lg-6 mb-2">
        <div class="mb-3">
          <label class="text-label form-label">Your position in Company<span class="required">*</span></label>
          <input type="text" name="place" class="form-control" required />
        </div>
      </div>
    </div>
  </div>
</template>
