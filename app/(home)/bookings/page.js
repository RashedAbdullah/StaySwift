import { auth } from "@/auth";
import PastBooking from "@/components/user/PastBooking";
import ProfileInfo from "@/components/user/ProfileInfo";
import UpcomingBooking from "@/components/user/UpcomingBooking";
import { redirect } from "next/navigation";

const BookingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <>
      <section className="mt-[100px]">
        <div className="container">
          <ProfileInfo />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PastBooking />
            <UpcomingBooking />
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
