import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef();
    return (
        <header>
            <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push("/")}/>
            <form className="flex px-6 py-3 ml-10 mr-5 border
            border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input 
                ref={searchInputRef}
                className="flex-grow w-full focus:outline-none"
                type="text"
                />
                <XIcon className="h-7 text-gray-500 cursor-pointer
                transition duration-100 transform hover:scale-125"/>
            </form>
        </header>
    )
}

export default Header;