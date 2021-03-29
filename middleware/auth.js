export default function ({ app, store, redirect }) {
  const token = app.$cookiz.get('access_token')
  if (!token) {
    store.commit('SET_AUTH', token)
    return redirect('/login')
  }
}
