import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className='bg-blue mt-4 p-4 py-10 grid gap-5 font-work-sans text-sm text-white'>
      <span className='flex gap-1 items-center font-inter font-bold'>
        <img src={logo} alt='logo' />
        HelpMeOut
      </span>

      <div className='grid gap-2'>
        <h4 className='font-bold'>Menu</h4>
        <ul className='grid gap-2'>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Converter</a>
          </li>
          <li>
            <a href=''>How it Works</a>
          </li>
        </ul>
      </div>

      <div className='grid gap-2'>
        <h4 className='font-bold'>About us</h4>
        <ul className='grid gap-2'>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact Us</a>
          </li>
          <li>
            <a href=''>Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className='grid gap-2'>
        <h4 className='font-bold'>Screen Record</h4>
        <ul className='grid gap-2'>
          <li>
            <a href=''>Browser Window</a>
          </li>
          <li>
            <a href=''>Desktop</a>
          </li>
          <li>
            <a href=''>Application</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
