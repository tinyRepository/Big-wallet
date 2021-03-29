export default function ({ app, redirect }) {
  const token = app.$cookiz.get('access_token')
  if (!token) {
    this.$store.commit('SET_AUTH', token)
    return redirect('/login')
  }
}
