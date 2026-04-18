import Image from 'next/image';

export default function LogoCloud() {
  return (
    <section className="w-full">
      <div className="mx-auto flex min-h-[258px] flex-col items-center gap-6 border-r border-b border-l border-slate-200 bg-white px-6 py-[100px] md:px-16">
        {/* Logos container */}
        <div className="flex w-full max-w-[858.8px] items-center justify-center">
          <Image
            src="/Logos.png"
            alt="Partner Logos"
            width={857}
            height={58}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
