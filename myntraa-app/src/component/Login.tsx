import React from "react";
import PhoneInput from 'react-phone-input-2'

const Login = () => {

    // const [phone, setPhone] = useState("")
  return (
    <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
      <div className="h-72 w-96 bg-white">
        <h1 className="font-bold text-lg">
          Login <span className="font-normal text-sm"> or </span>
        </h1>
 {/* <PhoneInput
  country={'us'}
  value={phone}
  onChange={phone => setPhone( phone )}
/> */}
      </div>
    </div>
  );
};

export default Login;
