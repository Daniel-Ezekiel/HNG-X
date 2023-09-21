import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Home = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // const uid = user.uid;
            setAuthUser(user);
            // console.log(user);
          } else {
            setAuthUser(null);
            navigate("/");
            // console.log(user);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    checkAuthState();
  }, []);

  return (
    <>
      <Header currentUser={authUser?.email} />
      <MainContent />
    </>
  );
};

export default Home;
