import React from 'react';

const SignUpFormInputs = ({ formValues, handleChange }) => {
return (
<div className='flex items-center justify-center h-screen'>
  <div className='w-2/4 '>
<label htmlFor="name" className="block font-medium text-gray-700">Name:</label>
<input
     type="text"
     id="name"
     name="name"
     value={formValues.name}
     onChange={handleChange}
     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
   />
<br />
<label htmlFor="email" className="block font-medium text-gray-700">Email:</label>
<input
     type="email"
     id="email"
     name="email"
     value={formValues.email}
     onChange={handleChange}
     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
   />
<br />
<label htmlFor="password" className="block font-medium text-gray-700">Password:</label>
<input
     type="password"
     id="password"
     name="password"
     value={formValues.password}
     onChange={handleChange}
     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
   />
<br />
<label htmlFor="confirmPassword" className="block font-medium text-gray-700">Confirm Password:</label>
<input
     type="password"
     id="confirmPassword"
     name="confirmPassword"
     value={formValues.confirmPassword}
     onChange={handleChange}
     className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
   />
<br />
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline" type="login">
        SignIn
</button>
</div>
</div>
);
};
export default SignUpFormInputs;
