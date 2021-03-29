import * as types from './mutation-types'
const baseUrl = 'http://80.87.192.59:5252/api'

export const state = () => ({
  authToken: null,
  wallets: [],
  totalBalance: null,
  loading: false,
})

export const getters = {
  isAuth: (state) => !!state.authToken,
}

export const actions = {
  async registrationUser({ commit }, data) {
    try {
      commit(types.SET_LOADING, true)
      const response = await this.$axios.post(`${baseUrl}/auth/register`, data)
      if (response.data.success) {
        this.$router.push('/login')
      }
      commit(types.SET_LOADING, false)
      return response
    } catch (err) {
      commit(types.SET_LOADING, false)
      console.log(err)
    }
  },

  async loginUser({ commit }, data) {
    try {
      commit(types.SET_LOADING, true)
      const response = await this.$axios.post(`${baseUrl}/auth/login`, data)
      if (response.data.success) {
        this.$cookiz.set('access_token', response.data.access_token)
        commit(types.SET_AUTH, response.data.access_token)
      }
      this.$router.replace('/')
      commit(types.SET_LOADING, false)
      return response
    } catch (err) {
      commit(types.SET_LOADING, false)
      console.log(err)
    }
  },

  async logOut({ commit }) {
    const headers = {
      Authorization: `Bearer ${this.$cookiz.get('access_token')}`,
    }
    try {
      commit(types.SET_LOADING, true)
      const response = await this.$axios.post(
        `${baseUrl}/auth/logout`,
        {},
        { headers }
      )
      if (response.data.success) {
        commit(types.SET_AUTH, null)
        commit(types.SET_LOADING, false)
        this.$cookiz.remove('access_token')
        this.$router.replace('/login')
        return response.data
      }
    } catch (err) {
      commit(types.SET_LOADING, false)
      console.log(err)
    }
  },

  async getWallets({ commit }) {
    try {
      commit(types.SET_LOADING, true)
      const response = await this.$axios.get(`${baseUrl}/wallet`, {
        headers: {
          Authorization: `Bearer ${this.$cookiz.get('access_token')}`,
        },
      })
      if (response.data.success) {
        commit(types.SET_WALLETS, response.data.wallets)
        commit(types.SET_BALANCE, response.data.balance)
        commit(types.SET_LOADING, false)
        return response
      }
    } catch (err) {
      commit(types.SET_LOADING, false)
      console.log(err)
    }
  },
}
export const mutations = {
  [types.SET_AUTH](s, token) {
    s.authToken = token
  },
  [types.SET_WALLETS](s, wallets) {
    s.wallets = wallets
  },
  [types.SET_BALANCE](s, balance) {
    s.totalBalance = balance
  },
  [types.SET_LOADING](s, payload) {
    s.loading = payload
  },
}
