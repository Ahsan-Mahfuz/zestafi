

export default function FoundingMemberSection() {
  const benefits = [
    "Lifetime zero fees on all Zest Vaults",
    "Permanent 20% yield boost on staking",
    "Early access to Real World Assets (RWA)",
    "Exclusive governance voting rights",
    "Priority access to Zest Card (2026)",
  ];

  return (
    <div className="relative min-h-screen  overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - CTA */}
          <div>
            {/* Limited Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-lime-500/30 rounded-full px-4 py-2 mb-8">
              <span className="text-black text-sm">Limited Availability</span>
              <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
            </div>

            {/* Heading */}
            <h2 className=" text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Become a <span className="text-lime-400">Founding Member</span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 lg:mb-10 leading-relaxed">
              Secure your legacy status in the Zestafi ecosystem. Only 5,000
              Founding NFTs will ever be minted.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="group bg-lime-400 hover:bg-lime-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/50 flex items-center gap-2">
                Mint Founding NFT
                <img src="/link.svg" alt="" />
              </button>

              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-sm">Price:</span>
                <span className="text-lime-400 font-bold text-lg">10 USDC</span>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Card */}
          <div className="shadow-xl rounded-2xl p-8 sm:p-10 bg-white !text-black">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className=" text-2xl sm:text-3xl font-bold">
                Member Benefits
              </h3>
              <span className=" text-sm bg-lime-400 rounded-xl px-7 py-2">CAP: 5,000</span>
            </div>

            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center group-hover:bg-lime-500/30 transition-colors">
                      <img src="/check.svg" alt="" />
                    </div>
                  </div>
                  <p className="text-black text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
