import axios from 'axios'

const withKey = axios.create()

withKey.interceptors.request.use(config => {
  config.params = {
    ...config.params
  }

  return config
})

export { withKey }
