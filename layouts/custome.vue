<script lang="ts" setup>
import AddNewTask from "~/components/AddNewTask.vue";
import ChatBox from "~/lib/chatbox/ChatBox.vue";
import Header from "~/lib/Header.vue";
import NavHeader from "~/lib/NavHeader.vue";
import Sidebar from "~/lib/Sidebar.vue";
import { Store } from "~/stores/Store";

const { iconHover, naveHeader } = Store;
</script>

<template>
  <div id="main-wrapper" :class="`show ${naveHeader ? 'menu-toggle' : ''} ${iconHover ? 'iconhover-toggle' : ''}`">
    <NavHeader />
    <ChatBox />
    <Header />
    <Sidebar />
    <div class="content-body">
      <NuxtPage />
    </div>
    <AddNewTask />
  </div>
</template>
