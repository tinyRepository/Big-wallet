export default {
  methods: {
    validateForm(group) {
      return new Promise((resolve, reject) => {
        let v = this.$v
        if (group) {
          group.split('.').forEach((key) => (v = v[key]))
        }
        v.$touch()
        if (v.$invalid) {
          reject(new Error('Invalid form'))
        } else {
          resolve()
        }
      })
    },
  },
}
