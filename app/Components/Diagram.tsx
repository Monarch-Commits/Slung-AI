'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { FileText, Table, LucideIcon } from 'lucide-react';
import Image from 'next/image';

type InputCardProps = {
  icon: LucideIcon;
  color: string;
  bg: string;
  size: string;
  setRef: (el: HTMLDivElement | null) => void;
};

type OutputCardProps = {
  value: string;
  unit: string;
  label: string;
  setRef: (el: HTMLDivElement | null) => void;
};

const InputCard = ({ icon: Icon, color, bg, size, setRef }: InputCardProps) => (
  <div
    ref={setRef}
    className="z-10 flex flex-col items-center justify-center bg-white border border-slate-200 shadow-sm gap-1 shrink-0 w-14 h-[71px] rounded"
  >
    <div className={`flex items-center justify-center w-10 h-10 rounded ${bg}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <span className="text-[9px] text-slate-600 font-medium">{size}</span>
  </div>
);

const OutputCard = ({ value, unit, label, setRef }: OutputCardProps) => (
  <div
    ref={setRef}
    className="z-10 flex flex-col items-center justify-center bg-white border border-slate-200 shadow-sm gap-px shrink-0 w-24 h-[71px] rounded"
  >
    <div className="flex items-baseline">
      <span className="text-xl font-semibold text-slate-800">{value}</span>
      <span className="text-[10px] ml-px text-slate-800">{unit}</span>
    </div>
    <span className="text-[8px] text-slate-400 uppercase tracking-wider">{label}</span>
  </div>
);

export default function ResponsiveDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const inputRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outputRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<string[]>([]);

  const [isSmUp, setIsSmUp] = useState(true);

  const calculatePaths = useCallback(() => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const centerX = centerRect.left - containerRect.left + centerRect.width / 2;
    const centerY = centerRect.top - containerRect.top + centerRect.height / 2;

    const newPaths: string[] = [];

    const smUp = window.innerWidth >= 640;
    setIsSmUp(smUp);

    const SIDE_GAP = smUp ? 16 : 4;
    const CENTER_GAP = smUp ? 50 : 35;

    // INPUT LINES
    inputRefs.current.forEach((ref) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const startX = rect.right - containerRect.left + SIDE_GAP;
      const startY = rect.top - containerRect.top + rect.height / 2;
      const endX = centerX - CENTER_GAP;
      const cp1X = startX + (endX - startX) * 0.5;
      newPaths.push(
        `M ${startX} ${startY} C ${cp1X} ${startY}, ${cp1X} ${centerY}, ${endX} ${centerY}`
      );
    });

    // OUTPUT LINES
    outputRefs.current.forEach((ref) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const startX = centerX + CENTER_GAP;
      const endX = rect.left - containerRect.left - (SIDE_GAP + 4);
      const endY = rect.top - containerRect.top + rect.height / 2;
      const cp1X = startX + (endX - startX) * 0.5;
      newPaths.push(
        `M ${startX} ${centerY} C ${cp1X} ${centerY}, ${cp1X} ${endY}, ${endX} ${endY}`
      );
    });

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(calculatePaths);
    });

    if (containerRef.current) observer.observe(containerRef.current);

    setTimeout(calculatePaths, 100);

    return () => observer.disconnect();
  }, [calculatePaths]);

  return (
    <div className="w-full max-w-[499px]  mx-auto">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between min-h-[320px] w-full"
      >
        {/* SVG CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <marker id="circleDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
              <circle cx="3" cy="3" r="1.5" fill="#CBD5E1" />
            </marker>
            <marker
              id="arrowhead"
              markerWidth={isSmUp ? '10' : '6'}
              markerHeight={isSmUp ? '10' : '6'}
              refX={isSmUp ? '8' : '5'}
              refY={isSmUp ? '5' : '3'}
              orient="auto"
            >
              <path d={isSmUp ? 'M 0 0 L 8 5 L 0 10 z' : 'M 0 0 L 5 3 L 0 6 z'} fill="#CBD5E1" />
            </marker>
          </defs>

          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              markerStart="url(#circleDot)"
              markerEnd="url(#arrowhead)"
              className="transition-[d] duration-300 ease-in-out"
            />
          ))}
        </svg>

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-10">
          <InputCard
            setRef={(el) => (inputRefs.current[0] = el)}
            icon={FileText}
            color="text-rose-500"
            bg="bg-rose-50"
            size="4.2 MB"
          />
          <InputCard
            setRef={(el) => (inputRefs.current[1] = el)}
            icon={FileText}
            color="text-blue-500"
            bg="bg-blue-50"
            size="0.9 MB"
          />
          <InputCard
            setRef={(el) => (inputRefs.current[2] = el)}
            icon={Table}
            color="text-emerald-600"
            bg="bg-emerald-50"
            size="1.5 MB"
          />
        </div>

        {/* CENTER LOGO */}
        <div ref={centerRef} className="relative z-20">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-slate-50 flex items-center justify-center p-2 border border-slate-50 shadow-sm">
            <div className="w-full h-full rounded-full bg-[#4669B8] flex items-center justify-center overflow-hidden">
              <div className="relative w-6 h-6 sm:w-10 sm:h-10">
                <Image
                  src="/slung.png"
                  alt="Logo"
                  fill
                  className="object-contain invert brightness-0"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-10">
          <OutputCard
            setRef={(el) => (outputRefs.current[0] = el)}
            value="5.82"
            unit="%"
            label="Going-In Cap"
          />
          <OutputCard
            setRef={(el) => (outputRefs.current[1] = el)}
            value="65.9"
            unit="M"
            label="Purchase Price"
          />
          <OutputCard
            setRef={(el) => (outputRefs.current[2] = el)}
            value="17.1"
            unit="%"
            label="5-year IRR"
          />
        </div>
      </div>
    </div>
  );
}
