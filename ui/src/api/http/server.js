import { get, post } from '../config'

export default {
    testGet: params => get('/test_get/', params),
    testPost: params => post('/test_post/', params)
}
