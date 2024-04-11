import Image from 'next/image';
import { NAV_LINKS, MEDIA } from "@/constants";
import Link from 'next/link';

const Footer = () => {
 return (
    <footer itemProp="footer" className="py-8 px-4 sm:px-6 lg:px-8 mt-auto"
         style={{ backgroundImage: `url('bgImgFooter.png')`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto space-y-4" itemProp="potentialAction" itemType="http://schema.org/Organization">
        <div className="flex justify-center space-x-10">
          {MEDIA.map((media) => (
            <Link href={media.link} target="_blank" rel="noopener noreferrer" key={media.key} className="flex items-center justify-center">
                <Image itemProp='Social Media image' src={media.image} alt={media.key} width={50} height={50} className="transition duration-300 hover:scale-110"/>
            </Link>
          ))}
        </div>
<div className="hidden lg:flex flex-wrap justify-between items-center">
 <ul className="gap-20 flex flex-row items-center">
      {NAV_LINKS.map((link) => (
        <Link href={link.href} key={link.key} className="text-xl regular-16 text-white flexCenter cursor-pointer p-1 transition-all hover:text-blue-800 hover:bg-gray-10 rounded-md">
          <p itemProp="Nav Link" className='p-5 text-xl border-r-2'>{link.label}</p>
        </Link>
      ))}
 </ul>
</div>
        <div className="text-center">
          <p itemProp="copyrightHolder" className="text-base text-white font-light">
            Going Medieval | Copyright &copy; {new Date().getFullYear()} Foxy Voxel. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
