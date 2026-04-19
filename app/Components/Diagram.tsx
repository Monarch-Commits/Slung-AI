// 'use client';

// import { useEffect, useRef, useState, useCallback } from 'react';
// import { FileText, LucideIcon, Grid3x3 } from 'lucide-react';
// import Image from 'next/image';

// type InputCardProps = {
//   icon: LucideIcon;
//   color: string;
//   bg: string;
//   size: string;
//   setRef: (el: HTMLDivElement | null) => void;
// };

// type OutputCardProps = {
//   value: string;
//   unit: string;
//   label: string;
//   setRef: (el: HTMLDivElement | null) => void;
// };

// const InputCard = ({ icon: Icon, color, bg, size, setRef }: InputCardProps) => (
//   <div
//     ref={setRef}
//     className="z-10 flex h-[71px] w-14 shrink-0 flex-col items-center justify-center gap-1 rounded border border-slate-200 bg-white"
//   >
//     <div className={`flex h-[48px] w-[48px] items-center justify-center rounded ${bg}`}>
//       <Icon className={`h-[22px] w-[22px] ${color}`} />
//     </div>
//     <span className="font-[Inter] text-[9px] font-normal text-[#000000]">{size}</span>
//   </div>
// );

// const OutputCard = ({ value, unit, label, setRef }: OutputCardProps) => (
//   <div
//     ref={setRef}
//     className="z-10 flex h-[71px] w-24 shrink-0 flex-col items-center justify-center gap-px rounded border-[0.5px] border-[#EBE9E9] bg-white"
//   >
//     <div className="flex items-baseline">
//       <span className="font-[Inter] text-[24px] font-normal text-[#000000]">{value}</span>
//       <span className="font-[Inter] text-[10px] font-normal text-[#000000]">{unit}</span>
//     </div>
//     <span className="font-[Inter] text-[8px] font-normal tracking-wider text-[#6B6B68]">
//       {label}
//     </span>
//   </div>
// );

// export default function ResponsiveDiagram() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const centerRef = useRef<HTMLDivElement>(null);
//   const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const outputRefs = useRef<(HTMLDivElement | null)[]>([]);

//   const [paths, setPaths] = useState<string[]>([]);

//   const [isSmUp, setIsSmUp] = useState(true);

//   const calculatePaths = useCallback(() => {
//     if (!containerRef.current || !centerRef.current) return;

//     const containerRect = containerRef.current.getBoundingClientRect();
//     const centerRect = centerRef.current.getBoundingClientRect();

//     const centerX = centerRect.left - containerRect.left + centerRect.width / 2;
//     const centerY = centerRect.top - containerRect.top + centerRect.height / 2;

//     const newPaths: string[] = [];

//     const smUp = window.innerWidth >= 640;
//     setIsSmUp(smUp);

//     const SIDE_GAP = smUp ? 16 : 4;
//     const CENTER_GAP = smUp ? 50 : 35;

//     // INPUT LINES
//     inputRefs.current.forEach((ref) => {
//       if (!ref) return;
//       const rect = ref.getBoundingClientRect();
//       const startX = rect.right - containerRect.left + SIDE_GAP;
//       const startY = rect.top - containerRect.top + rect.height / 2;
//       const endX = centerX - CENTER_GAP;
//       const cp1X = startX + (endX - startX) * 0.5;
//       newPaths.push(
//         `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp1X} ${centerY}, ${endX} ${centerY}`
//       );
//     });

//     // OUTPUT LINES
//     outputRefs.current.forEach((ref) => {
//       if (!ref) return;
//       const rect = ref.getBoundingClientRect();
//       const startX = centerX + CENTER_GAP;
//       const endX = rect.left - containerRect.left - (SIDE_GAP + 4);
//       const endY = rect.top - containerRect.top + rect.height / 2;
//       const cp1X = startX + (endX - startX) * 0.5;
//       newPaths.push(
//         `M ${startX} ${centerY} C ${cp1X} ${centerY}, ${cp1X} ${endY}, ${endX} ${endY}`
//       );
//     });

//     setPaths(newPaths);
//   }, []);

//   useEffect(() => {
//     const observer = new ResizeObserver(() => {
//       requestAnimationFrame(calculatePaths);
//     });

//     if (containerRef.current) observer.observe(containerRef.current);

//     setTimeout(calculatePaths, 100);

//     return () => observer.disconnect();
//   }, [calculatePaths]);

//   return (
//     <div className="mx-auto w-full max-w-[499px]">
//       <div
//         ref={containerRef}
//         className="relative flex min-h-[320px] w-full items-center justify-between"
//       >
//         {/* SVG CONNECTIONS */}
//         <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
//           <defs>
//             <marker id="circleDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
//               <circle cx="3" cy="3" r="1.5" fill="#CBD5E1" />
//             </marker>
//             <marker
//               id="arrowhead"
//               markerWidth={isSmUp ? '10' : '6'}
//               markerHeight={isSmUp ? '10' : '6'}
//               refX={isSmUp ? '8' : '5'}
//               refY={isSmUp ? '5' : '3'}
//               orient="auto"
//             >
//               <path d={isSmUp ? 'M 0 0 L 8 5 L 0 10 z' : 'M 0 0 L 5 3 L 0 6 z'} fill="#CBD5E1" />
//             </marker>
//           </defs>

//           {paths.map((d, i) => (
//             <path
//               key={i}
//               d={d}
//               fill="none"
//               stroke="#E2E8F0"
//               strokeWidth="1.5"
//               markerStart="url(#circleDot)"
//               markerEnd="url(#arrowhead)"
//               className="transition-[d] duration-300 ease-in-out"
//             />
//           ))}
//         </svg>

//         {/* LEFT COLUMN */}
//         <div className="flex flex-col gap-6 sm:gap-10">
//           <InputCard
//             setRef={(el) => (inputRefs.current[0] = el)}
//             icon={FileText}
//             color="text-[#A32D2D]"
//             bg="bg-[#FCEBEB]"
//             size="4.2 MB"
//           />
//           <InputCard
//             setRef={(el) => (inputRefs.current[1] = el)}
//             icon={FileText}
//             color="text-[#0C447C]"
//             bg="bg-[#E6F1FB]"
//             size="0.9 MB"
//           />
//           <InputCard
//             setRef={(el) => (inputRefs.current[2] = el)}
//             icon={Grid3x3}
//             color="text-[#27500A]"
//             bg="bg-[#E4F4EC]"
//             size="1.5 MB"
//           />
//         </div>

//         {/* CENTER LOGO */}
//         <div ref={centerRef} className="relative z-20">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full border-8 border-[#4164B021/50] bg-slate-300 shadow-sm sm:h-24 sm:w-24">
//             <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#4669B8]">
//               <div className="relative h-8 w-8 sm:h-15.5 sm:w-15.5">
//                 <Image
//                   src="/slung.png"
//                   alt="Logo"
//                   fill
//                   className="object-contain brightness-0 invert"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col gap-6 sm:gap-10">
//           <OutputCard
//             setRef={(el) => (outputRefs.current[0] = el)}
//             value="5.82"
//             unit="%"
//             label="Going-In Cap"
//           />
//           <OutputCard
//             setRef={(el) => (outputRefs.current[1] = el)}
//             value="65.9"
//             unit="M"
//             label="Purchase Price"
//           />
//           <OutputCard
//             setRef={(el) => (outputRefs.current[2] = el)}
//             value="17.1"
//             unit="%"
//             label="5-year IRR"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';

export default function ResponsiveDiagram() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md">
      <div className="relative mx-auto h-[243px] w-[499px] max-w-full">
        <Image
          src="/diagram.svg"
          alt="Underwriting Model"
          fill
          className="object-contain"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
