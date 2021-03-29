export default function ({ app, redirect }) {
  const token = app.$cookiz.get('access_token')
  if (token) {
    return redirect('/')
  }
}
