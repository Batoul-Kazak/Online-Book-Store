"use client";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const NotFound = () => {
    const pathName = usePathname();
    const xx = pathName.split("/")[2];
    //   const reviewId = pathName.split("/")[4];
    const router = useRouter();

    function handleGoBack() {
        router.back()
    }

    return (
        <div className="absolute left-0 right-0 w-full h-full bg-gradient-to-bl from-blue-900 to-black">
            <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] flex flex-col gap-15">
                <h1 className="text-5xl font-bold text-blue-700">Book not found</h1>
                <button onClick={handleGoBack} className="w-1/2 px-4 py-3 text-2xl place-self-center bg-primary rounded-2xl">go back</button>
                {/* <p className="text-silver ">Check the page url</p> */}
            </div>
        </div>
    );
};

export default NotFound;
