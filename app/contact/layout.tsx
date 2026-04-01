import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';


export const metadata = {
  title: "contact for Luxury Hotel in Uttarakhand",
  description: "Book premium rooms with best amenities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}