import React from 'react';

type FooterProps = {
  phone: string;
};

const Footer: React.FC<FooterProps> = ({ phone }) => {
  const email = "support@example.com"; // Define email internally

  return (
    <footer className="bg-gray-300 py-12 px-6">
        
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">STAY IN THE LOOP</h2>
          <p className="text-gray-600 mb-4">Be the first to know about new collections and exclusive offers.</p>
          <div className="flex justify-center md:justify-start items-center">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-l-md py-2 px-4 w-2/3 focus:outline-none"
            />
            <button className="bg-black text-white rounded-r-md py-2 px-6">&rarr;</button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center">
          <div className="inline-block bg-gray-100 rounded-lg p-4 shadow">
            <p className="text-yellow-500 text-2xl font-bold">&#9733; 4.8/5</p>
            <p className="text-gray-600">17,952 reviews</p>
            <p className="text-xs text-gray-400">Powered by LOOX</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">GOT A QUESTION</h2>
          <p className="text-gray-600">Reach us at</p>
          <p className="text-black font-bold">{email}</p> {/* Use the internal email */}
          <p className="text-gray-600">or Call (Monday - Friday 9am - 5pm)</p>
          <p className="text-black font-bold">Helpline</p>
          <p className="text-black font-bold">{phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
