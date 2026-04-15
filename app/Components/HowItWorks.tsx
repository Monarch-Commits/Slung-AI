import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload',
      description:
        'Drop in your documents — rent rolls, T-12s, operating memoranda. Any format, any property management system.',
      img: '/Cards/card1.png',
      gradient: 'from-[#dff2ff] via-[#bfe6ff] to-[#4fb3ff]',
    },
    {
      title: 'Model',
      description:
        'Your underwriting is built automatically. Institutional-grade assumptions, live rent comps, and anomaly detection — all included.',
      img: '/NoImage.png',
      gradient: 'bg-gradient-to-br from-[#dbeafe] via-[#93c5fd] to-[#6366f1]',
    },
    {
      title: 'Decide',
      description:
        'In minutes, not hours. Know exactly where the deal stands — and share it with anyone who needs to see it.',
      img: '/NoImage.png',
      gradient: 'bg-gradient-to-r from-[#4fb3ff] via-[#93c5fd] to-[#dbeafe]',
    },
  ];

  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      {/* PARENT */}
      <div className="w-full max-w-[1300px] border-t border-x border-gray-200 px-6 md:px-10 py-[100px] flex flex-col gap-6">
        {/* HEADER */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              02
            </div>
          </div>

          <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            How It Works
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-[48px] font-semibold text-[#1e293b] tracking-[-2.05px] leading-[100%]">
          Three steps to <span className="text-[#4361ee]">Decision Ready Deals</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[390px]
                min-h-[559px]
                flex flex-col
                rounded-[16px]
                overflow-hidden
              "
            >
              {/* TEXT */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <h3 className="font-[Syne] font-semibold text-[32px] leading-[27.9px] text-[#1e293b]">
                  {step.title}
                </h3>

                <p className="font-[Syne] text-[15px] leading-[24px] text-gray-500">
                  {step.description}
                </p>
              </div>

              {/* IMAGE AREA */}
              <div
                className={`flex-1 flex items-center justify-center bg-linear-to-b ${step.gradient}`}
              >
                {/* <Image
                  src={step.img}
                  alt={step.title}
                  width={140}
                  height={140}
                  className="object-contain opacity-40"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
