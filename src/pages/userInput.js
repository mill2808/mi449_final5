import React from 'react'

// Code on this page was based on output from ChatGPT, with minor changes made to troubleshoot and make it specific to my project. Full chat GPT output is at the bottom of this page. 

const UserForm = () => {
    return (
        <form>
      <div className="mb-4">
        <label
          className="block text-black-700 font-bold mb-2"
          htmlFor="feedback">
        </label>
        <textarea
          className="border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback">
          </textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default UserForm

/* ChatGPT Citation 
Question asked: "How to create a simple feedback form in Next.js with tailwind?"

Output from ChatGPT that code was based off of:

"import React from 'react'

const FeedbackForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="feedback"
        >
          Feedback
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="feedback"
          placeholder="Your feedback"
        ></textarea>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default FeedbackForm"
*/