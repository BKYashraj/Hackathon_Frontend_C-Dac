import axios from 'axios'

export async function login(email, password) {
  try {
    // create url
    const url = `localhost/users/login`

    // create body
    const body = { email, password }

    // send the POST request
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}