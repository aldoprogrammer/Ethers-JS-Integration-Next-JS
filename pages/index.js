import Image from "next/image";
import { Inter } from "next/font/google";
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  

  return (
   <div>
     <h1>Hello World</h1>
   </div>
  );
}
