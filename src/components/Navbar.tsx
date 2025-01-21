import { headerLogo } from "../assets/images/index.ts"
// import hamburger from "../assets/images/hamburger.svg"
import { Hamburger } from "../assets/incon.tsx"
import { navLinks } from "../constants"

export const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} className='m-0 w-[129px] h-[29px]'/>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        className="font-montserrat leading-normal text-lg text-slate-gray" 
                        href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
    <Hamburger width={25} height={25} className="text-gray-600" />
</div>

        </nav>
    </header>
  )
}
