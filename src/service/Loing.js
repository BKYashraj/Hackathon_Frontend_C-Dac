import axios from 'axios'

export async function login1(email, password) {
  try {
    // create url
    const url = `http://localhost:4000/user/login/`
    console.log(email, password);
    // create body
    const body = { email, password }
    console.log(body)
    // send the POST request
    const response = await axios.post(url, body)
    console.log(response)
    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}