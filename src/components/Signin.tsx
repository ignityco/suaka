import imgGoogle from "@/assets/png/google.png";
import Image from "next/image";

interface SigninProps {
    setIsOpenSignin: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signin: React.FC<SigninProps> = ({ setIsOpenSignin, setIsOpenSignup }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md w-full relative">
            <div className="absolute top-0 right-0 m-2">
                <button
                    onClick={() => { setIsOpenSignin(false) }}
                    className="text-black border-b border-gray-900">
                    Close
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-2">
                Sign In
            </h1>
            <p className="text-gray-600 mb-6">
                Join us to keep your favorite properties at your fingertips!
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
                        Create an account?
                        <button onClick={() => {
                            setIsOpenSignin(false);
                            setIsOpenSignup(true);
                        }} className="text-blue-500 ml-1">
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin;