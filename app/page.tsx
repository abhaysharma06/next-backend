"use client";
import Image from "next/image";
import { useEffect } from "react";
import SignUp from "./Components/SignUp";

export default async function Home() {
  return (
    <div>
      <SignUp />
    </div>
  );
}
