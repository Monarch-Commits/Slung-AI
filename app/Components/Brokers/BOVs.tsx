import Image from 'next/image';

export default function BOVs() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9]">
      <div className="relative mx-auto aspect-[19/8] max-h-[243px] w-[95%] max-w-[513px] overflow-hidden rounded-t-lg bg-white/50 shadow-sm">
        <Image
          src="/Brokers/Bovs.svg"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
