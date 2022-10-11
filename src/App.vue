<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Sidebar />
  <RouterView />
</template>

<script>
import { volitileState } from "./config";
window.localStorage.setItem("state", JSON.stringify(volitileState));
</script>
