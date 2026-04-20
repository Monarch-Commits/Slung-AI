import Image from 'next/image';

export default function LiveRent() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#A57AC2] via-[#D4ABF1] to-[#F5EDFA]">
      <div className="relative mx-auto aspect-[19/9] max-h-[284px] w-[95%] max-w-[523.71px] overflow-hidden rounded-t-lg px-4">
        <Image
          src="/Investors/Live.svg"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>
    </div>
  );
}
