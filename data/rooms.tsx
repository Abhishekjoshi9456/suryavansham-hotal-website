type MediaItem = {
  type: "image" | "video";
  src: string;
};

type Room = {
  id: string;
  name: string;
  price: string;
  media: MediaItem[];
  meta_description: string;
  amenities: string[];
  description: React.ReactNode;
  image: string; // optional (agar use ho raha hai)
};

export const rooms: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    price: "₹3,000/night",
    image: "/rooms/standard-room1.jpeg",

    // images: [
    //   '/rooms/deluxe-room.jpeg',
    //   '/rooms/deluxe-room.jpeg',
    //   '/rooms/deluxe-room.jpeg',
    // ],

    media: [
      { type: "image", src: "/rooms/standard-room1.jpeg" },
      // { type: "video", src: "/rooms/room-video.mp4" },
      { type: "image", src: "/rooms/standard-room2.jpeg" },
      { type: "image", src: "/rooms/standard-room3.jpeg" },
    ],

    meta_description:
      "A comfortable Standard Room with modern interiors, king-size bed, AC, and free WiFi.",

    amenities: ["25 Sq. meter", "Free WiFi", "Balcony"],

    description: (
      <>
        <p>
          <strong>Architecturally impressive and elegant Deco rooms</strong> are
          well appointed, combining fine art deco artistry with an eye towards
          refinement and comfort.
        </p>

        <p className="mt-4">
          The rooms take <b>luxury to another level</b> with exclusive linen,
          premium upholstery, and décor carefully crafted to match the refined
          ambiance.
        </p>

        <p className="mt-4">
          Guests can enjoy <span className="font-semibold">25 sq. meter</span>{" "}
          of space with a marble bathroom, luxurious amenities, and a pristine
          view of <i>The Atrium</i>.
        </p>
      </>
    ),
  },

  {
    id: "deluxe-room",
    name: "Deluxe Room",
    price: "₹4,000/night",
    image: "/rooms/deluxe-room2.jpeg",

    // images: [
    //   '/rooms/deluxe-room2.jpeg',
    //   '/rooms/deluxe-room1.jpeg',
    //   '/rooms/deluxe-room3.jpeg',
    // ],

    media: [
      { type: "image", src: "/rooms/deluxe-room2.jpeg" },
      { type: "image", src: "/rooms/deluxe-room3.jpeg" },
      { type: "image", src: "/rooms/deluxe-room1.jpeg" },
      { type: "video", src: "/rooms/deluxe-room4.mp4" },
    ],

    meta_description:
      "Spacious deluxe room with luxury interiors, balcony view, and premium facilities.",

    amenities: ["AC", "WiFi", "Balcony", "45.1 Sq. meter", "TV", "1 King Bed"],

    description: (
      <>
        <p>
          The rooms take <strong>luxury to another level</strong> with exclusive
          linen, premium upholstery, and décor that perfectly complements the
          elegant atmosphere.
        </p>

        <p className="mt-4">
          Guests can enjoy <span className="font-semibold">45.1 sq. meter</span>{" "}
          of beautifully designed space with a marble bathroom, luxurious
          amenities, and a pristine view of <i>The Atrium</i>.
        </p>

        <p className="mt-4">
          Enjoying plenty of natural light with garden views, the room offers
          sophisticated comforts including a stylish Hollywood-style bed, vanity
          table, and art deco standing mirrors.
        </p>
      </>
    ),
  },
];
