import { useState } from "react";

const SignIn = ({
  email,
  password,
  updateEmailVal,
  updatePasswordVal,
  handleSignin,
}) => {
  return (
    <div className='min-h-[100vh] grid place-items-center'>
      <form
        onSubmit={handleSignin}
        className='grid gap-2 p-[4rem] py-[6rem] w-[90%] bg-white shadow-md text-center max-w-[45rem] transition-all duration-500 ease-in-out'
      >
        <p className='text-xl'>Get full access to the features right away!</p>
        <h2 className='font-bold text-2xl'>Login to your account</h2>
        <div className='grid gap-4 mt-4'>
          <input
            type='email'
            name='email'
            placeholder='Enter your email address'
            value={email}
            onChange={updateEmailVal}
            required
            className='text-xl border p-2 px-4 rounded-full text-dark-gray placeholder:text-dark-gray'
          />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={updatePasswordVal}
            required
            className='text-xl border p-2 px-4 rounded-full text-dark-gray placeholder:text-dark-gray'
          />
          <button
            type='submit'
            className='p-2  rounded-full bg-rose font-bold text-xl text-white hover:scale-105'
            // onClick={() => handleChange()}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
