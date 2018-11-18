<template>
  <v-toolbar fixed>
    <v-toolbar-title class="mr-4">

      <span class="home" @click="navigateTo({name: 'root'})">
         Blog from Nowhere
      </span>
    </v-toolbar-title>

    <!-- TODO: Implement Me -->
    <!-- <v-toolbar-items>
      <v-btn flat>Browser</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items
      v-if="!$store.state.isUserLoggedIn">
      <v-btn flat to="/login">Log in</v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      v-if="!$store.state.isUserLoggedIn">
      <v-btn flat to="/register">Sign up</v-btn>
    </v-toolbar-items>

    <v-toolbar-items
      v-if="$store.state.isUserLoggedIn">
      <v-btn flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gray;
}
</style>
