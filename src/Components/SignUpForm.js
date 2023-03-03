import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPassword, setConfirmPassword, clearForm } from '../redux/signUpSlice';
import SignUpFormInputs from './SignUpFormInputs';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.signup);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add validation logic here
    dispatch(setName(formValues.name));
    dispatch(setEmail(formValues.email));
    dispatch(setPassword(formValues.password));
    dispatch(setConfirmPassword(formValues.confirmPassword));

    dispatch(clearForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      <SignUpFormInputs formValues={formValues} handleChange={handleChange} />
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button> */}
    </form>
  );
};

export default SignUpForm;