import {sendRequest} from '../tools/Tools'
const API_URL = 'http://localhost:8000/api/'

export const createMFA = async (mfaCreate) => {
  let data = {mfaCreate}
  return sendRequest('POST', data, API_URL + 'mfa/')
}

export const resetMFA = async (mfaReset) => {
    let data = {mfaReset}  
    return sendRequest('PUT', data, API_URL + 'mfa/')
}
