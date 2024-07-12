import HeroContent from './components/HeroContent';
import SecondSection from './components/SecondSection';

export default function Home() {
  return (
    <div className='mx-[1rem] md:max-w-[1346px] scroll-smooth md:mx-auto'>
      <HeroContent />
      <SecondSection />
    </div>
  );
}
