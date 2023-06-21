import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAY89j5yy301hdHTzhy2avl7WT3KtxNoVw",
      authDomain: "funnn-99704.firebaseapp.com",
      projectId: "funnn-99704",
      storageBucket: "funnn-99704.appspot.com",
      messagingSenderId: "200906551763",
      appId: "1:200906551763:web:4b309b9b4c510f86fcbf26",
      measurementId: "G-KH5XZ3K6YR",
      twitterApiKey: "****dwq20a",
      twitterApiSecret: 
      "vqpMLDaUl8IN8pyZhfEc6MyVYZJh8Fl6xH8PjV6Otzfx4"


    };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignup = async (values, setSubmitting) => {
    try {
      const { fullName, email, passWord } = values;
      await createUserWithEmailAndPassword(auth, email, passWord);
      toast.success('Signup successful');
      // You can perform further actions such as redirecting to a new page
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error('Email already in use');
      console.error('Signup error:', errorCode, errorMessage);
      // You can display an error message or perform any necessary actions
    } finally {
      setSubmitting(false); // Enable the button again
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      passWord: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Name too short')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      passWord: Yup.string()
        .required('Required')
        .min(4, 'Password too short'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('passWord')], 'Passwords do not match')
    }),
    onSubmit: (values, { setSubmitting }) => {
      handleSignup(values, setSubmitting);
    }
  });

  return (
    <div className=''>
      <div className='bg-zinc-300 h-screen pt-20 flex items-center justify-center px-10' id='height'>
        <div className='block w-full md:w-1/2 pb-20'>
          <Link to='/'>
            <p className='font-bold text-zinc-600 text-2xl cursor-pointer underline absolute left-10 lg:left-20 top-10'>Bvb.</p>
          </Link>
          <div className='text-xl uppercase pb-10 text-center font-bold text-zinc-700'>
            <h1>Sign up to your account</h1>
          </div>
          <form action='' onSubmit={formik.handleSubmit} className='mx-auto block w-full'>
            <div className='bg-white px-10 pt-8 pb-10 items-center justify-center rounded-lg'>
              <div className='mb-5'>
                <label htmlFor='name' className='text-sm lg:text-md'>Full name*</label>
                <div>
                  <input
                    type='text'
                    name='fullName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className='px-3 bg-zinc-300 w-full py-2 text-sm lg:text-md rounded-lg border-none outline-blue-900'
                    required
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p className='text-red-500 text-sm pt-2'>{formik.errors.fullName}</p>
                  ) : null}
                </div>
              </div>
              <div className='mb-5'>
                <label htmlFor='email' className='text-sm lg:text-md'>Email*</label>
                <div>
                  <input
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className='px-3 w-full bg-zinc-300 text-sm lg:text-md py-2 rounded-lg border-none outline-blue-900'
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className='text-red-500 text-sm pt-2'>{formik.errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className='mb-5'>
                <label htmlFor='password' className='text-sm lg:text-md'>Password*</label>
                <div className=' items-center w-full justify-center relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='passWord'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passWord}
                    className='px-3 w-full bg-zinc-300 py-2 text-sm lg:text-md rounded-lg border-none outline-blue-900'
                  />
                   <button
          type='button'
          className='absolute right-5   focus:outline-none'
          onClick={togglePasswordVisibility}
        >
                  {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-0" id='close'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <svg/>
            </svg>
          ): (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-0" id='open'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
<svg/>
            </svg>
          )}
          </button>
                  {formik.touched.passWord && formik.errors.passWord ? (
                    <p className='text-red-500 text-sm pt-2'>{formik.errors.passWord}</p>
                  ) : null}
                </div>
              </div>
              <div className='mb-5'>
                <label htmlFor='confirmPassword' className='text-sm lg:text-md'>Repeat Password</label>
                <div className=' items-center w-full justify-center relative'>
                  <input
                    type='password'
                    name='confirmPassword'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className='px-3 w-full py-2 bg-zinc-300 text-sm lg:text-md rounded-lg border-none outline-blue-900'
                    
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <p className='text-red-500 text-sm pt-2'>{formik.errors.confirmPassword}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <button type='submit' disabled={formik.isSubmitting} className='text-center bg-blue-600 w-full py-3 mt-3 text-sm lg:text-md rounded-lg uppercase text-white font-bold'>
                  {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
          <div>
            <div className='flex text-sm items-center justify-center pt-3'>
              <p>Have an account?</p>
              <Link to='/log'>
                <a href='' className='underline text-blue-600 pl-2'>Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
