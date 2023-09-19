import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user ? setAuthUser(user.currentUser.email) : null;
    });
  }, []);
  return <div>{authUser ? "Signed in" : "Sign out"};</div>;
};

export default AuthDetails;
