import {
  FETCH_INIT_TEXT,
  SET_INIT_TEXT
} from 'consts'
import { fetchMockData } from 'api'

export default {

  [FETCH_INIT_TEXT]: ({ commit }) => fetchMockData().then(res => commit(SET_INIT_TEXT, res.data))

}
