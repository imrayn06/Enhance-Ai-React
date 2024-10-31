

function HeroSection() {
  return (
    <section className="hero py-8 md:py-24 relative">
      <img
        src="./images/hero-section/hero-patter-right.svg"
        width="118"
        alt="Shapes"
        className="absolute right-8 top-8 hover:rotate-45 ease-in duration-300"
      />
      <div className="container mx-auto items-center justify-between relative text-center">
        <h1 className="text-4xl md:text-7xl relative text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 text-center block mb-10 py-4">
          Use <span className="font-bold">AI</span> to write code, blogs & more
        </h1>
        <p className="md:text-2xl text-center text-gray-500 max-w-3xl mx-auto mt-4">
          Enhance everything you do by using the latest from OpenAI to solve
          problems, write solutions and make life easier.
        </p>

        <a
          href="#"
          className="md:px-10 md:py-5 px-4 py-3 md:text-2xl  hover:bg-gray-200  active bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-500 hover:to-green-600 text-white rounded-xl flex md:inline-flex cursor-pointer transform hover:scale-125 transition items-center mt-8"
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 h-8 w-8 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
