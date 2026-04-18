import Image from 'next/image';

export default function BOVs() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9]">
      <div className="relative mx-auto aspect-[16/9] w-[95%] max-w-[900px] overflow-hidden rounded-t-lg border-x-4 border-t-4 border-gray-200 bg-white shadow-sm">
        <Image
          src="/Brokers/bov.png"
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
