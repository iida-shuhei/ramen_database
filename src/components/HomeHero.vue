<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout justify-center align-center column pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">NO RAMEN</div>
      <div class="display-4 font-weight-black white--text text-xs-center mb-3">NO LIFE</div>
      <v-btn fab class="mt-5 brown darken-4">
        <v-icon large color="brown">🍜</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    name:"HomeHero"
};
</script>

<style scoped>
.home-hero {
    background-image:url("https://livedoor.sp.blogimg.jp/ikemen7373/imgs/7/3/73e1b5d0.jpg");
    background-size: cover;
    height:100%;
    width: 100%;
}
</style>