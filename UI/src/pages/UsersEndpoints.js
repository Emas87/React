import {sendRequest} from '../tools/Tools'
const API_URL = 'http://localhost:8000/api/'

export const submitCreate = async (LoginIDCreate, passwordCreate, dropdownCreate, checkboxItemsCreate) => {
  let data = {LoginIDCreate,passwordCreate, dropdownCreate, checkboxItemsCreate}
  return sendRequest('POST', data, API_URL + 'users/')
}

export const submitReset = async (LoginIDReset, passwordReset, userTypeReset, checkboxItemsReset) => {
  let data = {LoginIDReset, passwordReset, userTypeReset, checkboxItemsReset}

  return sendRequest('PUT', data, API_URL + 'users/')
}
