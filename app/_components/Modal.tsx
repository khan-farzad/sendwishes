"use client";
import { useState } from "react";

const Modal = ({ to, setAccepted }: { to: string, setAccepted: (x:boolean) => void }) => {
  const msgs = [
    "Ohooo, please try again 😝",
    "Are you sure?",
    "Really sure? 😤",
    "Cutie please.... 😔",
    "Just think about it 😞",
    "If you say no, I will be sad... 😖",
    "Would you see me sad? 😒",
    "I will be very very very sad 😣",
    "soch lo na please 🥺",
    "Ek baar aur soch lo na 💔",
    "Maaan jao na 😭",
    "Think again ",
    "Last Chance!",
    "Surely Not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake",
    "Have a heart",
    "Dont' be so cold",
    "Change of heart",
    "Choclates bhi kharid lena 🍫",
    "Pleeease 🥺❤️",
  ];
  const name = to.charAt(0).toUpperCase() + to.substring(1, 13);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [idx, setIdx] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTop(Math.floor(Math.random() * 95));
    setLeft(Math.floor(Math.random() * 70));
    setIdx((i) => (i + 1) % msgs.length);
  };
  return (
    <div className="bg-white relative text-red-700 flex flex-col justify-around items-center rounded-4xl w-full aspect-square text-center">
      <h2 className="text-4xl font-dancing-script font-medium">
        Hey <span className="text-5xl font-bold">{name}</span> 💖
      </h2>
      <h1 className="text-5xl font-dancing-script font-medium ">
        Will you be my valentines? ❤️
      </h1>
      <div className="flex justify-evenly w-full">
        <button onClick={() => setAccepted(true)} className="bg-red-500 z-10 text-white text-lg shadow-xl px-6 py-2.5 aspect-auto rounded-3xl">
          Hanji ❤️
        </button>
        <button
          style={{ top: `${top}%`, left: `${left}%` }}
          onClick={handleClick}
          className={`bg-gray-100 text-gray-500  px-6 py-2.5 rounded-3xl ${clicked && "absolute"}`}
        >
          Nahi 🙈
        </button>
      </div>
      <p className="absolute w-full text-xl -top-1/3">{msgs[idx]}</p>
    </div>
  );
};

export default Modal;
