import Image from "next/image";
import { Inter } from "next/font/google";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { EtherscanProvider } from "@ethersproject/providers";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const address = "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5";

  const ethersjs = async () => {
    const provider = new ethers.providers.EtherscanProvider();
    const balance = await provider.getBalance(address);
    const showBalance = await ethers.utils.formatEther(balance);
    const checkFunction = await provider.getAvatar(address);
    console.log(showBalance);
  }

  useEffect(() => {
    ethersjs()
  }, [])


  const [currentAccount, setCurrentAccount] = useState("");



  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
