import Image from 'next/image';

export default function About() {
  return (
    <section className="flex items-center justify-center min-h-screen py-16 bg-gray-100 mt-[-4rem]">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        
        {/* About Image */}
        <div className="flex-1 w-full md:w-1/2 order-1 md:order-1">
          <Image
            src="/about.png" 
            alt="MISSROSE Makeup and Skin Care"
            width={500} 
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left order-0 md:order-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Finding affordable, cruelty-free makeup and skin care that is high-quality can be a challenge. This is why we created MISSROSE.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Along being affordable, we try to provide the latest products, so you can stay on trend without needing to spend a lot of money.
          </p>
        </div>
      </div>
    </section>
  );
}