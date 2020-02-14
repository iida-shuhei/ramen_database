<template>
  <v-container fluid class="brown lighten-4">
    <v-container grid-list-lg>
      <v-layout column>
        <v-flex
          class="display-2 font-weight-black brown--text text-xs-center my-5"
        >What is Ramen?</v-flex>
        <v-flex>
          <div class="headline mt-3 brown--text font-weight-bold">Ramen description</div>
          <p class="subheading mt-3">
            Ramen is a Japanese dish with a translation of "pulled noodles". It consists of Chinese wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (叉焼, chāshū), nori (dried seaweed), menma, and scallions. Nearly every region in Japan has its own variation of ramen, such as the tonkotsu (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido. Mazemen is the name of a ramen dish that is not served in a soup, but rather with a sauce (such as tare), like noodles that are served with a sweet and sour sauce.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "HomeDetails"
};
</script>

<style scoped>
</style>