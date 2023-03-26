import Link from 'next/link';
import { useRouter } from "next/router";
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquareText } from 'react-icons/bs';

function Nav() {
    const router = useRouter();
    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className='container mx-auto'>
                <div className='w-full bg-black/20 h-[75px] backdrop-blur-2xl rounded-full max-w-[450px] mx-auto
                flex px-5 justify-between text-2xl text-white/50 items-center '>
                    <Link className={`h-[50px] w-[50px] cursor-pointer flex items-center justify-center ${router.pathname === '/home' ? 'active' : ''
                        }`} href='/home'>
                        <BiHomeAlt />
                    </Link>
                    <Link className={`h-[50px] w-[50px] cursor-pointer flex items-center justify-center ${router.pathname === '/about' ? 'active' : ''
                        }`} href='/about'>
                        <BiUser />
                    </Link>
                    <Link className={`h-[50px] w-[50px] cursor-pointer flex items-center justify-center ${router.pathname === '/projects' ? 'active' : ''
                        }
                    `} href='/projects'>
                        <BsClipboardData />
                    </Link>
                    <Link className={`h-[50px] w-[50px] cursor-pointer flex items-center justify-center ${router.pathname === '/contact' ? 'active' : ''
                        }
                    `} href='/contact'>
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav >
    );
}

export default Nav;