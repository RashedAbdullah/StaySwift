import { auth } from "@/auth";
import PaymentForm from "@/components/payment/payment-form";
import { getHotelById, getUserByEmail } from "@/queries";
import { getDayDiference } from "@/utils/data-utils";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const user = await getUserByEmail(session?.user?.email);
  const hotel = await getHotelById(id, checkin, checkout);
  const hashCheckedInAndOut = checkin && checkout;
  let cost = (hotel?.hightRate + hotel?.lowRate) / 2;
  if (hashCheckedInAndOut) {
    const days = getDayDiference(checkin, checkout);
    cost = cost * days;
  }
  return (
    <main>
      <section className="container">
        <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
          <h2 className="font-bold text-2xl">Payment Details</h2>
          <p className="text-gray-600 text-sm">
            You have picked <b>{hotel?.name}</b> and total price is{" "}
            <b>${cost}</b>{" "}
            {hashCheckedInAndOut && `${getDayDiference(checkin, checkout)} days.`}
          </p>
          <PaymentForm checkin={checkin} checkout={checkout} />
        </div>
      </section>
    </main>
  );
};

export default PaymentPage;
