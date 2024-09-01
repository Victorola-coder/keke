import { Button } from "../atoms";
import { Dropdown, Language, Logo } from "../svgs";

export default function Navbar() {
  return (
    <header className="">
      <nav className="py-[20px] flex flex-row items-center justify-between">
        <figure className="flex flex-row items-center gap-[14px]">
          <img
            alt="logo"
            loading="lazy"
            draggable="false"
            src="/images/logo.svg"
            className="transition-all duration-300 transform  hover:rotate-[720deg] active:rotate-180 cursor-pointer"
          />
          <Logo fill="white" />
        </figure>

        <div className="flex flex-row items-center gap-[20px]">
          <ul>
            <li className="whitespace-nowrap text-white text-base leading-[18.4px] capitalize transition-all duration-300 hover:text-white/80">
              contact us
            </li>
          </ul>
          <h3 className="flex flex-row items-end gap-1 text-white text-base leading-[18.4px] capitalize transition-all duration-300 hover:text-white/80">
            <Language />
            English
            <Dropdown className="cursor-pointer" />
          </h3>
          <Button className="bg-[#CB8806]">Download App</Button>
        </div>
      </nav>
    </header>
  );
}
