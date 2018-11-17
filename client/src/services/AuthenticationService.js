import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationServices.register({
//   email: 'tetsing@gmail.com',
//   password: '12345678'
// })
