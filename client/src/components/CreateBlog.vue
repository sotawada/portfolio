<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Blog Metadata">
        <v-text-field
          label="Title"
          required
          v-model="blog.title"
        ></v-text-field>

        <v-text-field
          label="Category"
          required
          v-model="blog.category"
        ></v-text-field>

        <v-text-field
          label="Blog Image Url"
          v-model="blog.blogImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          v-model="blog.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Blog Content" class="ml-2">
        <v-text-field
          label="Content"
          required
          textarea
          v-model="blog.content"
        ></v-text-field>
      </panel>
      <v-btn class="green" dark @click="create">Create Blog</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import BlogsService from '@/services/BlogsService'
export default {
  data () {
    return {
      blog: {
        title: null,
        content: null,
        category: null,
        blogImageUrl: null,
        youtubeId: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await BlogsService.post(this.blog)
        this.$router.push({
          name: 'blogs'
        })
      } catch (err) {
        console.log(err)
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
</style>
