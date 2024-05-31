import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  function handlemenu() {}

  return (
    <>
      <nav className="   p-3 flex bg-white justify-between items-center">
        <div>
          <Link href="/" className="">
            <Image
              src="/logo.png"
              alt="Verceldcjncn Logo"
              className="mr-2"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className="flex "> 
          <a href="/" className="flex border border-purple-700 p-2 rounded-full mr-2">
            <Image
              src="/group.svg"
              alt="Verceldcjncn Logo"
              className="mr-2"
              width={25}
              height={20}
              priority
            />{" "}
            Account
          </a>

          <a href="#" className="flex border border-purple-700 p-2 rounded-full">
            <Image
              src="/menu bar.png"
              alt="Verceldcjncn Logo"
              className="mr-2"
              width={20}
              height={20}
              priority
            />
            Menu
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
