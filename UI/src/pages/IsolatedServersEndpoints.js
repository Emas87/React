import {sendRequest} from '../tools/Tools'
const API_URL = 'http://localhost:8000/api/'

export const submitImport = async (inputImport, inputFileImport) => {
  let data = {'input': inputImport,'input_file': inputFileImport}
  return sendRequest('POST', data, API_URL + 'isolatedServers/')
}

export const submitDelete = async (inputDelete, outputDelete) => {
  let data = {'input': inputDelete,'gpgKeyID': outputDelete}
  return sendRequest('DELETE', data, API_URL + 'isolatedServers/')
}
