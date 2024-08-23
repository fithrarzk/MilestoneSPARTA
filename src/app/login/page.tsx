"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const login = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const  [loading, setloading] = React.useState(false);

  const onLogin = async () => {
    try {
      setloading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally{
      setloading(false);
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <h1>{loading ? "Processing" : "Login"}</h1>
      <label>
        Email
        <input
          id="email" 
          type="text"
          value={user.email}
          onChange={(e) => setUser({
            ...user,
            email: e.target.value,
            })}
          placeholder="email" 
          />
      </label>
      <br /> 
      <label>
        Password
        <input
          id="password" 
          type="password"
          value={user.password}
          onChange={(e) => setUser({
            ...user,
            password: e.target.value,
            })}
          placeholder="password" 
          />
      </label>
      <br /> 
      <button 
      onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
      <br /> 
      <Link href="/signup">Don't have an account?</Link>
    </div>
  )
}

export default login;