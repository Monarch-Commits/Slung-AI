import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload',
      description:
        'Drop in your documents — rent rolls, T-12s, operating memoranda. Any format, any property management system.',
      img: '/NoImage.png',
    },
    {
      title: 'Model',
      description:
        'Your underwriting is built automatically. Institutional-grade assumptions, live rent comps, and anomaly detection — all included.',
      img: '/NoImage.png',
    },
    {
      title: 'Decide',
      description:
        'In minutes, not hours. Know exactly where the deal stands — and share it with anyone who needs to see it.',
      img: '/NoImage.png',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full flex justify-center bg-white border-b border-gray-100"
    >
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-gray-100">
        {/* Header */}
        <div className="flex flex-row items-center justify-between w-full mb-12">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              03
            </div>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
          <span className="text-gray-400 font-medium uppercase tracking-widest text-sm">
            How It Works
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-3xl md:text-[48px] font-semibold text-[#1e293b] mb-16 md:mb-17 tracking-[-2.05px] leading-[100%]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Three steps to <span className="text-[#4361ee]">Decision Ready Deal</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#f8fafc] rounded-[20px] overflow-hidden border border-gray-50 transition-transform hover:-translate-y-1 duration-300 min-h-130 md:min-h-145"
            >
              {/* Text */}
              <div className="p-6 md:p-10 pb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px] md:text-[17px]">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full h-full min-h-55 md:min-h-70 bg-[#e2e8f0]/50 rounded-2xl rounded-t-none flex items-center justify-center overflow-hidden">
                  <Image
                    src={step.img}
                    alt={step.title}
                    width={142}
                    height={142}
                    className="object-contain opacity-40"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
