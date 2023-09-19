import Header from "../components/Header";
import MainContent from "../components/MainContent";

const Home = ({ currentUser }) => {
  return (
    <>
      <Header currentUser={currentUser} />
      <MainContent />
    </>
  );
};

export default Home;
