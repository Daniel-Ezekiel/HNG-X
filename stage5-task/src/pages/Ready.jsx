import Footer from "../components/Footer";
import Header from "../components/Header";
import edit from "../assets/edit.png";
import copy from "../assets/copy.png";
import videoPlaceholder from "../assets/video.png";
import { Link } from "react-router-dom";

const Ready = () => {
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
              <button className='bg-[#605C84] px-3 py-2 rounded-[1.2rem] text-sm text-white'>
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
              <button className='border-2 rounded-[1.2rem] p-2 font-inter text-[1.4rem] xl:text-sm'>
                Facebook
              </button>
              <button className='border-2 rounded-[1.2rem] p-2 font-inter text-[1.4rem] xl:text-sm'>
                Whatsapp
              </button>
              <button className='border-2 rounded-[1.2rem] p-2 font-inter text-[1.4rem] xl:text-sm'>
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
      <Footer />
    </div>
  );
};

export default Ready;
