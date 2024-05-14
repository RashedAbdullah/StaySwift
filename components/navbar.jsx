import Image from "next/image";
import logoImage from "@/public/stayswift.svg";
import Link from "next/link";

const Nabvar = ({ authMenu }) => {
  return (
    <nav>
      <Link href="/">
        <Image src={logoImage} alt="Stay Swift Logo" srcSet="" />
      </Link>

      {authMenu && (
        <ul>
          <li>
            <a href="#">Recommended Places</a>
          </li>

          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Contact us</a>
          </li>

          <li>
            <a href="./bookings.html">Bookings</a>
          </li>

          <li>
            <Link href="/signin" className="login">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nabvar;
