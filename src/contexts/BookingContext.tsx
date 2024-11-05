import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your booking details
interface BookingDetails {
  rentalPeriod: string;
  startDate: string;
  guestCount: string;
  phoneNumber: string;
  email: string;
}

// Define the shape of the context value
interface BookingContextType {
  bookingDetails: BookingDetails;
  setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetails>>;
}

// Create the context with a default value
const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    rentalPeriod: "1 month",
    startDate: "",
    guestCount: "",
    phoneNumber: "",
    email: ""
  });

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook to use the BookingContext
export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}