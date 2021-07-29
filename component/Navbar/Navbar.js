import Link from "next/link";
import Image from "next/image";
import logo from "../../public/cell-phone-message-lottie-animation.gif";

const Navbar = () => {
  return (
    <navbar>
      <div className="logo">
        <Image src={logo} alt="Picture of the author" />
      </div>
      <div className="navbar-option">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/post">
              <a>Post</a>
            </Link>
          </li>
          <li>
            <Link href="page-not-found">
              <a>Others</a>
            </Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
