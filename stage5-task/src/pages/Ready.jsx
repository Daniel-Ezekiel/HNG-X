import { Link } from "react-router-dom";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
import videoPlaceholder from "../assets/video.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import sent from "../assets/sent.png";
import { useState } from "react";
import { CloseRounded } from "@mui/icons-material";

const Ready = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (event) => {
    event.preventDefault();
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  return (
    <div>
      <Header />
      <main className='py-6 md:py-10'>
        <div className='grid gap-10 md:max-w-[124rem] md:mx-auto md:py-10 md:grid-cols-2 md:items-start'>
          <section className='p-4 grid gap-8 md:pt-[0] lg:max-w-[55rem]'>
            <h1 className='font-sora text-2xl text-[#413C6D] xl:text-[4.5rem]'>
              Your video is ready!
            </h1>

            <div className='w-full grid grid-cols-[1fr_3.2rem] gap-x-2'>
              <label htmlFor='video-title' className='col-span-full text-sm'>
                Name
              </label>
              <input
                className='col-span-1 p-1 font-sora font-bold text-lg xl:text-[2.4rem]'
                id='video-title'
                value='Untitled_Video_20232509'
                type='text'
              />
              <button>
                <img src={edit} alt='edit title' />
              </button>
            </div>

            <div className='p-2 flex gap-2 rounded-[1.2rem] justify-between bg-[#E7E7ED]'>
              <input
                className='w-full bg-[transparent] text-base'
                type='email'
                placeholder='enter email of the reciever'
              />
              <button
                className='bg-[#605C84] px-3 py-2 rounded-[1.2rem] text-sm text-white'
                onClick={togglePopup}
              >
                Send
              </button>
            </div>

            <div className='grid gap-1'>
              <label
                className='font-sora font-bold text-sm'
                htmlFor='video url'
              >
                Video Url
              </label>
              <div className='p-4 flex gap-3 rounded-[1.2rem] justify-between items-center bg-[#E7E7ED] text-[1.4rem] xl:text-sm'>
                <input
                  className='w-full font-work-sans'
                  id='video url'
                  type='text'
                  value='https://www.helpmeout/Untitled_Video_20232509'
                  disabled
                />
                <button className='flex gap-1'>
                  <img src={copy} alt='' />
                </button>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-2'>
              <p className='col-span-full font-sora font-bold text-[1.4rem]'>
                Share your video
              </p>
              <button className='border-2 rounded-[1.2rem] p-2 flex justify-center items-center gap-2 font-inter text-[1.4rem] xl:text-sm'>
                <img src={facebook} alt='' />
                Facebook
              </button>
              <button className='border-2 rounded-[1.2rem] p-2 flex justify-center items-center gap-2 font-inter text-[1.4rem] xl:text-sm'>
                <img src={whatsapp} alt='' />
                Whatsapp
              </button>
              <button className='border-2 rounded-[1.2rem] p-2 flex justify-center items-center gap-2 font-inter text-[1.4rem] xl:text-sm'>
                <img src={telegram} alt='' />
                Telegram
              </button>
            </div>
          </section>

          <section className='border-t-[0.1rem] pt-10 grid gap-4 md:border-t-[0] md:border-l-[0.1rem] md:pt-[0] md:pl-4'>
            <div className='p-4'>
              <img src={videoPlaceholder} alt='' />
            </div>

            <div className='p-4'>
              <h2 className='mb-3 font-sora font-bold text-lg xl:text-[2.4rem]'>
                Transcript
              </h2>
              <select
                className='w-[15rem] p-[0.8rem] border-[0.1rem] border-[#CFCFCF] font-work-sans text-[1.4rem] text-[#9D9D9D] xl:text-sm'
                name='language'
                id='language'
              >
                <option value='English'>English</option>
              </select>

              <div className='h-[23rem] overflow-y-scroll mt-6 grid gap-2 font-inter font-medium text-[1.4rem] xl:text-sm'>
                <div className='flex gap-2'>
                  <span>0.01</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the
                  </p>
                </div>

                <div className='flex gap-2'>
                  <span>0.15</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the
                  </p>
                </div>

                <div className='flex gap-2'>
                  <span>0.30</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the
                  </p>
                </div>

                <div className='flex gap-2'>
                  <span>1.00</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className='p-[6rem] bg-[#f4f6f8] md:mt-8'>
          <div className='grid gap-4 font-sora font-bold text-base text-center md:w-[65rem] md:mx-auto md:py-8 xl:text-[2.4rem]'>
            <p>
              To ensure the availability and privacy of your video, we recommend
              saving it to your account.
            </p>

            <button className='w-max px-6 py-3 mx-auto bg-blue rounded-[1.2rem] font-work-sans font-normal text-white xl:text-sm'>
              Save video
            </button>

            <div className='flex justify-center gap-2'>
              <p className='text-[#7E7E7E]'>Don't have an account?</p>
              <Link to='/login' className='underline'>
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>

      {showPopup && (
        <div className='fixed top-[0] left-[0] bg-[rgba(0,0,0,0.32)] w-[100vw] h-[100vh]'></div>
      )}

      {showPopup && (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F2F4F7] w-[30rem] max-w-[60rem] mx-auto p-5 grid gap-9 text-center rounded-[1.2rem] font-work-sans md:w-[45rem] md:py-10'>
          <div className='grid place-items-center'>
            <img src={sent} alt='' />
            <p className='text-sm md:text-lg'>
              Your video has been sent to{" "}
              <span className='font-medium'>johnmark@gmail.com</span>
            </p>
          </div>

          <div className='grid gap-2 place-items-center text-sm md:text-base'>
            <p>
              Would you need to view this video later? Save to your account now!
            </p>
            <button className='bg-blue p-3 rounded-[1.2rem] text-white'>
              Save video
            </button>

            <button
              className='absolute top-4 right-4 border-2 w-6 h-6 rounded-full'
              onClick={togglePopup}
            >
              <CloseRounded />
            </button>
          </div>

          <div className='flex justify-center gap-2 text-[1.2rem] md:text-sm'>
            <p className='text-[#7E7E7E]'>Don't have an account?</p>
            <Link to='/login' className='underline font-bold text-blue'>
              Create account
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Ready;
