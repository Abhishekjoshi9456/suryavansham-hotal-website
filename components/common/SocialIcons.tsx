import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ShapeBlur from "./ShapeBlur";

export default function SocialIcons() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {[
        {
          href: "https://facebook.com",
          icon: <FaFacebookF size={16} />,
          hover: "hover:text-amber-300",
        },
        {
          href: "https://instagram.com",
          icon: <FaInstagram size={16} />,
          hover: "hover:text-amber-300",
        },
        {
          href: "https://twitter.com",
          icon: <FaTwitter size={16} />,
          hover: "hover:text-amber-300",
        },
        {
          href: "https://wa.me/918279922058",
          icon: <FaWhatsapp size={16} />,
          hover: "hover:text-green-400",
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 text-neutral-300 transition duration-300 hover:scale-110 ${item.hover}`}
        >
          {/* Shape blur inside each icon */}
          <div className="absolute inset-0 opacity-40">
            <ShapeBlur
              variation={2}
              shapeSize={1.2}
              roundness={0.5}
              borderSize={0.08}
              circleSize={0.25}
              circleEdge={0.8}
            />
          </div>

          <span className="relative z-10">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}
