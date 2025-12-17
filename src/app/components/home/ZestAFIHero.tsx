export default function ZestAFIHero() {
  return (
    <div className="relative min-h-screen  overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12 mx-auto flex items-center justify-center">
          <img src="/logo.svg" alt="" className="w-36" />
        </div>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            The world&apos;s first permanent
          </h2>
          <h2 className="text-lime-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            $0.00 DeFi super-app
          </h2>
        </div>

        <p className=" text-base text-gray-400 sm:text-lg md:text-xl mb-10 sm:mb-12 md:mb-16 px-4">
          &quot;No gas. No subsidies. No hidden spreads. Forever.&quot;
        </p>

        <button className="bg-lime-400 hover:bg-lime-500 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50">
          Join the Founding Members
        </button>
      </div>
    </div>
  );
}
