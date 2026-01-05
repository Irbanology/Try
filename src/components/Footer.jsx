import { FaInstagram, FaFacebookF, FaTelegramPlane , } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";



export default function Footer() {
  return (
    <footer className="w-full bg-[#010b11] pt-24 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 text-white">

          {/* COMMUNITY */}
          <div>
            <h4 className="text-[24px] font-medium mb-5">Community</h4>

   <div className="flex items-center gap-4 mt-4">
  <a href="https://www.instagram.com/wibe_ex/" className="cursor-pointer w-10 h-10 rounded-full bg-[#061822] flex items-center justify-center hover:bg-[#03f8c5] hover:text-black transition">
    <FaInstagram size={18} />
  </a>

  <a href="https://www.facebook.com/profile.php?id=61578853760526" className="cursor-pointer w-10 h-10 rounded-full bg-[#061822] flex items-center justify-center hover:bg-[#03f8c5] hover:text-black transition">
    <FaFacebookF size={18} />
  </a>

  <a href="https://x.com/wibe_ex" className="cursor-pointer w-10 h-10 rounded-full bg-[#061822] flex items-center justify-center hover:bg-[#03f8c5] hover:text-black transition">
    <FaXTwitter size={18} />
  </a>

  <a href="https://t.me/wibeexenglish" className="cursor-pointer w-10 h-10 rounded-full bg-[#061822] flex items-center justify-center hover:bg-[#03f8c5] hover:text-black transition">
    <FaTelegramPlane size={18} />
  </a>
</div>

          </div>

          {/* ABOUT */}
          <div>
            <h4 className="text-[24px] font-medium mb-5">About Us</h4>
            <ul className="space-y-3 text-[16px] text-gray-300">
              <li className="hover:text-white cursor-pointer">Key features</li>
              <li className="hover:text-white cursor-pointer">Announcement</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Get the app</li>
              <li className="hover:text-white cursor-pointer">Why choose Wibeex</li>
            </ul>
          </div>

          {/* POLICY */}
          <div>
            <h4 className="text-[24px] font-medium mb-5">Policy</h4>
            <ul className="space-y-3 text-[16px] text-gray-300">
              <li className="hover:text-white cursor-pointer">Terms of service</li>
              <li className="hover:text-white cursor-pointer">Data and privacy policy</li>
              <li className="hover:text-white cursor-pointer">Licenses</li>
            </ul>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-[24px] font-medium mb-5">Product</h4>
            <ul className="space-y-3 text-[16px] text-gray-300">
              <li className="hover:text-white cursor-pointer">Exchange</li>
              <li className="hover:text-white cursor-pointer">Buy Crypto</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[24px] font-medium mb-5">Contact Us</h4>
            {/* <p className="text-[16px] text-gray-300 flex items-center gap-2">
              <span className="">✉</span>  support@wibeex.com
            </p> */}
            <div className="flex items-center gap-2 text-sm text-gray-300">
  <HiOutlineMail className="text-[#03f8c5] text-base" />
  <span>support@wibeex.com</span>
</div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          Wibeex Exchange ©2025.
        </div>

      </div>
    </footer>
  );
}