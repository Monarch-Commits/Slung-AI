import Image from 'next/image';

export default function LogoCloud() {
  return (
    <section className="w-full">
      <div className="max-w-[1302px] mx-auto bg-white flex flex-col items-center gap-6 border-l border-r border-b border-slate-200 px-6 md:px-16 py-[100px] min-h-[258px]">
        {/* Logos container */}
        <div className="w-full max-w-[857px] flex items-center justify-center">
          <Image
            src="/Logos.png"
            alt="Partner Logos"
            width={857}
            height={58}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
