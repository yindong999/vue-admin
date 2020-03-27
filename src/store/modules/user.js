import { login } from '../../api/login'

const user = {
  state: {
    token: '',
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },

  actions: {
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password)
          .then(async res => {
            var data = await res.json()
            console.log(data)
            localStorage.setItem('username', username)
            commit('SET_NAME', username)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default user
