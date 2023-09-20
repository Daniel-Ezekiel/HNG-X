import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function App() {
  // const navigate = useNavigate();
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
      })
      .then(redirect("/"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
        console.log(errorCode, errorMessage);
      });
    // <Navigate to='/' />;
    return redirect("/");
    // console.log("Handling update!");
  };

  console.log(currentUser, error);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home currUser={currentUser} />} />
          <Route
            exact
            path='/signin'
            element={
              <SignIn
                email={email}
                password={password}
                currentUser={currentUser}
                updateEmailVal={updateEmail}
                updatePasswordVal={updatePassword}
                handleSignin={signIn}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

