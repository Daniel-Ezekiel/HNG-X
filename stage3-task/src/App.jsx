import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Popup from "./components/Popup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  function togglePopup(event) {
    event.stopPropagation();

    // console.log(isLoggedIn, showPopup);
    setShowPopup(!showPopup);
  }

  return (
    <>
      <Header userLoggedIn={isLoggedIn} handlePopupOpen={togglePopup} />
      <MainContent userLoggedIn={isLoggedIn} />
      {showPopup && <Popup handlePopupClose={togglePopup} />}
    </>
  );
}

export default App;

