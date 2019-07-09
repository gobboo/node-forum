import Api from './Api'


export default {
  new (data) {
    return Api().post('forum', data)
  },
  index () {
    return Api().get('forums')
  },
  get (id) {
    return Api().get('forum', id)
  }
}