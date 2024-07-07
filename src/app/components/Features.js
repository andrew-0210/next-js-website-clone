import Link from 'next/link';

const Features = ({ h3, p, children, className }) => {
  return (
    <Link
      href='/'
      className={`border border-gray-700 rounded-lg px-5 py-6 hover:bg-[#1f1f1f] cursor-pointer ${className}`}
    >
      {/* <h3 className='font-bold tracking-tight text-[1.25rem] mb-[8px]'>{h3}</h3>
      <p className='text-[#727272] text-[0.875rem]'>{p}</p> */}
      {children}
    </Link>
  );
};

export default Features;
