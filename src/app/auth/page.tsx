"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AuthPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // Extract query parameters with safe defaults
    const type = searchParams.get("type") || "unknown";
    const phoneNumber = searchParams.get("phoneNumber") || "N/A";
    const password = searchParams.get("password") || "N/A";
    const userName = searchParams.get("userName") || "N/A";
    const contactInfo = searchParams.get("contactInfo") || "N/A";
    const whatsApp = searchParams.get("whatsApp") || "N/A";

    // Log query parameters conditionally
    if (process.env.NODE_ENV === "development") {
      console.log("Auth Type:", type);
      console.log("Phone Number:", phoneNumber);
      console.log("Password:", password);

      if (type === "signup") {
        console.log("User Name:", userName);
        console.log("Contact Info:", contactInfo);
        console.log("WhatsApp:", whatsApp);
      }
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
