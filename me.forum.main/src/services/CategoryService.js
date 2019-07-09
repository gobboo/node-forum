import Api from './Api'


export default {
  create (creds) {
    return Api().post('category', creds)
  },
  index () {
    return Api().get('categories')
  }
}