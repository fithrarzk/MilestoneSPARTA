"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

const signup = () => {
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
  });

  const onSignup = async () => {

  }


  return (
    <div>
      <h1>Signup</h1>
      <label>
        Username
        <input
          id="username" 
          type="text"
          value={user.username}
          onChange={(e) => setUser({
            ...user,
            username: e.target.value,
            })}
          placeholder="email" 
          />
      </label>
      <br /> 
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
      onClick={onSignup}>Signup!</button>
      <br /> 
      <Link href="/login">Already have an account?</Link>
    </div>
  )
}

export default signup;