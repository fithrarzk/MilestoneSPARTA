"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

const login = () => {
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
  });

  const onLogin = async () => {

  }


  return (
    <div>
      <h1>Login</h1>
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
      onClick={onLogin}>Login!</button>
      <br /> 
      <Link href="/signup">Don't have an account?</Link>
    </div>
  )
}

export default login;