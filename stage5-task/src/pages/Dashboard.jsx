import {
  ExpandMoreRounded,
  InsertLinkRounded,
  MoreVertRounded,
  SearchRounded,
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import profile from "../assets/profile-circle.png";
import thumbnail1 from "../assets/video-frame.png";

const Dashboard = () => {
  return (
    <div>
      <div className='grid items-center gap-5 font-work-sans xl:pt-2'>
        <header className='p-3 text-sm'>
          <nav className='flex items-center justify-between md:max-w-[124rem] md:mx-auto'>
            <span className='flex gap-1 items-center font-inter font-bold text-blue'>
              <img src={logo} alt='logo' />
              HelpMeOut
            </span>

            <div className='flex items-center gap-1 text-dark1 xl:text-sm'>
              <img src={profile} alt='avatar' />
              John Mark
              <ExpandMoreRounded fontSize='large' />
            </div>
          </nav>
        </header>

        <main className='grid gap-6'>
          <section className='border-b-[0.1rem] border-b-[#c3c3c3]'>
            <div className='p-4 pb-8 grid gap-3 md:grid-cols-2 md:max-w-[124rem] md:mx-auto xl:px-[0]'>
              <div>
                <h1 className='font-sora font-bold text-lg xl:text-2xl'>
                  Hello, John Mark
                </h1>
                <p className='text-sm text-[rgba(20,20,20,0.7)] xl:text-base'>
                  Here are your recorded videos
                </p>
              </div>
              <div className='relative'>
                <button className='absolute top-1/2 left-3 -translate-y-1/2 text-[#c3c3c3]'>
                  <SearchRounded fontSize='large' />
                </button>
                <input
                  className='w-full h-full p-3 pl-9 bg-[rgba(182,179,198,0.14);] border-[0.1rem] border-[#e7e7ed] rounded-[1.2rem] text-[1.4rem] placeholder:text-[#c3c3c3]'
                  type='text'
                  placeholder='Search for a particular video'
                />
              </div>
            </div>
          </section>

          <section className='p-4 grid gap-5 md:mx-auto xl:w-[124rem] xl:px-[0]'>
            <div className='grid gap-2 md:grid-cols-2 md:gap-x-5'>
              <h2 className='font-medium text-sm text-[rgba(20,20,20,0.7)] md:col-span-full xl:text-base'>
                Recent files
              </h2>

              <div className='p-2 border-[0.1rem] border-[#e7e7ed] rounded-[1.2rem] flex flex-col gap-2'>
                <img src={thumbnail1} alt='video thumbnail' />
                <div className='grid grid-cols-[1fr_20%] gap-x-2'>
                  <h4 className='font-medium text-sm leading-8 xl:text-lg'>
                    How To Create Facebook Ad Listing
                  </h4>

                  <div className='flex justify-end gap-2'>
                    <InsertLinkRounded fontSize='large' />
                    <MoreVertRounded fontSize='large' />
                  </div>

                  <span className='text-[1.4rem] text-[#B6B3C6] uppercase xl:text-sm'>
                    September 23, 2023
                  </span>
                </div>
              </div>

              <div className='p-2 border-[0.1rem] border-[#e7e7ed] rounded-[1.2rem] flex flex-col gap-2'>
                <img src={thumbnail1} alt='video thumbnail' />
                <div className='grid grid-cols-[1fr_20%] gap-x-2'>
                  <h4 className='font-medium text-sm leading-8 xl:text-lg'>
                    How To Create Facebook Ad Listing
                  </h4>

                  <div className='flex justify-end gap-2'>
                    <InsertLinkRounded fontSize='large' />
                    <MoreVertRounded fontSize='large' />
                  </div>

                  <span className='text-[1.4rem] text-[#B6B3C6] uppercase xl:text-sm'>
                    September 23, 2023
                  </span>
                </div>
              </div>
            </div>

            <div className='grid gap-2  md:grid-cols-2 md:gap-x-5'>
              <h2 className='font-medium text-sm text-[rgba(20,20,20,0.7)] md:col-span-full xl:text-base'>
                Files from last week
              </h2>

              <div className='p-2 border-[0.1rem] border-[#e7e7ed] rounded-[1.2rem] flex flex-col gap-2'>
                <img src={thumbnail1} alt='video thumbnail' />
                <div className='grid grid-cols-[1fr_20%] gap-x-2'>
                  <h4 className='font-medium text-sm leading-8 xl:text-lg'>
                    How To Create Facebook Ad Listing
                  </h4>

                  <div className='flex justify-end gap-2'>
                    <InsertLinkRounded fontSize='large' />
                    <MoreVertRounded fontSize='large' />
                  </div>

                  <span className='text-[1.4rem] text-[#B6B3C6] uppercase xl:text-sm'>
                    September 23, 2023
                  </span>
                </div>
              </div>

              <div className='p-2 border-[0.1rem] border-[#e7e7ed] rounded-[1.2rem] flex flex-col gap-2'>
                <img src={thumbnail1} alt='video thumbnail' />
                <div className='grid grid-cols-[1fr_20%] gap-x-2'>
                  <h4 className='font-medium text-sm leading-8 xl:text-lg'>
                    How To Create Facebook Ad Listing
                  </h4>

                  <div className='flex justify-end gap-2'>
                    <InsertLinkRounded fontSize='large' />
                    <MoreVertRounded fontSize='large' />
                  </div>

                  <span className='text-[1.4rem] text-[#B6B3C6] uppercase xl:text-sm'>
                    September 23, 2023
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
