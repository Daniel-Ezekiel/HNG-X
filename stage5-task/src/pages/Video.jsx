import { Link } from "react-router-dom";
import Header from "../components/dashboard/Header";
import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
import videoFrame from "../assets/main-video-frame.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";

const Video = () => {
  return (
    <div>
      <div className='grid items-center gap-5 font-work-sans xl:pt-2'>
        <Header />

        <main className='p-4 grid gap-4 text-[1.4rem] text-[rgba(20,20,20,0.7)] xl:w-[124rem] xl:mx-auto xl:text-sm  '>
          <section className='flex flex-wrap gap-[0.5rem] md:col-span-full'>
            <Link to='/' className='hover:underline'>
              Home
            </Link>
            /<Link className='hover:underline'>Recent Videos</Link>/
            <Link className='text-blue font-medium hover:underline'>
              How To Create A Facebook Ad Listing
            </Link>
          </section>

          <section className='grid gap-3 md:grid md:grid-cols-2'>
            <div className='flex items-center gap-2 md:col-span-full'>
              <h1 className='font-sora font-bold text-lg leading-10 xl:text-[2.4rem]'>
                How To Create A Facebook Ad Listing
              </h1>
              <button>
                <img src={edit} alt='edit btn' />
              </button>
            </div>

            <div className='h-[25rem] p-2 border-[0.1rem] border-[#E7E7ED] rounded-[1.2rem] md:h-[max-content] md:col-span-full'>
              <img
                src={videoFrame}
                alt='main video'
                className='h-full w-full object-cover'
              />
            </div>

            <div className='p-2 flex gap-2 rounded-[1.2rem] justify-between bg-[#E7E7ED]'>
              <input
                className='w-full bg-[transparent] text-sm'
                type='email'
                placeholder='enter email of the reciever'
              />
              <button
                className='bg-[#605C84] px-3 py-[0.8rem] rounded-[0.8rem] text-sm text-white'
                // onClick={togglePopup}
              >
                Send
              </button>
            </div>

            <div className='grid gap-1'>
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

            <div className='flex flex-wrap gap-2 md:col-span-full'>
              <p className='w-full font-work-sans font-bold text-[1.4rem] xl:font-medium xl:text-lg'>
                Share your video
              </p>
              <button className='border-[0.1rem] rounded-[0.6rem] p-2 flex justify-center items-center gap-1 font-inter text-[1.4rem] xl:text-sm'>
                <img src={facebook} alt='social icon' />
                Facebook
              </button>
              <button className='border-[0.1rem] rounded-[0.6rem] p-2 flex justify-center items-center gap-2 font-inter text-[1.4rem] xl:text-sm'>
                <img src={whatsapp} alt='social icon' />
                Whatsapp
              </button>
              <button className='border-[0.1rem] rounded-[0.6rem] p-2 flex justify-center items-center gap-2 font-inter text-[1.4rem] xl:text-sm'>
                <img src={telegram} alt='social icon' />
                Telegram
              </button>
            </div>

            <div className='mt-8 md:col-span-full'>
              <h2 className='mb-3 font-work-sans font-medium text-lg xl:text-lg'>
                Transcript
              </h2>
              <select
                className='w-[15rem] p-[0.8rem] border-[0.1rem] border-[#CFCFCF] font-work-sans text-[1.4rem] text-[#9D9D9D] xl:text-sm'
                name='language'
                id='language'
              >
                <option value='English'>English</option>
              </select>

              <div className='mt-6 grid gap-2 font-inter font-medium text-[1.4rem] xl:gap-6 xl:text-sm'>
                <div className='flex gap-2 xl:w-[110rem] xl:gap-8 xl:text-lg xl:leading-[1.7]'>
                  <span className='font-bold'>0.01</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the First step. Open Facebook on your desktop or mobile
                    device and locate "Marketplace" in the left-hand menu or at
                    the top of the
                  </p>
                </div>

                <div className='flex gap-2 xl:w-[110rem] xl:gap-8 xl:text-lg xl:leading-[1.7]'>
                  <span className='font-bold'>0.15</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the First step. Open Facebook on your desktop or mobile
                    device and locate "Marketplace" in the left-hand menu or at
                    the top of the
                  </p>
                </div>

                <div className='flex gap-2 xl:w-[110rem] xl:gap-8 xl:text-lg xl:leading-[1.7]'>
                  <span className='font-bold'>0.30</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the First step. Open Facebook on your desktop or mobile
                    device and locate "Marketplace" in the left-hand menu or at
                    the top of the
                  </p>
                </div>

                <div className='flex gap-2 xl:w-[110rem] xl:gap-8 xl:text-lg xl:leading-[1.7]'>
                  <span className='font-bold'>1.00</span>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the First step. Open Facebook on your desktop or mobile
                    device and locate "Marketplace" in the left-hand menu or at
                    the top of the
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Video;
