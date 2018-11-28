<template>
<v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Blogs">
        <v-btn to="blogs/create" slot="action" class="green accent-4" dark absolute right middle fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="blog in blogs" :key="blog.id">
          {{ blog.title }}
          {{ blog.content }}
          {{ blog.category }}
          {{ blog.createdAt }}
          {{ blog.updatedAt }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import BlogsService from '@/services/BlogsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      blogs: null
    }
  },
  async mounted () {
    // do a request to the backend for all the blogs
    this.blogs = (await BlogsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
