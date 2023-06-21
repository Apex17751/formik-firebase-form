import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

const Log = () => {
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
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      Email: "",
      PassWord: "",
    },
    validationSchema: Yup.object({
      PassWord: Yup.string()
        .min(8, "Must be 8 characters long")
        .required("Required"),

      Email: Yup.string()
        .email("Invalid Email Address")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await signInWithEmailAndPassword(auth, values.Email, values.PassWord);
        toast.success("Logged in successfully!");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-email'){
          toast.error('invalid email address')
        }
        else if (errorCode === 'auth/wrong-password'){
          toast.error('wrong password')
        }
        else{
          toast.error('Login failed')
        }
        console.log("Error logging in:", error.message);
      }

      finally {
        setSubmitting(false); // Enable the buttons again
      }
    }
  });
  const handleTwitterLogin = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new TwitterAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Twitter successfully!");
    } catch (error) {
      console.log("Error logging in with Twitter:", error.message);
      toast.error('Error logging in with Twitter');
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with GitHub successfully!");
    } catch (error) {
      console.log("Error logging in with GitHub:", error.message);
      toast.error('Error logging in with GitHub');
    }
  };

  
  console.log(formik.errors);

  return (
    <div>
    <div className='bg-zinc-300 h-screen pt-10 lg:pt-20 flex items-center pb-10 justify-center px-10' id='height'>
    <div className='block w-full md:w-1/2'>
    <Link to='/'>
    <p className='font-bold text-zinc-600 text-2xl cursor-pointer underline absolute left-10 lg:left-20 top-10'>Bvb.</p>
    </Link>
    <div className='text-xl uppercase pt-10 pb-6 lg:pb-10 text-center font-bold text-zinc-600'>
            <h1>Sign in to your account </h1>
            </div>
        <form onSubmit={formik.handleSubmit} className='mx-auto block  w-full '>
            <div className='bg-white mb-10 lg:mb-0 relative px-7 lg:px-10 pt-8 pb-8 items-center justify-center rounded-lg'>
            <div className='mb-5'>
                <label htmlFor="name" className='text-sm lg:text-md'>Email Address</label>
                <div>
                    <input type="text"
                    id='Email'
                    name='Email'
                     className='px-3 bg-zinc-300 w-full text-sm lg:text-md py-2 rounded-lg  border-none outline-blue-900 '
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Email}
                    />
                   {formik.touched.Email && formik.errors.Email ? <p className='text-red-500 text-sm pt-2'>{formik.errors.Email}</p> : null}    
                    
                </div>
            </div>
            <div className='mb-5'>
                <label htmlFor="password" className='text-sm lg:text-md'>Password</label>
                <div>
                    <input type={showPassword ? 'text' : 'password'}
                    name='PassWord'
                     className='px-3 w-full bg-zinc-300 text-sm lg:text-md py-2 rounded-lg border-none outline-blue-900 '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.PassWord} />
                     <button
          type='button'
          className='absolute right-14  transform -translate-y-1/20 mt-2  focus:outline-none'
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <svg/>
            </svg>
          ): (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
<svg/>
            </svg>
          )}
        </button>
                    {formik.touched.PassWord && formik.errors.PassWord ? <p className='text-red-500 text-sm pt-2'>{formik.errors.PassWord}</p> : null}
                </div>
                
            </div>
            <div className='flex justify-between items-center'>
            <div>
                <input type="checkbox" name="" className=''  id="" />
                <label htmlFor="remember" className='pl-3 text-sm lg:text-md'>Remember me</label>
            </div>
            <div>
                <p className='text-sm lg:text-md text-blue-600 cursor-pointer'>Forgot password?</p>
            </div>
            </div>
            
            <div>
                <button type='submit' disabled={formik.isSubmitting} className='text-center text-sm lg:text-md bg-blue-600 w-full py-3 rounded-lg uppercase text-white font-bold mt-4'>
                  {formik.isSubmitting ? 'Signing in...': 'Sign in'}
</button>
            </div>

            <div>
                <div className='flex w-full items-center justify-between mt-3'>
                    <hr className='bg-black '/>
                    <p className='text-sm lg:text-md'>Or continue with</p>
                    <hr />
                </div>
               <div className='flex w-full mt-4'>
               <div className='flex w-full'>
                    <button type='button' className='  bg-blue-400 text-center text-sm lg:text-md mr-2 py-2 px-4 rounded-lg w-full  text-white' onClick={handleTwitterLogin}>Twitter</button>
                </div>
                <div className='flex w-full'>
                    <button type='button' className='bg-black text-sm lg:text-md text-center py-2 px-4 rounded-lg w-full text-white' onClick={handleGitHubLogin}>Github</button>
                </div>

               </div>
            </div>
            </div>
            <div className='flex text-sm items-center justify-center pt-3'>
                <p>Need an account?</p>
                <Link to='/form'>
                <a href="" className='pl-2 text-blue-600'>Sign up</a>
                </Link>
            </div>
        </form>
        <ToastContainer/>
    </div>
  
</div>
</div>
  );
};

export default Log;
