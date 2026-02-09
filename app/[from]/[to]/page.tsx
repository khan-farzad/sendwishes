"use client";
import { useState } from "react";
import Modal from "../../_components/Modal";
import Accepted from "@/app/_components/Accepted";
import { useParams } from "next/navigation";
import { decrypt } from "@/utils/util";

export default function Home() {
  const { to, from } = useParams<{ to: string; from: string }>();
  const a = decrypt(from);
  const b = decrypt(to);

  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {accepted ? <Accepted /> : <Modal to={b} setAccepted={setAccepted} />}
      <p className="absolute bottom-2">
        Created with ❤️ by{" "}
        <span className=" font-bold font-dancing-script text-2xl">
          {a.charAt(0).toUpperCase() + a.substring(1)}
        </span>
      </p>
    </>
  );
}
