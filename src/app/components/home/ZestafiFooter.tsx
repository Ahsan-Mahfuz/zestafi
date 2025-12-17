export default function ZestafiFooter() {
  return (
    <footer className="relative border-t border-gray-100 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto max-md:px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left - Brand */}
          <div>
            <h3 className=" text-xl font-bold mb-3">Zestafi™</h3>
            <p className=" text-sm leading-relaxed">
              Zest Vault Technologies FZE
            </p>
            <p className=" text-sm leading-relaxed">
              (trading as Zestafi) – Dubai, UAE
            </p>
          </div>

          {/* Center - Contact */}
          <div className="flex items-start md:justify-center">
          info@zestafi.com
          </div>

          {/* Right - Social Links */}
          <div className="flex items-start md:justify-end gap-4">
            <img src="/twitter.svg" alt="" />
            <img src="/discord.svg" alt="" />
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <p className=" text-sm text-center">
            © 2025 Zestafi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
