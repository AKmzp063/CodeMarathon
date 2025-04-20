import Link from "next/link"

export const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    )
}
export const NavLinkDrop = ({ path, title, description }) => {
    console.log(path, title, description);
    
    return (
        <div>
            <Link href={path} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm-text-xl rounded md:p-0 hover:text-white'>
                {title}
            </Link>
            <p>{description}</p>
        </div>
    )
}

export const NavButton = ({ href, title }) => {
    return (
        <Link href={href}>
            <button className='px-2 block py-2 w-full sm:w-fit rounded-md bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-500 text-white'>
                {title}
            </button>
        </Link>
    )
}
