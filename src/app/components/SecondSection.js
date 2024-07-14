import Features from './Features';

const features = [
  {
    id: '1',
    h3: 'Built-in Optimizations',
    p: 'Automatic Image, Font and Script Optimizations for improved UX and Core Web Vitals',
  },
  {
    id: '2',
    h3: 'Dynamic HTML Streaming',
    p: 'Instantly stream UI from the server, intergrated with the App Router and React Suspense.',
  },
  {
    id: '3',
    h3: 'React Server Components',
    p: 'Add components without sending additional client-side JavaScript. Built on the latest React features.',
  },
  {
    id: '4',
    h3: 'Data Fetching',
    p: 'Make your React component async and await your data. Next.js supports both server and client data fetching.',
  },
  {
    id: '5',
    h3: 'CSS Support',
    p: 'Style your application with your favourite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.',
  },
  {
    id: '6',
    h3: 'Client and Server Rendering',
    p: 'Flexible rendering and caching options, including incremental Static Regeneration(ISR), on a per-page level.',
  },
  {
    id: '7',
    h3: 'Server Actions',
    p: 'Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.',
  },
  {
    id: '8',
    h3: 'Route Handlers',
    p: 'Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.',
  },
  {
    id: '9',
    h3: 'Advanced Routing & Nested Layouts',
    p: 'Create routes using the file system, including support for more advanced routing patterns and UI layouts.',
  },
  {
    id: '10',
    h3: 'Middleware',
    p: 'Take control of the incoming request. Use code of define routing and access rules for authentication, experimentation, and internalization.',
  },
];

const SecondSection = () => {
  return (
    <div className='relative flex flex-col justify-center items-center lg:py-[7.5rem] '>
      <div className='bg-gradient-to-t from-[#272727]  w-[100vw] h-[100vh]  absolute bottom-0 z-0'></div>
      <div className='z-50'>
        <h2 className='font-semibold tracking-tight text-4xl my-5 text-center'>
          What&apos;s in Next.js?
        </h2>
        <p className='text-[1.25rem] text-[#646464] mb-[3rem] text-center'>
          Everything you need to build great products on the web.
        </p>
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto'>
          {features.map(feature => (
            <Features key={feature.id}>
              <h3 className='font-bold tracking-tight text-[1.25rem] mb-[8px]'>
                {feature.h3}
              </h3>
              <p className='text-[#727272] text-[0.875rem]'>{feature.p}</p>
            </Features>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
