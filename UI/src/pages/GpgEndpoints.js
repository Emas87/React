import {sendRequest} from '../tools/Tools'
const API_URL = 'http://localhost:8000/api/'

export const exportGPGKey = async () => {
  let data = {}
  return sendRequest('POST', data, API_URL + 'exportGPGKey/')
}

export const createGPGKey = async (gpgKeyCreate) => {
  let data = {gpgKeyCreate}
  return sendRequest('POST', data, API_URL + 'gpg/')
}

export const resetGPGKey = async (gpgKeyReset) => {
  let data = {gpgKeyReset}
  return sendRequest('PUT', data, API_URL + 'gpg/')
}
