import Cookies from 'js-cookie'
export const sendRequest = async (method, data, url) => { 
    const csrftoken = Cookies.get('csrftoken');
    const requestOptions = {
      method: method,
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    }
  
    return await fetch(url, requestOptions)
  }