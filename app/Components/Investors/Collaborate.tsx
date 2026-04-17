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
    <div className="relative w-full h-full  bg-linear-to-br  from-blue-400 rounded-t-xl to-blue-100 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="absolute border border-white rounded-full w-[100px] h-[100px]" />
        <div className="absolute border border-white rounded-full w-[200px] h-[200px]" />
        <div className="absolute border border-white rounded-full w-[300px] h-[300px]" />
        <div className="absolute border border-white rounded-full w-[400px] h-[400px]" />
      </div>

      <div className="z-10 absolute -bottom-30 sm:-bottom-2 left-2 sm:left-6 bg-white  ring-6 ring-gray-300/50  w-full max-w-[250px] sm:max-w-[371px] rounded-t-3xl shadow-2xl ">
        <div className="flex justify-end w-full relative items-center px-4 border-b-4 py-4 gap-[18px] mb-10">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-[10px] font-bold">
              +8
            </div>
          </div>
          <button className="px-6 py-1.5  border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 transition">
            Share
          </button>
        </div>
        <div className="h-32 bg-white-50 rounded-xl" />
      </div>

      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          className={`absolute ${avatar.pos} w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden font-bold text-white ${avatar.color || ''}`}
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
              className="w-full h-full object-cover"
            />
          ) : (
            avatar.label
          )}
        </motion.div>
      ))}
    </div>
  );
}
