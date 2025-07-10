<script lang="ts" setup>
import CommonNavbar from "@/lib/CommonNavbar.vue";
import WService from "~/components/wizard/WService.vue";
import WDetails from "~/components/wizard/WDetails.vue";
import WPayment from "~/components/wizard/WPayment.vue";
import WTime from "~/components/wizard/WTime.vue";

const wizardActive = ref(1);
function wizardBtn(name: string) {
  let list = document.querySelectorAll(".wizard_links");
  list.forEach((el) => el.classList.remove("active"));
  switch (name) {
    case "prev":
      wizardActive.value <= 1 ? wizardActive.value : wizardActive.value--;

      break;
    case "next":
      wizardActive.value >= 4 ? wizardActive.value : wizardActive.value++;

      break;
    default:
      break;
  }
  for (let i = 0; i < wizardActive.value; i++) {
    list[i].classList.add("active");
  }
}

function wizardHandler(index: number) {
  let list = document.querySelectorAll(".wizard_links");
  wizardActive.value = index + 1;
  list.forEach((el) => el.classList.remove("active"));
  for (let i = 0; i < wizardActive.value; i++) {
    list[i].classList.add("active");
  }
}
</script>

<template>
  <CommonNavbar page="Form" path="Wizard" />
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12 col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Form step</h4>
          </div>
          <div class="card-body">
            <div id="smartwizard" class="form-wizard order-create sw sw-theme-default sw-justified">
              <ul class="nav nav-wizard">
                <li v-for="(el, ind) in [1, 2, 3, 4]" :key="el">
                  <a @click="wizardHandler(ind)" :class="`nav-link inactive wizard_links ${el == 1 && 'active'}`" href="javascript:void(0)">
                    <span>{{ el }}</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <WService :style="`display: ${wizardActive == 1 ? 'block' : 'none'}`" />
                <WTime :style="`display: ${wizardActive == 2 ? 'block' : 'none'}`" />
                <WDetails :style="`display: ${wizardActive == 3 ? 'block' : 'none'}`" />
                <WPayment :style="`display: ${wizardActive == 4 ? 'block' : 'none'}`" />
              </div>
              <div class="toolbar toolbar-bottom" role="toolbar" style="text-align: right">
                <button @click="wizardBtn('prev')" class="btn btn-primary sw-btn-prev" type="button">Previous</button>{{ "  " }}
                <button @click="wizardBtn('next')" class="btn btn-primary sw-btn-next" type="button">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sw-theme-default {
  border: none;
}
.sw-theme-default > .nav {
  box-shadow: none !important;
}
.btn {
  background-color: var(--primary) !important;
}

@media screen and (max-width: 600px) {
  .sw > .nav {
    flex-direction: row !important;
  }
}
</style>
