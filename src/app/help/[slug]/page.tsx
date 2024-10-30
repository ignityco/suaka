"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-7xl mx-auto py-4">
        <Header />
        <div className="mb-10">
          <nav aria-label="breadcrumb" className="w-full mt-6 mb-1">
            <ol className="flex w-full flex-wrap items-center">
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800">
                <button onClick={()=>{router.push("/")}}>Home</button>
                <span className="pointer-events-none mx-2 text-gray-900">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800">
                <button>Help</button>
                <span className="pointer-events-none mx-2 text-gray-900">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800 border-b border-primary">
                <button onClick={()=>{router.push("/help/privacy")}}>Privacy & Policy</button>
              </li>
            </ol>
          </nav>
          <div className="grid grid-cols-5 gap-x-10 relative">
            <div className="col-span-1">
              <p className="sticky top-0 pt-5 font-extrabold text-3xl">Privacy & Policy</p>
            </div>
            <div className="col-span-4 pt-5 text-justify">
              <b>Terms and Conditions for Suaka Application</b><br />
              Welcome to our rental application process for unlisted properties. By submitting your application, you agree to the following terms and conditions, which are designed to ensure a smooth and fair rental experience for all parties involved.
              <br />
              <br />
              <b>Eligibility Criteria</b><br />
              To qualify for our rental properties, all applicants must be at least 18 years of age. A valid form of identification, such as a driver’s license or passport, must be provided at the time of application. This ensures that we can verify your identity and maintain the integrity of our rental process.
              <br />
              <br />
              <b>Application Submission</b><br />
              All rental applications must be submitted through our designated platform. Upon submission, you may be required to pay a non-refundable application fee. This fee helps cover the costs associated with processing your application and is not refundable regardless of the outcome.
              <br /><br />
              <b>Property Viewing</b><br />
              Before any application can be approved, we require all potential tenants to schedule a viewing of the property. This is an important step that allows you to assess whether the property meets your needs. Viewings are conducted by appointment only to ensure that you receive the attention and information you need during your visit.
              <br /><br />
              <b>Rental Agreement and Terms</b><br />
              Once your application is approved, you will be presented with a rental agreement outlining the terms of your lease. This agreement will specify the rental duration, monthly rental amount, and due dates for payments. It is crucial to pay your rent on time to avoid late fees, which may be applied after a specified grace period.
              <br /><br />
              <b>Security Deposit</b><br />
              A security deposit equal to one month’s rent is typically required before you move in. This deposit serves as a safeguard for the property owner against potential damages or unpaid rent. It will be returned to you within a specified timeframe after the lease concludes, provided that the property is in good condition.
              <br /><br />
              <b>Maintenance Responsibilities</b><br />
              As a tenant, you are responsible for maintaining the property in good condition throughout your lease. This includes keeping the premises clean and reporting any maintenance issues promptly to the property owner or manager. Timely reporting allows for quicker resolutions and helps maintain the property’s condition.
              <br /><br />
              <b>Pet Policy</b><br />
              If you are a pet owner, you may request permission to have pets in the rental property. Approval is required, and additional pet fees may apply. This policy helps us ensure that the property remains in good condition for all tenants.
              <br /><br />
              <b>Lease Termination</b><br />
              If you decide to terminate your lease, you must provide notice as specified in the rental agreement. Early termination of the lease may incur fees, so it is important to review the terms carefully before making any decisions.
              <br /><br />
              <b>Legal Compliance</b><br />
              All tenants are expected to comply with local laws and regulations regarding rental properties. This includes adhering to noise ordinances, waste disposal regulations, and any other community guidelines.
              <br /><br />
              <b>Amendments to Terms</b><br />
              These terms and conditions may be amended by the property owner or manager with prior notice to the tenants. We recommend reviewing any updates to ensure you remain informed about the policies governing your rental experience.
              <br /><br />
              By submitting your application, you acknowledge that you have read, understood, and agree to these terms and conditions. We look forward to helping you find your ideal rental property!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
