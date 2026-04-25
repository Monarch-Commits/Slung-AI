import Image from 'next/image';

export default function BOVs() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9]">
      <div className="relative mx-auto aspect-[19/8] w-[95%] max-w-[700px] overflow-hidden rounded-t-lg">
        <Image
          src="/Brokers/Bovs.svg"
          alt="Underwriting Model"
          fill
          className="object-contain object-top"
          priority
          unoptimized
          quality={100}
        />
      </div>
    </div>
  );
}
