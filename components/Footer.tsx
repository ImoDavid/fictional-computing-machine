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
          <div className="font-bold text-xl">
            LOGO
          </div>

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
    </footer>
  );
};

export default Footer;
