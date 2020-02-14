<template>
    <span>
    <v-list>
    </v-list>
    <v-toolbar color="yellow">
        <v-spacer class="hidden-md-and-up"></v-spacer>
        <router-link to="/">
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        </router-link>

        <v-col cols="12" sm="3">
        <v-text-field v-model="freeword" label="キーワードを入力してください" ></v-text-field></v-col>
        <v-btn @click="search(freeword)" to="/result">検索</v-btn>
        <v-spacer></v-spacer>
        <p>
    </p>
    </v-toolbar>
</span>
</template>

<script>
export default {
    name:'AppNavigation',
    data(){
        return {
            appTitle: 'らーめぇん🍜',
            freeword:'',
        }
    },
    methods:{
        search(freeword){
            this.$store.dispatch("getRamen",freeword)
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.router-link-exact-active {
  text-decoration: none;
}
.v-toolbar__title {
  color: black;
  text-decoration: none;
  font-size: 30px;
}
</style>