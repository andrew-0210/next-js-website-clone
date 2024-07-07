import Features from './Features';

const features = [
  {
    h3: 'Built-in Optimizations',
    p: 'Automatic Image, Font and Script Optimizations for improved UX and Core Web Vitals',
  },
  {
    h3: 'Dynamic HTML Streaming',
    p: 'Instantly stream UI from the server, intergrated with the App Router and React Suspense.',
  },
  {
    h3: 'React Server Components',
    p: 'Add components without sending additional client-side JavaScript. Built on the latest React features.',
  },
  {
    h3: 'Data Fetching',
    p: 'Make your React component async and await your data. Next.js supports both server and client data fetching.',
  },
  {
    h3: 'CSS Support',
    p: 'Style your application with your favourite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.',
  },
  {
    h3: 'Client and Server Rendering',
    p: 'Flexible rendering and caching options, including incremental Static Regeneration(ISR), on a per-page level.',
  },
  {
    h3: 'Server Actions',
    p: 'Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.',
  },
  {
    h3: 'Route Handlers',
    p: 'Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.',
  },
  {
    h3: 'Advanced Routing & Nested Layouts',
    p: 'Create routes using the file system, including support for more advanced routing patterns and UI layouts.',
  },
  {
    h3: 'Middleware',
    p: 'Take control of the incoming request. Use code of define routing and access rules for authentication, experimentation, and internalization.',
  },
];

const SecondSection = () => {
  return (
    <div className=' flex flex-col justify-center items-center pb-5'>
      <h2 className='font-semibold tracking-tight text-4xl my-5'>
        What's in Next.js?
      </h2>
      <p className='text-[1.25rem] text-[#646464] mb-[3rem] text-center'>
        Everything you need to build great products on the web.
      </p>
      <div className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto'>
        {features.map(feature => (
          <Features>
            <h3 className='font-bold tracking-tight text-[1.25rem] mb-[8px]'>
              {feature.h3}
            </h3>
            <p className='text-[#727272] text-[0.875rem]'>{feature.p}</p>
          </Features>
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
