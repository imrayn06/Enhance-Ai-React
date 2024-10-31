

function LastSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 -mt-48 pt-48 py-4 relative mb-0.5">
      <img
        src="./images/hero-section/hero-left-shaped.svg"
        alt="Shapes"
        width="250"
        height="200"
        className="absolute left-0 -top-60"
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap place-content-evenly">
          {[
            {
              label: "Explain Code",
              iconSvg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              ),
            },
            {
              label: "Regex",
              iconSvg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
              ),
            },
            {
              label: "Convert Code",
              iconSvg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-4 h-5 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              ),
            },
            {
              label: "Fix Grammar",
              iconSvg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>
              ),
            },
            {
              label: "Todo",
              iconSvg: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              ),
            },
          ].map((button, index) => (
            <a
              key={index}
              href="#"
              className="mt-4 px-8 py-4 transition bg-purple-500 text-white hover:bg-purple-100 hover:text-purple-600 flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg rounded-2xl items-center mr-4"
            >
              {button.iconSvg ? (
                button.iconSvg
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={button.iconPath}
                  />
                </svg>
              )}
              {button.label}
            </a>
          ))}
          <div className="text-gray-300 font-bold hover:scale-125 ease-in duration-200">
            <img
              src="./images/Open-Ai/Open-Ai.svg"
              alt="Open AI"
              className="mt-5"
            />
            Powered By
          </div>
        </div>
      </div>

      <div className="container mx-auto items-center justify-between relative text-center">
        <a
          href="#"
          className="md:px-10 md:py-5 px-4 py-3 md:text-2xl transition rounded-2xl bg-white hover:from-indigo-600 hover:to-purple-700 text-purple-700 font-bold flex md:inline-flex cursor-pointer hover:bg-purple-600 hover:text-white transform hover:scale-125 items-center mt-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
          Free SignUp
        </a>

        <h1 className="text-4xl md:text-7xl relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 text-center block mb-10 py-4 mt-20">
          Use the latest <span className="font-bold">AI</span> features
        </h1>

        <p className="md:text-2xl text-center text-white max-w-3xl mx-auto mt-4">
          Start enhancing a range of tasks using AI, from writing emails, code,
          or blogs, to rephrasing paragraph’s you just want to reword!
        </p>

        <img
          src="./images/Beside open Ai/Shapes.svg"
          alt="Shapes"
          width="150"
          className="absolute -right-12 top-15 -rotate-45 hover:rotate-45 ease-in duration-300"
        />
        <img
          src="./images/Bottom-dot-pattern/Group 25.svg"
          width="150"
          alt="Shapes"
          className="absolute right-full mr-12 top-12 hover:rotate-45 ease-in duration-300"
        />
      </div>
    </section>
  );
}

export default LastSection;
