import React from 'react'

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