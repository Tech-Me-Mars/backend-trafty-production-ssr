<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import MenuItems from "@/lib/Menu";

import { Store } from "~/stores/Store";

const { iconHover } = Store;
const addActive = ref("Dashboard");
const router = useRoute();
watchEffect(() => {
  MenuItems.map((el) => {
    if (router.fullPath == el.to) {
      addActive.value = String(el.title);
    }
    el.subMenuItems?.map((ell) => {
      if (router.fullPath == ell.to) {
        addActive.value = String(el.title);
      }
      ell.subMenuDownItems?.map((ele) => {
        if (router.fullPath == ele.to) {
          addActive.value = String(el.title);
        }
      });
    });
  });
});
</script>

<template>
  <div class="deznav" @mouseenter="iconHover = true" @mouseleave="iconHover = false">
    <div class="deznav-scroll">
      <ul class="metismenu" id="menu">
        <li class="menu-title">YOUR COMPANY</li>
        <!-- <template v-for="({ title, icons, className, subMenuItems, to }, ind) in MenuItems" :key="ind">
          <li v-if="className == 'sub-menu'" :class="addActive == title ? ' mm-active' : ''">
            <NuxtLink class="has-arrow" to="?" data-bs-toggle="collapse" :data-bs-target="`#collapseExample${ind}`" aria-expanded="false">
              <div class="menu-icon" v-html="icons"></div>
              <span class="nav-text">{{ title }}</span>
            </NuxtLink>
            <ul :class="`collapse mm-show ${addActive == title ? 'show' : ''}`" :id="`collapseExample${ind}`">
              <template v-for="({ menu, subMenuDownItems, className, to }, index) in subMenuItems" :key="ind">
                <li v-if="className == 'sub-menu-down'">
                  <a
                    class="has-arrow collapsed"
                    href="javascript:void(0);"
                    aria-expanded="false"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapseExample${index}`"
                    >{{ menu }}</a
                  >
                  <ul aria-expanded="false" class="collapse" :id="`collapseExample${index}`">
                    <li v-for="({ child, to }, ind) in subMenuDownItems" :key="ind" :class="addActive == title ? ' mm-active' : ''">
                      <NuxtLink :to="`${to}`">{{ child }}</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li v-else>
                  <NuxtLink :to="`${to}`">{{ menu }}</NuxtLink>
                </li>
              </template>
            </ul>
          </li>

          <li class="menu-title" v-else-if="className == 'menu-title'">OUR FEATURES</li>

          <li v-else :class="addActive == title ? ' mm-active' : ''">
            <NuxtLink :to="`${to}`" :class="addActive == title ? ' mm-active' : ''" aria-expanded="false">
              <div class="menu-icon" v-html="icons"></div>
              <span class="nav-text">{{ title }}</span>
            </NuxtLink>
          </li>
        </template> -->
      </ul>
      <div class="help-desk">
        <a href="javascript:void(0)" class="btn btn-primary">Help Desk</a>
      </div>
    </div>
  </div>
</template>

<style>
.mm-show {
  transition: all 0.3s linear;
}
</style>
