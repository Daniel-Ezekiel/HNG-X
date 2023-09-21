import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const signIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setCurrentUser(user);
        console.log(userCredential);
        navigate("/galleria");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
        console.log(errorCode, errorMessage);
      });
    // console.log("Handling update!");
  };

  console.log(currentUser, error);

  return (
    <div className='min-h-[100vh] grid place-items-center'>
      <form
        onSubmit={signIn}
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
            onChange={updateEmail}
            required
            className='text-xl border p-2 px-4 rounded-full text-dark-gray placeholder:text-dark-gray'
          />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={updatePassword}
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
