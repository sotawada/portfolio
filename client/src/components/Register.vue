<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="portfolio-form"
        autocomplete="off">
          <v-text-field
            color="green"
            label="Email"
            v-model="email"
          ></v-text-field>
          <br />
          <v-text-field
            type="password"
            color="green"
            label="Password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br />
        <div class="error" v-html="error" />
        <br />
        <v-btn class="green" dark @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: r;
}
</style>
