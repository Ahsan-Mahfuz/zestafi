export default function DeFiBarrierSection() {
  const features = [
    {
      title: "Zero-Fee Swaps",
      value: "$0.00",
      description:
        "Tinyman + batcher integration means you always pay exactly zero.",
    },
    {
      title: "Zest Vaults",
      value: "15-25%",
      description:
        "APY on USDC, gALGO, and future green RWAs. Passive income, simplified.",
    },
    {
      title: "Zest Card (2026)",
      value: "1-3%",
      description:
        "Spend USDC globally with instant cashback. Real world utility.",
    },
  ];

  return (
    <div className="min-h-screen  py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            The DeFi Barrier
          </h2>
          <p className="text-gray-400 sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            &quot;63 % of users abandon DeFi after their first fee. We end
            that.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="  rounded-2xl shadow-xl bg-gray-50">
              <div className=" rounded-2xl sm:p-10  transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20">
                <div className="!z-50 w-48 mx-auto -my-7">
                  <img src="/defer.svg" alt="" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-sm sm:text-base font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-4xl sm:text-5xl font-bold">
                    {feature.value}
                  </p>
                </div>

                <p className="text-sm sm:text-base max-w-56 mx-auto text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
