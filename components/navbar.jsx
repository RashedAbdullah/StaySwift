import Image from "next/image";
import logoImage from "@/public/stayswift.svg";
import Link from "next/link";
import { auth } from "@/auth";
import SignoutComponent from "./auth/signout";

const Nabvar = async ({ authMenu }) => {
  const user = await auth();
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
            <Link href="/bookings">Bookings</Link>
          </li>
          {!user ? (
            <li>
              <Link href="/signin" className="login">
                Login
              </Link>
            </li>
          ) : (
            <li className="flex items-center gap-3">
              <p className="text-primary">{user?.user?.name}</p>
              {user?.user?.image ? (
                <Image
                  className="rounded-full"
                  src={user?.user?.image}
                  width={50}
                  height={40}
                  alt=""
                />
              ) : (
                <div className="h-12 w-12 bg-red-400 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  {user?.user?.name[0]}
                </div>
              )}
              <SignoutComponent />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Nabvar;
