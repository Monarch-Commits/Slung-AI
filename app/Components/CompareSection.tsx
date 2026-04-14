import { Check, X } from "lucide-react";

export default function CompareSection() {
  const data = [
    { label: "Setup", slung: "Minutes", legacy: "Weeks + training" },
    { label: "AI Extraction", slung: "Any format", legacy: "Manual" },
    { label: "Benchmarking", slung: "20,000+ properties", legacy: "Not supported" },
    { label: "Rent Comps", slung: "Auto-mapped", legacy: "Additional $XXX/month" },
    { label: "Underwriting Model", slung: "Web + Dynamic Excel", legacy: "Hard-coded Excel" },
    { label: "Time to Insight", slung: "90 seconds", legacy: "30 minutes" },
    { label: "Pricing", slung: "Free Trial, $99/month", legacy: "Demo, $15,000/year" },
  ];

  return (
    <section className="w-full flex justify-center bg-white border-b border-gray-100">
      <div className="w-full max-w-325.5 px-4 md:px-8 py-12 md:py-20 border-x border-gray-100">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="border border-gray-300 px-3 py-1 text-sm text-gray-500 rounded font-mono">
              04
            </div>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>

          <span className="text-gray-400 uppercase tracking-widest text-sm">
            Compare
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1e293b] mb-16 tracking-tight">
          Why others switch to{" "}
          <span className="text-[#4361ee]">Slung</span>
        </h2>


        <div className="overflow-x-auto">
          <div className="min-w-min-w-180">

            {/* Header */}
            <div className="grid grid-cols-3 mb-6 text-sm font-semibold text-gray-400 uppercase px-4">
              <div></div>
              <div className="text-center text-[#4361ee]">Slung</div>
              <div className="text-center">Legacy</div>
            </div>

    
            <div className="flex flex-col gap-2">
              {data.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center px-4 py-4 rounded-xl transition hover:bg-slate-50"
                >
                
                  <div className="font-medium text-[#1e293b]">
                    {row.label}
                  </div>

             
                  <div className="flex items-center justify-center gap-2 font-semibold text-[#4361ee] bg-blue-50 rounded-lg py-2">
                    <Check size={16} />
                    {row.slung}
                  </div>

               
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <X size={16} />
                    {row.legacy}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}