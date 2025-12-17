import { Users, Shield } from "lucide-react";

export default function TreasuryFirst() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden mb-32">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  mb-4">
                Treasury First
              </h2>
              <div className="w-12 h-1 bg-lime-400"></div>
            </div>

            <p className="text-base sm:text-lg  leading-relaxed">
              We&apos;re building a sustainable financial institution, not a
              pump-and dump scheme. Zestaff is designed to be owned by its users
              and backed by real value.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:!mt-24 ">
            {/* First Feature */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 " />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base  leading-relaxed">
                  100% of revenue flows directly to the public,
                  founder-controlled treasury.
                </p>
              </div>
            </div>

            {/* Second Feature */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 " />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base  leading-relaxed">
                  No founder salary. No VC funding. No pre-mine. Pure community
                  alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
