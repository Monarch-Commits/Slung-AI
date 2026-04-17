import Image from 'next/image';

export default function UploadAndRewrite() {
  return (
    <div className="relative w-full h-full bg-linear-to-br from-blue-400 to-blue-100 rounded-t-md overflow-hidden">
      <div
        className="
          absolute 
          bottom-0 
          left-1/2 
          -translate-x-1/2

          w-[90%] 
          max-w-[787px]

        aspect-[787/455]

          border-[8px] 
          border-white/30
          rounded-t-md
          shadow-2xl 
          overflow-hidden 
          bg-white
        "
      >
        <Image
          src="/Investors/imageUpload.png"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          sizes="(max-width: 808px) 90vw, 787px"
          priority
        />
      </div>
    </div>
  );
}
