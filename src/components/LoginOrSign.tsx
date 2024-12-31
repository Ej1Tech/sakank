"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use router for redirection
import Modal from "@/components/Modal";
import {
  MdOutlineLock,
  MdOutlineWhatsapp,
  MdOutlinePhoneInTalk,
  MdOutlineSupervisedUserCircle,
  MdOutlineMail,
} from "react-icons/md";

interface LoginOrSignProps {
  isSignUp: boolean;
  closeModal: () => void;
  toggleSignUp: () => void;
}

const LoginOrSign: React.FC<LoginOrSignProps> = ({
  isSignUp,
  closeModal,
  toggleSignUp,
}) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [userName, setUserName] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [step, setStep] = useState(1); // Track the current step in the form

  const router = useRouter();

  // Handle Login Submission
  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      type: "login",
      phoneNumber,
      password,
    };

    const queryParams = new URLSearchParams(loginData).toString();
    const redirectURL = `/auth?${queryParams}`;
    router.push(redirectURL);
  };

  // Handle Sign-Up Submission
  const handleSubmitSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2); // Move to the next step
    } else {
      const signUpData = {
        type: "signup",
        phoneNumber,
        password,
        userName,
        contactInfo,
        whatsApp,
      };

      const queryParams = new URLSearchParams(signUpData).toString();
      const redirectURL = `/auth?${queryParams}`;
      router.push(redirectURL);
    }
  };

  const handleToggleSignUp = () => {
    toggleSignUp();
    setStep(1);
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setContactInfo("");
    setUserName("");
    setWhatsApp("");
  };

  return (
    <Modal isOpen={true} onClose={closeModal}>
      <div className="p-6 bg-gradient-to-r from-green-700 to-green-900 rounded-lg text-black">
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          {isSignUp ? "Create an Account" : "Sign In"}
        </h2>

        <form onSubmit={isSignUp ? handleSubmitSignUp : handleSubmitLogin}>
          {step === 1 && (
            <>
              <div className="relative flex items-center mb-4">
                <MdOutlinePhoneInTalk
                  size={22}
                  className="absolute left-3 text-green-900"
                />
                <input
                  type="number"
                  placeholder="Number"
                  className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              {isSignUp && (
                <div className="relative flex items-center mb-4">
                  <MdOutlineMail
                    size={22}
                    className="absolute left-3 text-green-900"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="relative flex items-center mb-4">
                <MdOutlineLock
                  size={22}
                  className="absolute left-3 text-green-900"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md w-full mt-4"
              >
                {isSignUp ? "Next" : "Sign In"}
              </button>
            </>
          )}

          {step === 2 && isSignUp && (
            <>
              <div className="relative flex items-center mb-4">
                <MdOutlineSupervisedUserCircle
                  size={22}
                  className="absolute left-3 text-green-900"
                />
                <input
                  type="text"
                  placeholder="User Name"
                  className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="relative flex items-center mb-4">
                <MdOutlinePhoneInTalk
                  size={22}
                  className="absolute left-3 text-green-900"
                />
                <input
                  type="number"
                  placeholder="Contact Info"
                  className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  required
                />
              </div>
              <div className="relative flex items-center mb-4">
                <MdOutlineWhatsapp
                  size={22}
                  className="absolute left-3 text-green-900"
                />
                <input
                  type="number"
                  placeholder="WhatsApp Contact"
                  className="border rounded-md p-3 pl-10 w-full placeholder-green-900"
                  value={whatsApp}
                  onChange={(e) => setWhatsApp(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-4"
              >
                Submit
              </button>
            </>
          )}
        </form>

        <p className="text-center mt-4 text-white">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-500 underline"
            onClick={handleToggleSignUp}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default LoginOrSign;
