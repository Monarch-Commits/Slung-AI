import Image from 'next/image';

export default function BiddersLead() {
  return (
    <div className="relative flex h-full w-full items-end overflow-hidden rounded-t-md bg-[linear-gradient(to_right,_#72B4FD,_#72B4FD,_#72B4FD,_#76B2F6,_#77AFEC,_#97B9EC,_#CFDEF4)]">
      <div className="relative mx-auto h-[100%] w-[100%] max-w-[900px] overflow-hidden rounded-t-lg">
        <Image
          src="/Brokers/bid.svg"
          alt="Underwriting Model"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
