"use client";
import { encrypt, decrypt } from "@/utils/util";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [details, setDetails] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setShowInfo(false);
      setMsg("");
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [showInfo]);

  const handleSubmit = () => {
    if (details.from.length < 1 || details.to.length < 1) {
      setMsg("Both fields are required.");
      setShowInfo(true);
      return;
    }

    const url = `${encrypt(details.from)}/${encrypt(details.to)}`;
    navigator.clipboard.writeText(window.location.href + url);
    router.push(url);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen bg-linear-to-b from-pink-300 p-4 to-pink-500 justify-center items-center">
      <div className="bg-white relative text-red-700 flex flex-col justify-around items-center rounded-4xl w-full aspect-square text-center">
        <h1 className="text-4xl font-bold font-dancing-script">
          Make it Special 💖
        </h1>
        <input
          className="bg-pink-50 rounded-lg outline-red-500 w-4/5 p-4 placeholder:text-red-500"
          name="from"
          value={details.from}
          onChange={handleChange}
          placeholder="Please enter your Name"
        />
        <input
          className="bg-pink-50 rounded-lg outline-red-500 w-4/5 p-4 placeholder:text-red-500"
          name="to"
          value={details.to}
          onChange={handleChange}
          placeholder="Who is this for?"
        />
        {showInfo ? (
          <p className="animate-pulse">{msg}</p>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-red-500 z-10 text-white text-lg shadow-xl px-6 py-2.5 aspect-auto rounded-3xl"
          >
            Generate link 💌
          </button>
        )}
      </div>
      <p className="absolute bottom-2">
        Created with ❤️ by <span className=" font-bold text-lg">Pulkit</span>{" "}
        and <span className=" font-bold text-lg">Farzad</span>
      </p>
    </div>
  );
}
