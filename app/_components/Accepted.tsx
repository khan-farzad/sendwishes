import Image from "next/image"
import love from '@/public/love.gif'

const Accepted = () => {
  return (
    <div className="bg-white relative px-4 py-8 text-red-700 flex flex-col justify-between items-center rounded-4xl w-full aspect-square text-center">
      <Image className="absoute top-0" src={love} alt="Two Pandas hugging each other" width={100}/>
      <h3 className="font-bold text-xl">Good Choice Cutu 😘</h3>
      <p className="font-medium text-lg">I knew it. Aap mujhe pasand karte ho❤️</p> 
      <h2 className="font-light">
        You just unlocked unlimited hugs, kisses and cuddles (redeemable very soon I promise). 
      </h2>
    </div>
  )
}

export default Accepted