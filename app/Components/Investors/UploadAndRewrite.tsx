import Image from 'next/image';

export default function UploadAndRewrite() {
  return (
    <div className="relative w-full h-[500px] bg-linear-to-br from-blue-400 to-blue-100 rounded-t-xl overflow-hidden">
      {/* Container na naka-bottom center */}
      <div
        className="
          absolute 
          w-[573.04px] 
          h-[310px] 
          bottom-0 
          left-1/2 
          -translate-x-1/2
          border-[8px] 
          border-white/30
          rounded-t-[3.05px]
          shadow-2xl 
          overflow-hidden 
          bg-white
        "
      >
        <Image
          src="/Investors/uploadAndRewrite.png"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </div>
  );
}
