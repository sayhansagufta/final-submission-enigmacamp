import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const JurnalBox = () => {
  return (
    <Card className="flex max-w-[600px] shadow-2xl ">
      <CardHeader></CardHeader>
      <CardBody className="flex flex-row gap-4">
        {" "}
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="image"
          height={300}
          width={300}
          className=" rounded-2xl object-cover"
        />
        <div className="p-4">
          <p className="font-extrabold text-2xl">Prime Number</p>
          <p className="font-semibold">Math</p>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Bilangan prima adalah bilangan bulat yang lebih besar dari 1 dan
            hanya memiliki dua faktor pembagi, yaitu 1 dan bilangan itu sendiri.
            Dengan kata lain, bilangan prima hanya bisa dibagi habis oleh 1 dan
            dirinya sendiri.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default JurnalBox;
