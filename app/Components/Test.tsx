'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FileText, Table, LucideIcon } from 'lucide-react';
import Image from 'next/image';

// ---------------- TYPES ----------------
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
    style={{ width: '56px', height: '71px', borderRadius: '4px', borderWidth: '0.5px' }}
    className="z-10 flex flex-col items-center justify-center bg-white border-slate-200 shadow-sm gap-1 shrink-0"
  >
    <div className={`flex items-center justify-center w-12 h-12 rounded ${bg}`}>
      <Icon className={`w-7 h-9 ${color}`} />
    </div>
    <span className="text-[9px] text-slate-600">{size}</span>
  </div>
);

const OutputCard = ({ value, unit, label, setRef }: OutputCardProps) => (
  <div
    ref={setRef}
    style={{ width: '93px', height: '71px', borderRadius: '4px', borderWidth: '0.5px' }}
    className="z-10 flex flex-col items-center justify-center bg-white border-slate-200 shadow-sm gap-px"
  >
    <div className="flex items-baseline">
      <span className="text-2xl text-slate-800">{value}</span>
      <span className="text-[10px] ml-px text-slate-800">{unit}</span>
    </div>
    <span className="text-[8px] text-slate-400">{label}</span>
  </div>
);

export default function CompactDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const inputRefs: (HTMLDivElement | null)[] = [null, null, null];
  const outputRefs: (HTMLDivElement | null)[] = [null, null, null];

  const setInputRef = (i: number) => (el: HTMLDivElement | null) => {
    inputRefs[i] = el;
  };

  const setOutputRef = (i: number) => (el: HTMLDivElement | null) => {
    outputRefs[i] = el;
  };

  const [paths, setPaths] = useState<string[]>([]);

  const calculatePaths = () => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    const centerX = centerRect.left - containerRect.left + centerRect.width / 2;
    const centerY = centerRect.top - containerRect.top + centerRect.height / 2;

    const newPaths: string[] = [];

    const SIDE_GAP = 6;
    const CENTER_GAP = 42;

    // ---------------- INPUT LINES ----------------
    inputRefs.forEach((ref) => {
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

    // ---------------- OUTPUT LINES ----------------
    outputRefs.forEach((ref) => {
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
  };

  // ---------------- SAFE EFFECT (FIXED) ----------------
  useEffect(() => {
    let frame: number;

    const run = () => {
      frame = requestAnimationFrame(() => {
        calculatePaths();
      });
    };

    run();

    window.addEventListener('resize', run);

    return () => {
      window.removeEventListener('resize', run);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-2">
      <div
        ref={containerRef}
        style={{ width: '499px', height: '243px' }}
        className="relative flex items-center justify-between rounded-xl overflow-hidden"
      >
        {/* SVG CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="circleDot" markerWidth="6" markerHeight="6" refX="3" refY="3">
              <circle cx="3" cy="3" r="2" fill="white" stroke="#CBD5E1" />
            </marker>

            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#CBD5E1" />
            </marker>
          </defs>

          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="1"
              markerStart="url(#circleDot)"
              markerEnd="url(#arrowhead)"
            />
          ))}
        </svg>

        {/* LEFT */}
        <div className="flex flex-col gap-2">
          <InputCard
            setRef={setInputRef(0)}
            icon={FileText}
            color="text-rose-500"
            bg="bg-rose-50"
            size="4.2 MB"
          />
          <InputCard
            setRef={setInputRef(1)}
            icon={FileText}
            color="text-blue-500"
            bg="bg-blue-50"
            size="0.9 MB"
          />
          <InputCard
            setRef={setInputRef(2)}
            icon={Table}
            color="text-emerald-600"
            bg="bg-emerald-50"
            size="1.5 MB"
          />
        </div>

        {/* CENTER */}
        <div ref={centerRef} className="relative z-20 flex items-center justify-center">
          <div className="w-[70px] h-[70px] rounded-full bg-gray-100 flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-[#4669B8] flex items-center justify-center overflow-hidden">
              <div className="relative w-7 h-7">
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

        {/* RIGHT */}
        <div className="flex flex-col gap-2">
          <OutputCard setRef={setOutputRef(0)} value="5.82" unit="%" label="Going-In Cap" />
          <OutputCard setRef={setOutputRef(1)} value="$65.9" unit="M" label="Purchase Price" />
          <OutputCard setRef={setOutputRef(2)} value="17.1" unit="%" label="5-year IRR" />
        </div>
      </div>
    </div>
  );
}
