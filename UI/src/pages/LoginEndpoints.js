import {sendRequest} from '../tools/Tools'
const API_URL = 'http://localhost:8000/api/'

export const submit = async (loginID, password, mfaToken) => {
  let data = {loginID,password, mfaToken}
  return sendRequest('POST', data, API_URL + 'login/')
}