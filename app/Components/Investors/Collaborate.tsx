import Image from 'next/image';
import { motion } from 'framer-motion';

const avatars = [
  { id: 1, label: 'MP', pos: 'top-[15%] left-[30%]', color: 'bg-purple-400' },
  { id: 2, src: 'https://i.pravatar.cc/100?img=1', pos: 'top-[10%] right-[30%]' },
  { id: 3, src: 'https://i.pravatar.cc/100?img=12', pos: 'bottom-[25%] right-[20%]' },
  { id: 4, label: 'HJ', pos: 'bottom-[45%] right-[45%]', color: 'bg-blue-300' },
];

export default function Collaborate() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-r from-[#E3EEF9] via-[#5BB0FC] via-[#A3CCF4] to-[#2F90EA]">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="absolute h-[100px] w-[100px] rounded-full border border-white" />
        <div className="absolute h-[200px] w-[200px] rounded-full border border-white" />
        <div className="absolute h-[300px] w-[300px] rounded-full border border-white" />
        <div className="absolute h-[400px] w-[400px] rounded-full border border-white" />
      </div>

      <div className="absolute -bottom-30 left-2 z-10 w-full max-w-[250px] rounded-t-3xl bg-white shadow-2xl ring-6 ring-gray-300/50 sm:-bottom-2 sm:left-6 sm:max-w-[371px]">
        <div className="relative mb-10 flex w-full items-center justify-end gap-[18px] border-b-4 px-4 py-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-[10px] font-bold">
              +8
            </div>
          </div>
          <button className="rounded-md border border-gray-200 px-6 py-1.5 text-sm font-medium transition hover:bg-gray-50">
            Share
          </button>
        </div>
        <div className="bg-white-50 h-32 rounded-xl" />
      </div>

      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.pos} flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-4 border-white font-bold text-white shadow-lg ${avatar.color || ''}`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {avatar.src ? (
            <Image
              src={avatar.src}
              width={64}
              height={64}
              alt="user"
              className="h-full w-full object-cover"
            />
          ) : (
            avatar.label
          )}
        </motion.div>
      ))}
    </div>
  );
}
