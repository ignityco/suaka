import React from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

interface CheckoutFormProps {
  dpmCheckerLink: any;
}

export default function CheckoutForm({ dpmCheckerLink }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [rentalPeriod, setRentalPeriod] = React.useState("1 month");
  const [startDate, setStartDate] = React.useState("");
  const [guestCount, setGuestCount] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [bookingData, setBookingData] = React.useState({
    period: "1 month",
    startDate: "",
    guestCount: "",
    phoneNumber: "",
    email: ""
  });

  const villa = {
    id: 'prod_R6PegAngNkSMTR',
    name: 'Villa Uma: A Modern Luxury Escape w/Pool in Umalas',
    description: `Indulge in the luxury of Villa Uma, a stunning 4-bedroom retreat set in the serene surroundings of Umalas. This exquisite villa offers an ideal blend of contemporary design, comfort, and convenience, perfect for those looking to experience the best of Bali’s vibrant lifestyle.`,
    price: 1235100,
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // Save booking details to the bookingData state
    setBookingData({
      period: rentalPeriod,
      startDate,
      guestCount,
      phoneNumber,
      email,
    });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/detail/rent",
      },
    });

    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message ?? 'Invalid');
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  return (
    <div>
      <div className="w-full bg-white">
        
        {/* First Card: Rental Period */}
        {/* <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-2 text-gray-700">Rental Period</h2>
          <div className="flex space-x-2 mb-4">
            {["1 month", "3 months", "6 months", "1 year"].map((period) => (
              <button
                key={period}
                onClick={() => setRentalPeriod(period)}
                className={`px-4 py-2 rounded-full ${
                  rentalPeriod === period ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          <p className="text-gray-700">Total Price: <span className="font-semibold">{calculatePrice(rentalPeriod, villa)}</span></p>
        </div> */}

        {/* Second Card: Start Date, Guest, Contact Info */}
        {/* <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
          <h2 className="text-lg font-bold text-gray-700">Booking Details</h2>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Guest Count</label>
            <input
              type="number"
              placeholder="Number of guests"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-500"
              required
            />
          </div>
        </div> */}

        {/* Third Card: Payment Element */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <form id="payment-form" onSubmit={handleSubmit} className="space-y-4">
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button
              disabled={isLoading || !stripe || !elements}
              id="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-md mt-4 disabled:opacity-50"
            >
              <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
              </span>
            </button>
            {message && <div id="payment-message" className="text-red-500 mt-3">{message}</div>}
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

const calculatePrice = (period:any, villa:any) => {
  let price = 0;
  switch (period) {
    case "1 Month":
      price = villa.price * 1;
      break;
    case "3 Month":
      price = villa.price * 3;
      break;
    case "6 Month":
      price = villa.price * 6;
      break;
    case "12 Month":
      price = villa.price * 12;
      break;
    default:
      price = 0;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};
