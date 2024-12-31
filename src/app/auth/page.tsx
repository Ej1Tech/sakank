"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AuthPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Extract query parameters
    const type = searchParams.get("type");
    const phoneNumber = searchParams.get("phoneNumber");
    const password = searchParams.get("password");
    const userName = searchParams.get("userName");
    const contactInfo = searchParams.get("contactInfo");
    const whatsApp = searchParams.get("whatsApp");

    // Log the data to the console
    console.log("Auth Type:", type);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);

    if (type === "signup") {
      console.log("User Name:", userName);
      console.log("Contact Info:", contactInfo);
      console.log("WhatsApp:", whatsApp);
    }
  }, [searchParams]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Authentication Page</h1>
      <p className="text-gray-600">
        Check the console for the data submitted through the forms.
      </p>
    </div>
  );
};

export default AuthPage;
