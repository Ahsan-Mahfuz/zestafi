
export default function ZestafiSolution() {
  return (
    <div className=" !h-screen  overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className=" z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            The Zestafi Solution
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            The current financial system is built on friction. We&apos;e
            removing it entirely.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-8  mx-auto">
          {/* Zero-Fee Swaps Card */}
          <div className="shadow-xl bg-gray-50 rounded-2xl p-8 sm:p-10  ">
            <div className="mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14  rounded-lg flex items-center justify-center mb-6">
                <img src="/swaps.svg" alt="" />
              </div>
              <h3 className=" text-2xl sm:text-3xl font-bold mb-3">
                Zero-Fee Swaps
              </h3>
              <p className=" text-xl sm:text-2xl  mb-4">$0.00 Always</p>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Powered by Tinyman + custom batcher technology. Execute trades
              with absolutely zero gas fees, forever.
            </p>
          </div>

          {/* Zest Vaults Card */}
          <div className="shadow-xl bg-gray-50 rounded-2xl p-8 sm:p-10  ">
            <div className="mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14  rounded-lg flex items-center justify-center mb-6">
                <img src="/valuts.svg" alt="" />
              </div>
              <h3 className=" text-2xl sm:text-3xl font-bold mb-3">
                Zest Vaults
              </h3>
              <p className=" text-xl sm:text-2xl  mb-4">15-25% APY</p>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              High-yield vaults for USDC, gALGO, and future green RWAs.
              Institutional-grade strategies made accessible.
            </p>
          </div>

          {/* Zest Card */}
          <div className="shadow-xl bg-gray-50 rounded-2xl p-8 sm:p-10  ">
            <div className="mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14  rounded-lg flex items-center justify-center mb-6">
                <img src="/card.svg" alt="" />
              </div>
              <h3 className=" text-2xl sm:text-3xl font-bold mb-3">
                Zest Card
              </h3>
              <p className=" text-xl sm:text-2xl  mb-4">$0.00 Always</p>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Coming 2026. Spend your USDC globally with zero conversion fees
              and earn crypto cashback on every purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
