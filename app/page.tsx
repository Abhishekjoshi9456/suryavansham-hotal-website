import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/home/Hero';
import { FeaturedRooms } from '@/components/home/FeaturedRooms';
// import { Amenities } from '@/components/home/Amenities';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <FeaturedRooms />
      {/* <Amenities /> */}
      <WhyChooseUs/>
      <Footer />
    </main>
  );
}
