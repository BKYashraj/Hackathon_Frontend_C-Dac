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

export async function registerUser(firstName, lastName, email, password, mobileNumber, birth) {
  try {
    const url = `http://localhost:4000/user/register`; 
    
    console.log("Registering user:", { firstName, email, mobileNumber, password });

    const body = { 
      first_name: firstName,
      last_name: lastName,
      email: email, 
      password: password,
      mobile: mobileNumber, 
      birth: birth
    };
    
    console.log("Sending body:", body);
    
    const response = await axios.post(url, body);
    
    console.log("API response:", response);
    
    return response.data;
    
  } catch (ex) {
    console.log(`exception during registration: `, ex);
    return { status: 'error', error: ex.message || 'Network error' };
  }
}
