import Image from 'next/image';

export default function UploadAndRewrite() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-gradient-to-r from-[#2F90EA] via-[#84C3F9] to-[#E3EEF9]">
      <div className="relative mx-auto aspect-[19/9] max-h-[320px] w-[98%] max-w-[650px] overflow-hidden rounded-t-lg bg-white/50 shadow-sm">
        <Image
          src="/Investors/upload.svg"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
