import Api from './Api'


export default {
  login (creds) {
    return Api().post('login', creds)
  },
  index () {
    return Api().get('admin/users')
  }
}