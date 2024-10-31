function ExplainSection() {
  return (
    <section className="relative py-4 z-50">
      <div className="container mx-auto">
        <div
          className="rounded-2xl border p-8 flex divide-x bg-white"
          style={{ boxShadow: "0px 0px 4em rgba(0, 0, 0, 0.25)" }}
        >
          <div className="p-8 flex-1">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 h-12 w-12 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>

              <h2 className="text-4xl font-medium">Explain Code</h2>
            </div>
            <p className="text-gray-600 text-lg mt-2">
              Explain some code based on the syntax provided
            </p>
            <h3 className="mt-6 text-lg font-bold">Paste your code below:</h3>
            <div className="bg-gray-100 p-4 rounded-md mt-2 h-80 lg:h-48 text-xl">
              <textarea
                className="bg-gray-100 p-4 rounded-md mt-2 w-full h-full resize-none text-xl placeholder-gray-400 overflow-auto focus:outline-none border border-gray-100 focus:border-gray-100"
                placeholder="function HelloWorld(text) {'{'} echo text || `Hello World`; {'}'}"
              ></textarea>
            </div>

            <a
              href="#"
              className="mt-8 px-8 py-4  hover:bg-gray-200  active bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl flex md:inline-flex font-medium text-lg cursor-pointer hover:shadow-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-4 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
              Enhance with AI
            </a>
          </div>
          <div className="p-8 flex-1">
            <div className="flex items-center">
              <div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-medium ml-4">
                What does this code do?
              </h2>
            </div>
            <p className="text-gray-600 text-lg mt-2">
              The following code does:
            </p>
            <div className="divide-y mt-4">
              <div className="flex items-center py-3">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="font-medium ml-4">
                  The code above is a function definition.
                </div>
              </div>
              <div className="flex items-center py-3">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="font-medium ml-4">
                  It defines a new function called `HelloWorld` that takes a
                  single argument called `text`.
                </div>
              </div>
              <div className="flex items-center py-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="font-medium ml-4">
                  The body of the function is a single line of code that prints
                  out the value of `text` if it is defined, or `Hello World` if
                  it is not defined.
                </div>
              </div>
              <a
                href="#"
                className="mt-8 px-8 py-4 hover:bg-gray-200  active bg-gray-100 rounded-xl flex md:inline-flex font-medium text-lg cursor-pointer transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 mr-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
                Copy Text
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExplainSection;
