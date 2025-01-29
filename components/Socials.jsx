import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:''},
    {icon: <FaLinkedin />, path:''},
    {icon: <FaInstagram />, path:''},

];

const Socials = ({ containerStyles, iconStyles }) => {
  return (

    <div className={containerStyles}>
        {socials.map((social, index) => {
            return(
                <Link href={social.path} key={index} className={iconStyles}> 
                {social.icon}
                 </Link>
            );
        })} 
    </div>
    );
};

export default Socials