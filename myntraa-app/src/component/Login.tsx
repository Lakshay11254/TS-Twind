import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase/setup";
import Navbar from "./Navbar";
const Login = () => {

  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const[otp,setOtp] = useState("")

  const sendOtp = async() => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
    } catch (err) {
      console.error(err)
    }
   
  };

  const verifyOtp = async() => {
  try {
    await  user.confirm(otp)
    
  } catch (err) {
    console.error(err)
  }
  }

  console.log(auth)
  return (
    <>
    <Navbar/>
        <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
      <div className="h-96 w-96 bg-white flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">
          Login <span className="font-normal text-sm"> or </span> SignUp
        </h1>
       {user == null && <div className="mt-5">
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="Mobile Number"
            buttonStyle={{ backgroundColor: "white" }}
            inputStyle={{ width: "320px" }}
          />
        </div>}
        <h1 className="mt-4 text-xs text-gray-400">
          By continuing, I agree to the{" "}
          <span className="text-rose-500 font-bold">Terms of Use </span>&
          <span className="font-bold text-rose-500"> Privacy Policy</span>
        </h1>
       {!otp && <button onClick={sendOtp} className="w-80 mt-4 bg-rose-500  text-white font-bold py-2 px-4 rounded text-sm">
          Continue
        </button>}
       
        <div className="mt-3" id="recaptcha"></div>
       {user && <input onChange={(e)=> setOtp(e.target.value)}
          className=" border border-spacing-1 outline-none bg-gray-100 font-normal text-gray-900 text-sm rounded-lg block w-80  p-2.5 mt-2"
          type="text"
          placeholder="Enter Otp"
        />}
      {otp &&  <button onClick={verifyOtp} className="w-80 mt-4 bg-rose-500  text-white font-bold py-2 px-4 rounded text-sm">
          Verify OTP
        </button>}
        <h1 className="mt-4 text-xs text-gray-400">
          Have trouble logging in?{" "}
          <span className="font-bold text-rose-500"> Get Help!</span>
        </h1>
      </div>
    </div>
    </>

  );
};

export default Login;
