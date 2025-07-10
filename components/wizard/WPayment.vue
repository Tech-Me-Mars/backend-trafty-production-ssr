<script lang="ts" setup></script>

<template>
  <div id="wizard_Payment" class="tab-pane" role="tabpanel">
    <div class="row emial-setup">
      <div class="col-lg-3 col-sm-6 col-6">
        <div class="mb-3">
          <label for="mailclient11" class="mailclinet mailclinet-gmail">
            <input type="radio" name="emailclient" id="mailclient11" />
            <span class="mail-icon">
              <i class="mdi mdi-google-plus" aria-hidden="true"></i>
            </span>
            <span class="mail-text">I'm using Gmail</span>
          </label>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-6">
        <div class="mb-3">
          <label for="mailclient12" class="mailclinet mailclinet-office">
            <input type="radio" name="emailclient" id="mailclient12" />
            <span class="mail-icon">
              <i class="mdi mdi-office" aria-hidden="true"></i>
            </span>
            <span class="mail-text">I'm using Office</span>
          </label>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-6">
        <div class="mb-3">
          <label for="mailclient13" class="mailclinet mailclinet-drive">
            <input type="radio" name="emailclient" id="mailclient13" />
            <span class="mail-icon">
              <i class="mdi mdi-google-drive" aria-hidden="true"></i>
            </span>
            <span class="mail-text">I'm using Drive</span>
          </label>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6 col-6">
        <div class="mb-3">
          <label for="mailclient14" class="mailclinet mailclinet-another">
            <input type="radio" name="emailclient" id="mailclient14" />
            <span class="mail-icon">
              <i class="fa fa-question-circle" aria-hidden="true"></i>
            </span>
            <span class="mail-text">Another Service</span>
          </label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="skip-email text-center">
          <p>Or if want skip this step entirely and setup it later</p>
          <a href="javascript:void(0)">Skip step</a>
        </div>
      </div>
    </div>
  </div>
</template>
