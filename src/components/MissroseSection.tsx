export default function MissRoseSection() {
  return (
    <section className="bg-white py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Miss Rose???
      </h1>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
        <div className="flex justify-center w-full">
          <img
            src="/banner1.png"
            alt="Glow Kit"
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
        <div className="text-center lg:text-left w-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            STAND OUT IN THE CROWD
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Take the lead with JUST-RELEASED new makeup from MISS ROSE Professional Makeup.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row-reverse gap-8 items-center mb-16">
        <div className="flex justify-center w-full">
          <img
            src="/banner2.png"
            alt="Eye Shadow Palette"
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
        <div className="text-center lg:text-left w-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            MORE COLORS MEAN MORE POWER
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Our Dual Use 5 color eye shadow palettes can also be used as highlighters, which means less hustle to carry along and more fun!
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex justify-center w-full">
          <img
            src="/banner3.png"
            alt="Glow Kit"
            className="rounded-lg shadow-md max-w-full"
          />
        </div>
        <div className="text-center lg:text-left w-full">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">
            VIBRANT SHADES FOR UNFORGETTABLE LOOKS
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            From mesmerizing eyeshadow palettes to bold lipsticks and captivating blushes, these colors are designed to help you create unforgettable looks that turn heads.
          </p>
        </div>
      </div>
    </section>
  );
}