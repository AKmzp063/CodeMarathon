import Link from "next/link";

export const NavLink = ({ href, title, description }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white'>
            <div className="flex flex-col justify-center items-center">
                <p>{title}</p>
                {/* <p>{description}</p> */}
            </div>
        </Link>
    );
};

export const NavButton = ({ href, title }) => {
    return (
        <Link href={href}>
            <button className='px-2 block py-2 w-full cursor-pointer sm:w-fit rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white'>
                {title}
            </button>
        </Link>
    );
};
