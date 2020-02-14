<template>
  <v-container>
    <v-layout text-center wrap> 
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          検索結果
        </h1>
      </v-flex>

      <v-flex mb-5 xs12>
      <v-card 
        color="black" dark 
        v-for="(ramen,i) in ramens" 
        :key="i"
        :href="ramen.url"
        >
        <v-list-item three-line>
          <v-list-item-content class="align-self-start">
            <v-list-item-title class="headline mb-2" v-text="ramen.name">
            </v-list-item-title>
            <v-list-item-subtitle v-text="ramen.address"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar size="125" tile>
            <v-img :src="ramen.image_url.shop_image2"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  name:"ramen",
  computed:{
    ramens(){
      return this.$store.state.ramens
    }
  }
};
</script>

<style scoped>
</style>