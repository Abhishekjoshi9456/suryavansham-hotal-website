import { Wifi, Car, UtensilsCrossed, Mountain } from "lucide-react";
import BorderGlow from "@/components/common/BorderGlow";

const features = [
  {
    icon: Mountain,
    title: "Scenic Mountain View",
    desc: "Wake up to breathtaking Himalayan views and peaceful surroundings.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    desc: "Stay connected with seamless internet access in every room.",
  },
  {
    icon: UtensilsCrossed,
    title: "Complimentary Breakfast",
    desc: "Enjoy freshly prepared breakfast with local and premium dishes.",
  },
  {
    icon: Car,
    title: "Private Parking",
    desc: "Safe and spacious parking for your car and travel convenience.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Experience Luxury, Comfort & Nature
          </h2>
          <p className="mt-4 text-neutral-400">
            From scenic mountain views to premium hospitality, we provide
            everything you need for a peaceful and memorable stay.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <BorderGlow
                key={index}
                className="h-full rounded-3xl"
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
              >
                <div className="group h-full rounded-3xl p-6 transition duration-500 hover:-translate-y-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-300 transition duration-300 group-hover:scale-110">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {feature.desc}
                  </p>
                </div>
              </BorderGlow>
            );
          })}
        </div>
      </div>
    </section>
  );
}
