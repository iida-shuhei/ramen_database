<template>
      <!-- ログイン時にはフォームとログアウトボタンを表示 -->
      <div v-if="userStatus" key="login">
        <strong>{{ user.displayName }} </strong> 
        <v-btn @click="doLogout">ログアウト</v-btn>
      </div>
      <!-- 未ログイン時にはログインボタンを表示 -->
      <div v-else key="logout">
        <v-btn @click="doLogin">ログイン</v-btn>
      </div>
</template>

<script>
import Firebase from './../firebase';
export default {
  name: 'authentication',
  created: function() {
    Firebase.onAuth();
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
    // ログインするとtrue
      return this.$store.getters.isSignedIn;
    }
  },
  methods: {
    // ログイン処理
    doLogin() {
      Firebase.login();
    },
    // ログアウト処理
    doLogout() {
      Firebase.logout();
    }
  }
};
</script>