import { ArrowForwardRounded } from "@mui/icons-material";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import heroImg from "../assets/hero-img.png";
import featureImg from "../assets/feature-img.png";
import demoImg from "../assets/demo-img.png";
import simpleIcon from "../assets/simple-icon.png";
import shareIcon from "../assets/share-icon.png";
import revisitIcon from "../assets/revisit-icon.png";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className='p-4 py-[8rem]'>
          <div className='grid gap-8 md:grid-cols-2 md:gap-4 md:max-w-[124rem] md:mx-auto lg:py-[4rem]'>
            <div className='flex flex-col gap-2 items-start font-work-sans text-lg md:place-self-center'>
              <h1 className='w-[28rem] font-sora font-bold text-2xl leading-[1.1] capitalize lg:text-3xl lg:w-[35rem] xl:text-4xl xl:w-[48rem]'>
                Show them don't just tell
              </h1>
              <p className='font-inter font-normal text-gray'>
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <button className='bg-blue rounded-[0.8rem] mt-4 p-2 flex gap-2 items-center text-lg text-white lg:p-4'>
                Install HelpMeOut
                <ArrowForwardRounded fontSize='large' />
              </button>
            </div>

            <div>
              <img src={heroImg} alt='hero image' />
            </div>
          </div>
        </section>

        <section className='border-t-[4rem] border-t-[#f4f6f8] p-4 py-[7rem] xl:border-t-[6rem]'>
          <div className='grid gap-8 font-work-sans md:grid-cols-2 md:max-w-[124rem] md:mx-auto lg:py-[4rem]'>
            <div className='md:col-span-full'>
              <h2 className='font-sora font-bold text-2xl text-center text-dark1'>
                Features
              </h2>
              <p className='text-lg text-gray text-center'>
                Key highlights of our extension
              </p>
            </div>

            <ul className='flex flex-col gap-7 md:place-self-center xl:w-[52rem]'>
              <li className='grid grid-cols-[5rem_1fr] gap-x-2'>
                <img src={simpleIcon} alt='simple' />
                <div>
                  <h4 className='font-inter font-bold text-lg text-dark2'>
                    Simple Screen Recording
                  </h4>
                  <p className='col-start-2 text-base'>
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </li>
              <li className='grid grid-cols-[5rem_1fr] gap-2'>
                <img src={shareIcon} alt='share' />
                <div>
                  <h4 className='font-inter font-bold text-lg text-dark2'>
                    Easy-to-Share URL
                  </h4>
                  <p className='col-start-2 text-base'>
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </li>
              <li className='grid grid-cols-[5rem_1fr] gap-2'>
                <img src={revisitIcon} alt='revisit' />
                <div>
                  <h4 className='font-inter font-bold text-lg text-dark2'>
                    Revisit Recordings
                  </h4>
                  <p className='col-start-2 text-base'>
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </li>
            </ul>

            <div className='md:self-center'>
              <img src={featureImg} alt='feature' />
            </div>
          </div>
        </section>

        <section className='border-t-[4rem] border-t-[#f4f6f8] p-4 py-[7rem] xl:border-t-[6rem]'>
          <div className='grid gap-8 font-work-sans md:grid-cols-3 md:max-w-[124rem] md:mx-auto lg:py-[4rem]'>
            <h2 className='font-sora font-bold text-2xl text-center text-dark1 md:col-span-full'>
              How it works
            </h2>

            <div className='max-w-[36rem] mx-auto grid gap-3 justify-center items-center text-center'>
              <span className='justify-self-center bg-blue rounded-full w-[6rem] h-[6rem] flex justify-center items-center font-inter font-bold text-2xl text-white'>
                1
              </span>
              <h4 className='font-inter font-bold text-xl text-dark2'>
                Record Screen
              </h4>
              <p className='font-work-sans text-lg text-gray'>
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </p>

              <img src={demoImg} alt='demo image' />
            </div>

            <div className='max-w-[36rem] mx-auto grid gap-3 justify-center items-center text-center'>
              <span className='justify-self-center bg-blue rounded-full w-[6rem] h-[6rem] flex justify-center items-center font-inter font-bold text-2xl text-white'>
                2
              </span>
              <h4 className='font-inter font-bold text-xl text-dark2'>
                Share your recording
              </h4>
              <p className='font-work-sans text-lg text-gray'>
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </p>

              <img src={demoImg} alt='demo image' />
            </div>

            <div className='max-w-[36rem] mx-auto grid gap-3 justify-center items-center text-center'>
              <span className='justify-self-center bg-blue rounded-full w-[6rem] h-[6rem] flex justify-center items-center font-inter font-bold text-2xl text-white'>
                3
              </span>
              <h4 className='font-inter font-bold text-xl text-dark2'>
                Learn Effortlessly
              </h4>
              <p className='font-work-sans text-lg text-gray'>
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </p>

              <img src={demoImg} alt='demo image' />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
