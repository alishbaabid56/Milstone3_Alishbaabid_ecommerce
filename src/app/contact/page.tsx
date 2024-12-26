import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need support? We're here to help!
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full bg-gray-200 text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full bg-gray-200 text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 block w-full bg-gray-200 text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;