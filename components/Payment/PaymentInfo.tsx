"use client";
import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";
import "react-phone-number-input/style.css";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}

const PaymentInfo = () => {
  const publicKey = `${process.env.NEXT_PUBLIC_PAYSTACK_URL}`; // Replace with your actual test key
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [amount, setAmount] = useState(0);
  const [propertyPrice, setPropertyPrice] = useState(0);
  useEffect(() => {
    // Get amount from query param
    const urlParams = new URLSearchParams(window.location.search);
    const amountFromParam = urlParams.get("amount") ?? "";
    const amountNumber = parseFloat(amountFromParam.replace(/,/g, ""));
  
  if (!isNaN(amountNumber)) {
    setPropertyPrice(amountNumber * 100); // Convert to kobo and set as amount
  } else {
    console.error("Invalid amount value");
  }
  }, []); // Run only once on component mount

 
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<any>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setter(event.target.value);
  };

  const componentProps = {
    email,
    amount: Number(amount) * 100,
    metadata: {
      custom_fields: [
        { display_name: 'Name', variable_name: 'name', value: name },
        { display_name: 'Phone', variable_name: 'phone', value: phone },
        { display_name: 'Company', variable_name: 'company', value: company }, // Added Company field
        { display_name: 'Address', variable_name: 'address', value: address },
      ],
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () =>
      alert('Your payment was successful! Thank you for your support.'),
    onClose: () =>
      alert("Are you sure you don't want to complete your payment?"),
  };

  

  const fields = [
    {
      id: "1",
      title: "Full Name",
      placeholder: "Mark Joe",
      value: name,
      setter: setName,
    },
    {
      id: "2",
      title: "E-mail",
      placeholder: "markjoe@gmail.com",
      value: email,
      setter: setEmail,
    },
    {
      id: "3",
      title: "Address",
      placeholder: "123 home",
      value: address,
      setter: setAddress,
    },
    {
      id: "4",
      title: "City",
      placeholder: "Port harcourt",
      value: city,
      setter: setCity,
    },
    {
      id: "5",
      title: "State",
      placeholder: "Rivers",
      value: state,
      setter: setState,
    },
    {
      id: "6",
      title: "Company",
      placeholder: "Your company",
      value: company,
      setter: setCompany,
    },
    {
      id: "7",
      title: "PhoneNumber",
      placeholder: "+2348112345555",
      value: phone,
      setter: setPhone,
    },
    {
      id: "8",
      title: "Amount",
      placeholder: "20,000,000",
      value: amount,
      setter: setAmount,
    },
  ];

  return (
    <div>
      <div className="md:pt-[10rem] pt-[8rem] pb-[3rem] mx-[1rem] md:mx-8 ">
        <h1 className=" text-customSecondary text-xl md:text-3xl font-medium">
          Payment Information
        </h1>
        <div className="flex flex-col gap-3 md:gap-5 w-[100%] px-20 justify-center items-center lg:items-start h-[157px] md:h-[340px] font-medium mt-5 text-[20px] md:text-[40px] rounded-xl bg-anotherBlack text-white">
          <h5 className="text-[12px] md:text-[28px]">Total Amount</h5>
          <p>{`N${(propertyPrice / 100).toLocaleString()}`}</p>
        </div>

        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 mt-5 xl:mt-10">
          {fields.map((field) => (
            <div key={field.id} className="mt-3 w-[100%]">
              <p className="text-customSecondary mb-1 text-sm font-medium">
                {field.title}
              </p>
              <input
                type={field.id === "8" ? "number" : "text"}
                placeholder={field.placeholder}
                className="outline-none border-[1px] text-xs font-medium rounded-md text-customSecondary p-4 w-[100%] border-[#8D8D8D]"
                value={field.value}
                onChange={handleInputChange(field.setter)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <PaystackButton
            className="btn px-10 py-3 bg-primary text-white rounded-lg hover:border-primary hover:text-primary transition duration-300 ease-in-out mt-6"
            {...componentProps}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
