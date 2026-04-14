import Image from 'next/image';

export default function LogoCloud() {
  return (
    <section
      className="mx-auto flex flex-col items-center justify-center bg-white box-border"
      style={{
        width: '100%',
        maxWidth: '1302px',
        minHeight: '257.6px',
        borderRight: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        borderLeft: '1px solid #E2E8F0',
        paddingTop: '100px',
        paddingRight: '64px',
        paddingBottom: '100px',
        paddingLeft: '64px',
        gap: '24px',
      }}
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{
          width: '100%',
          maxWidth: '857.5px',
          height: 'auto',
          minHeight: '57.6px',
          gap: '31.13px',
        }}
      >
        <Image
          src="/Logos.png"
          alt="Partner Logos"
          width={857.5}
          height={57.6}
          priority
          className="w-full h-auto object-contain"
          style={{ maxWidth: '857.5px' }}
        />
      </div>
    </section>
  );
}
