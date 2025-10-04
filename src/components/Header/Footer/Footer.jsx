import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <nav>
          <h6 className="text-xl font-bold">Explore</h6>
          <a className="link link-hover">World Classics</a>
          <a className="link link-hover">Modern Literature</a>
          <a className="link link-hover">Biographies</a>
          <a className="link link-hover">Philosophy & Science</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">BOIPOKA</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Contribute a Book</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">Support</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>

      <footer className="footer bg-black text-white  border-gray-800 border-1 px-10 py-4">
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current text-primary">
            <path d="M12 2L3.5 6.5v11L12 22l8.5-4.5v-11L12 2zM12 4.5l6.5 3.5v8L12 20l-6.5-4v-8L12 4.5z"></path>
          </svg>
          <p>
            <span className="text-xl font-bold">BOIPOKA</span> <br />
            A World of Books at Your Fingertips 📚
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 2a9.864 9.864 0 01-3.127 1.195A4.918 4.918 0 0016.616 2c-2.732 0-4.946 2.213-4.946 4.946 0 .388.045.765.127 1.126C7.728 7.89 4.1 5.923 1.671 2.944a4.935 4.935 0 00-.668 2.482c0 1.71.87 3.215 2.188 4.099a4.903 4.903 0 01-2.239-.619v.062c0 2.385 1.698 4.374 3.95 4.828a4.935 4.935 0 01-2.231.084c.63 1.967 2.445 3.397 4.6 3.437A9.873 9.873 0 010 19.54 13.933 13.933 0 007.548 22c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5h2.885V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
