import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='px-[2rem] py-[1rem] border-b-[0.4px] border-[#646464] flex justify-between bg-black/50 backdrop-blur fixed w-[100vw]'>
      <div className='flex gap-6 items-center justify-normal'>
        <div className='flex gap-2 items-center justify-normal'>
          <Image src='/vercel.svg' alt='vercel_logo' width={24} height={20} />
          <span className='text-[1.75rem] font-extralight text-[#797979]'>
            /
          </span>
          <Image src='/next.svg' alt='next_logo' width={80} height={20} />
        </div>
        <ul className='flex text-[0.875rem] text-[#797979] items-center gap-[1rem] font-medium cursor-pointer justify-center'>
          <li>
            <Link href='/'></Link>Showcase
          </li>
          <li>
            <Link href='/'></Link>Docs
          </li>
          <li>
            <Link href='/'></Link>Blog
          </li>
          <li>
            <Link href='/'></Link>Templates
          </li>
          <li>
            <Link href='/'></Link>Enterprise
          </li>
        </ul>
      </div>
      <div className='flex gap-[0.5rem] items-center justify-center'>
        <form>
          <input
            type='text'
            placeholder='Search Documentation...'
            className='bg-[#383838] p-1 text-[0.875rem] rounded-md outline-none'
          />
        </form>
        <div className='flex gap-[0.5rem]'>
          <button className='border-[0.5px] border-[#383838] px-2 py-[0.25rem] rounded-md font-semibold text-[0.875rem] hover:bg-[#1f1f1f]'>
            Deploy
          </button>
          <button className=' bg-white text-black px-3 py-[0.25rem] rounded-md font-semibold text-[0.875rem] hover:bg-[#cccccc]'>
            Learn
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
