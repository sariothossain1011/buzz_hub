import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center text-center min-h-screen ">
      <div className="relative">
        {/* Add your image here */}
        <Image
          src="/images/error.webp"
          alt="Page Not Found"
          layout="responsive"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="mt-8 text-4xl font-bold text-gray-900 uppercase">
        Page Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We’re sorry — something has gone wrong on our end.
      </p>
      <div className=" min-w-full md:min-w-96 grid grid-cols-1 md:grid-cols-2 gap-2 py-4">
        <Link href='/' className=" w-full"><Button name="BACK TO HOME PAGE"/></Link>
        <Link href='/' className=" w-full"> <Button name="CONTINUE SHOPPING"/></Link>
       
      </div>
    </div>
  );
};

export default NotFoundPage;
