import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function NotFound() {
    return (
        <div className="flex flex-col gap-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen bg-dark-black text-4xl font-bold place-content-center place-items-center text-primary">
            <p> Please login and try again</p>
            <Link
                href="/"
                className="flex gap-3 px-5 py-3 text-2xl font-bold text-white place-content-center place-items-center bg-gradient-to-r from-primary to-primary-dark rounded-2xl"
            >
                <FaArrowLeft className="font-bold" />
                Go Back
            </Link>
        </div>
    );
}