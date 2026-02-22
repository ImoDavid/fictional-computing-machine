import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Logo */}
         <Image
             src="/logo.svg"
             alt="Logo"
             width={120}
             height={40}
             priority
           />

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="transition hover:underline">About</a>
            <a href="#" className="transition hover:underline">Results</a>
            <a href="#" className="transition hover:underline">Services</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              <FaLinkedinIn />,
              <FaFacebookF />,
              <FaInstagram />,
              <FaXTwitter />,
            ].map((Icon, index) => (
              <div
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition hover:bg-white hover:text-black"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-[11px] text-gray-500">
  {/* <span>© {new Date().getFullYear()} Company Name. </span> */}
  <a
    href="https://definitedev.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-300 transition"
  >
    Crafted @Lungu_dev
  </a>
</div>
    </footer>
  );
};

export default Footer;
