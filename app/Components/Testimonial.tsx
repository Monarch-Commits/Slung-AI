export default function Testimonial() {
  return (
    <section className="flex w-full justify-center bg-white">
      <div className="flex min-h-[420px] w-full flex-col gap-6 border border-slate-200 px-6 py-16 sm:px-10 md:min-h-[490px] md:px-[42px] md:py-[100px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="rounded border border-gray-300 px-3 py-1 text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
              01
            </div>
          </div>
          <span className="text-center font-[Syne] text-[16px] leading-[30px] font-normal tracking-normal text-[#6B6B68]">
            What Users Say
          </span>
        </div>

        {/* CONTENT */}
        <div className="mx-auto flex max-w-[1218px] flex-col items-center gap-6 text-center">
          <p className="text-center font-[Inter] text-[32px] leading-[1.1] font-semibold tracking-[-2.05px] text-[#1e293b] md:text-[48px]">
            Real People, <span className="text-[#4164B0] italic">Real Deals</span>
          </p>

          <blockquote className="w-full max-w-[1218px] text-center font-[Inter] text-[24px] leading-[1.2] font-semibold tracking-normal text-[#1e293b] md:text-[32px]">
            We went from underwriting 3 deals a week to 24. Same team. Less hours. With Slung.
          </blockquote>

          <div className="flex flex-col items-center gap-1">
            <cite className="text-center font-['DM_Sans'] text-[20px] leading-[22.4px] font-medium tracking-normal text-[#1A1A18] not-italic md:text-[24px]">
              Jordan Y.
            </cite>

            <p className="text-center font-[Syne] text-[20px] leading-[19.2px] font-normal tracking-normal text-[#6B6B68] md:text-[24px]">
              Associate · Washington D.C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
