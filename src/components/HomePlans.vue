<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex
        xs12
        class="text-xs-center display-1 font-weight-black my-5"
      >らーめぇんりすと🍜</v-flex>
    </v-layout>
    <v-layout row wrap class="meal-plans">
      <v-flex xs12 sm12 md4 v-for="(ramen,i) in ramens" :key="i">
        <v-card :href="ramen.url">
          <v-responsive>
            <v-img :src="ramen.image_url.shop_image1">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">{{ramen.category}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              <h3 class="headline mb-0">{{ramen.name}}</h3>
              <div>
                {{ramen.opentime}}
              </div>
            </div>
          </v-card-text>
        </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "home-plans",
  data(){
    return {
      ramens:[]
    }
  },
  created(){
    const vm = this
    axios.get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=c30f6dcd7031473472461a2d6a1e538e&category_s=RSFST08008&hit_per_page=9&freeword=醤油')
    .then(response => {
      vm.ramens = response.data.rest
      console.log(vm.ramens)
    })
  },
};
</script>

<style scoped>
</style>