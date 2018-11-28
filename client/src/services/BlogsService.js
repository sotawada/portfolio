import Api from '@/services/Api'

export default {
  index () {
    return Api().get('blogs')
  },
  post (blog) {
    return Api().post('blogs', blog)
  }
}
