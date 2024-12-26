import Image from 'next/image';

const Header = () => {
  return (
    <header>
      {/* Banner Image */}
      <div className="w-full">
        <Image 
          src="/banner.png" 
          alt="Miss Rose Banner" 
          width={1920} 
          height={600} 
          className="w-full h-auto"
        />
      </div>
      
      {/* Text Content */}
      <div className="bg-white text-center py-6 sm:py-8 px-4">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 mb-3 sm:mb-4">
          AFFORDABLE MAKEUP FOR EVERYDAY USE
        </h1>
      
        <p className="text-sm sm:text-lg text-gray-600">
          100% Authentic Miss Rose Cosmetics in Pakistan
        </p>
      </div>
    </header>
  );
};

export default Header;