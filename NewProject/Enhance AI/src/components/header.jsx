import { Link } from 'react-router-dom';
// import {SignUp} from './SignUp';

function Header({ onSignUpClick }) {
  return (
    <header className="border-b border-gray-300 py-4 px-4 overflow-hidden">
      <div>
        <div className="container mx-auto flex items-center justify-between relative">
          <img
            src="./images/logo-header/header visuals/dot-pattern-left.svg"
            width="88"
            alt="Shapes"
            className="absolute right-full mr-12 -top-4 hover:rotate-45 ease-in duration-300"
          />
          <img
            src="./images/logo-header/header visuals/shapes-right.svg"
            width="141"
            alt="Shapes"
            className="absolute left-full ml-12 -top-4"
          />
          <a href="/">
            <img src="./images/logo-header/Logo.svg" width="291" alt="Logo" />
          </a>
          <nav>
            <ul className="flex items-center">
              <li>
              <Link to="/signup">
                <button
                  onClick={onSignUpClick}
                  className="px-4 py-2 hover:bg-gray-200 rounded-xl active bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white flex md:inline-flex font-medium text-lg cursor-pointer transform hover:scale-125 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                  Free SignUp
                </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
