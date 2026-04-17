import Image from 'next/image';

export default function LiveRent() {
  return (
    <div className="relative w-full h-full bg-[linear-gradient(90deg,#A57AC2_0%,#B37ED7_13.94%,#D499FC_32.21%,#D4ABF1_48.56%,#D09CF2_63.94%,#D4C5DE_77.88%,#F5EDFA_100%)] rounded-t-md overflow-hidden">
      <div
        className="
          absolute 
          bottom-0 
          left-1/2 
          -translate-x-1/2

          w-[90%] 
          max-w-[787px]

          h-[80%]

          border-[8px] 
          border-white/30
          rounded-t-md
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
          sizes="(max-width: 808px) 90vw, 787px"
          priority
        />
      </div>
    </div>
  );
}
