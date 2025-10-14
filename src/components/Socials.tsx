import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

interface SocialsProps {
  containerstyles?: string;
  iconstyles?: string;
}

const socials = [
  { icon: FaGithub, path: "https://github.com/ashishziniya" },
  { icon: FaLinkedinIn, path: "https://www.linkedin.com/in/ashish-ziniya-8b5b5b1b5/" },
  { icon: FaYoutube, path: "https://www.youtube.com/@ashishziniya" },
  { icon: FaFacebookF, path: "https://www.facebook.com/ashish.ziniya" },
  { icon: FaInstagram, path: "https://www.instagram.com/ashish_ziniya/" },
];

export default function Socials({ containerstyles, iconstyles }: SocialsProps) {
  return (
    <div className={containerstyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconstyles} group relative hover:scale-110`}
            title={`Visit ${item.icon.name.replace('Fa', '').toLowerCase()}`}
          >
            <div className="absolute inset-0 bg-[#6366f1]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <item.icon className="relative z-10 text-black/80 group-hover:text-white" />
          </a>
        );
      })}
    </div>
  );
}
