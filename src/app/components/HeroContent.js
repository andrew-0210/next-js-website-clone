const HeroContent = () => {
  return (
    <div className='h-[100vh] sm:h-[100vh] flex flex-col justify-center items-center'>
      <div>
        <p className='text-[#646464] mb-2'>
          Ran <span className='font-semibold text-white '>May 23</span>. Check
          out the announcements.
        </p>
        <div className='flex gap-4 align-center justify-center'>
          <p className='text-2xl leading-[2.5rem] font-semibold text-center'>
            Vercel Ship{' '}
          </p>
          <button className='px-4 py-2 bg-white text-black hover:bg-[#cccccc] font-semibold rounded-full'>
            Watch the keynote &gt;
          </button>
        </div>
      </div>
      <h1 className='text-6xl text-center tracking-tight font-bold my-[4rem] '>
        The React Framework for the Web
      </h1>
      <p className='text-center text-[#646464] text-[1.25rem] max-w-[800px]'>
        Used by some of the world's largest companies, Next.js enables you to
        create{' '}
        <span className='font-semibold text-white '>
          high-quality web applications
        </span>{' '}
        with the power of React components.
      </p>
      <div className='flex flex-col gap-5'>
        <div className='flex gap-3 md:gap-5 mt-[4rem] flex-wrap min-w-fit'>
          <button className='bg-white text-black hover:bg-[#cccccc] px-6 py-3 rounded-lg font-semibold'>
            Get Started
          </button>
          <button className='border border-gray-700 text-white hover:bg-[#1f1f1f] px-6 py-3 rounded-lg font-semibold'>
            Learn Next.js
          </button>
        </div>
        <code className='text-center text-[#646464]'>
          ~ npx create-next-app@latest
        </code>
      </div>
    </div>
  );
};

export default HeroContent;
