import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../service/Loing';
// Import your register API function (ensure it accepts all parameters)
// import { register } from '../services/apiService'; 

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); // Added Last Name state
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState('');

  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();


    if (firstName.length === 0) {
      toast.warning('Please enter first name');
    } else if (lastName.length === 0) {
      toast.warning('Please enter last name');
    } else if (email.length === 0) {
      toast.warning('Please enter email');
    } else if (mobileNumber.length === 0) {
      toast.warning('Please enter mobile number');
    } else if (password.length === 0) {
      toast.warning('Please enter password');
    } else if (birth.length === 0) {
      toast.warning('Please enter birth date');
    } else {
      console.log("Validation successful, proceeding to registration...");
      const response = await registerUser(firstName, lastName, email, password, mobileNumber, birth);
      console.log(response)
      if (response['status'] == 'success') {
        toast.success('registration successful'


        )
      } else {
        toast.error(response['error'] || 'Registration failed.');
      }
    }
  };

  return (
    <form onSubmit={onRegister} className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
      <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
        Sign up
      </h2>

      <div className="relative mb-4">
        <label htmlFor="firstName" className="text-sm leading-7 text-gray-600">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          minLength={2}
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      {/* Added Last Name Input Field */}
      <div className="relative mb-4">
        <label htmlFor="lastName" className="text-sm leading-7 text-gray-600">
          Last Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          minLength={2}
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>


      <div className="relative mb-4">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="John@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="mobileNumber" className="text-sm leading-7 text-gray-600">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          required
          maxLength={12}
          placeholder="Enter 10 digit mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      {/* Added Birth Date Input Field */}
      <div className="relative mb-4">
        <label htmlFor="birth" className="text-sm leading-7 text-gray-600">
          Birth Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date" // Use type="date" for date input
          id="birth"
          name="birth"
          required
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      <div className="relative mb-4">
        <label htmlFor="password" className="text-sm leading-7 text-gray-600">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
        />
      </div>

      <button type="submit" className="w-full px-8 py-2 text-lg text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
        Create Account
      </button>

      <p className="mt-3 text-xs text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-yellow-500">
          Login
        </a>
      </p>
    </form>
  );
}

export default RegistrationForm;
