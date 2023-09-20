import { useState, useEffect } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        await onAuthStateChanged(auth, (user) => {
          if (user) {
            // const uid = user.uid;
            setAuthUser(user);
            // console.log(user);
          } else {
            setAuthUser(null);
            // console.log(user);
          }
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthState();
    console.log(isLoading ? null : authUser);
  }, []);

  return (
    <>
      <Header currentUser={authUser?.email} />
      <MainContent />
    </>
  );
};

export default Home;
