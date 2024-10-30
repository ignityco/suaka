import imgGoogle from "@/assets/png/google.png";
import Image from "next/image";

interface SignupProps {
    setIsOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenSignin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SignupProps> = ({ setIsOpenSignup, setIsOpenSignin }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full">
            <h1 className="text-2xl font-bold mb-2">
                Sign Up
            </h1>
            <p className="text-gray-600 mb-6">
                Register now to hold onto the properties you love!
            </p>
            <div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Email
                    </label>
                    <input className="border border-gray-300 rounded px-4 py-2 w-full" id="email" placeholder="" type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Password
                    </label>
                    <input className="border border-gray-300 rounded px-4 py-2 w-full" id="password" placeholder="" type="password" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        Verify Password
                    </label>
                    <input className="border border-gray-300 rounded px-4 py-2 w-full" id="password" placeholder="" type="password" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Phone Number</label>
                    <div className="flex">
                        <input className="w-1/6 border-gray-300 outline-none px-4 py-2 border rounded-l" type="text" id="country-code" name="country-code" value="+62" readOnly />
                        <input className="w-3/4 border-gray-300 px-4 py-2 border-t border-b border-r rounded-r" type="text" id="phone-number" name="phone-number" />
                        <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">Send</button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                        OTP Code
                    </label>
                    <input className="border border-gray-300 rounded px-4 py-2 w-full" id="otp" placeholder="" type="otp" />
                </div>
                <div className="mb-4">
                    <button className="bg-second py-2 rounded-full text-white w-full">Submit</button>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <hr className="border-gray-300 flex-grow" />
                    <span className="text-gray-500 mx-4">
                        or
                    </span>
                    <hr className="border-gray-300 flex-grow" />
                </div>
                <div className="flex items-center justify-center mb-6">
                    <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2">
                        <Image className="w-8 h-8" src={imgGoogle} width={100} height={100} alt="google" />
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-gray-600">
                        Already have an account?
                        <button onClick={() => {
                            setIsOpenSignup(false);
                            setIsOpenSignin(true);
                        }} className="text-blue-500 ml-1">
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;