import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import { updatePassword } from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const signIn = (event) => {
    event.preventDefault();
    console.log("Handling update!");
  };

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

