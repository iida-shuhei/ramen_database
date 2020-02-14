<template>
  <v-app>
    <Authentication/>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation';
import Authentication from "@/components/Authentication.vue";
export default {
  name:'App',
  components:{
    AppNavigation,
    Authentication
  }
};
</script>

<style>

</style>