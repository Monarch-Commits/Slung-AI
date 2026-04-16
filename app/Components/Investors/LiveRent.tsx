import Image from 'next/image'

export default function LiveRent() {
  return (
    <div className="relative w-full h-[500px] bg-linear-to-br from-blue-400 to-blue-100 rounded-t-xl overflow-hidden">
      {/* Container na naka-bottom center gamit ang iyong exact specs */}
      <div
        className="
          absolute 
          w-[581.89px] 
          h-[316px] 
          bottom-0 
          left-1/2 
          -translate-x-1/2
          opacity-100
          border-[7.61px] 
          border-white/30
          rounded-t-[3.81px]
          shadow-2xl 
          overflow-hidden 
          bg-white
        "
      >
        <Image
          src="/Investors/liveRent.png"
          alt="Live Rent Model"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  )
}