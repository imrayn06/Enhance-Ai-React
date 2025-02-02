import {useNavigate} from 'react-router-dom';
// import React from 'react';

const Footer = () => {
  const navigate = useNavigate;
  
 const handleHomeClick = () => navigate('/home');
  const handleFeaturesClick = () => navigate('/features');
  const handlePricingClick = () => navigate('/pricing');
  const handleContactUsClick = () => navigate('/contact');

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <a href="/">
              <img
                src="./images/logo-header/Logo.svg"
                width="150"
                alt="Enhance AI Logo"
                className="mb-4"
              />
            </a>
            <p className="text-gray-400 mr-10">
              Use AI to write code, blogs, and more. Enhance everything you do
              with the latest from OpenAI.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <button
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Home
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={handleFeaturesClick}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Features
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={handlePricingClick}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Pricing
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={handleContactUsClick}
                  className="text-gray-400 hover:text-indigo-400"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400" aria-label="Follow us on Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400" aria-label="Follow us on Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#03A9F4"
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                  ></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400" aria-label="Follow us on Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fd5"></stop>
                    <stop offset=".328" stopColor="#ff543f"></stop>
                    <stop offset=".348" stopColor="#fc5245"></stop>
                    <stop offset=".504" stopColor="#e64771"></stop>
                    <stop offset=".643" stopColor="#d53e91"></stop>
                    <stop offset=".761" stopColor="#cc39a4"></stop>
                    <stop offset=".841" stopColor="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#4168c9"></stop>
                    <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
