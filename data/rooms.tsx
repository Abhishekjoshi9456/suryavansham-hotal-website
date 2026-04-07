export const rooms = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    price: '₹4,999/night',
    image: '/rooms/deluxe-room.jpeg',

    images: [
      '/rooms/deluxe-room.jpeg',
      '/rooms/deluxe-room.jpeg',
      '/rooms/deluxe-room.jpeg',
    ],

    meta_description:
      'A comfortable deluxe room with modern interiors, king-size bed, AC, and free WiFi.',

    amenities: ['25 Sq. meter', 'Free WiFi', 'Balcony'],

    description: (
      <>
        <p>
          <strong>
            Architecturally impressive and elegant Deco rooms
          </strong>{' '}
          are well appointed, combining fine art deco artistry with an eye
          towards refinement and comfort.
        </p>

        <p className="mt-4">
          The rooms take <b>luxury to another level</b> with exclusive linen,
          premium upholstery, and décor carefully crafted to match the refined
          ambiance.
        </p>

        <p className="mt-4">
          Guests can enjoy <span className="font-semibold">25 sq. meter</span>{' '}
          of space with a marble bathroom, luxurious amenities, and a pristine
          view of <i>The Atrium</i>.
        </p>
      </>
    ),
  },

  {
    id: 'super-deluxe',
    name: 'Super Deluxe Room',
    price: '₹5,999/night',
    image:
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop',

    images: [
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    ],

    meta_description:
      'Spacious super deluxe room with luxury interiors, balcony view, and premium facilities.',

    amenities: [
      'AC',
      'WiFi',
      'Balcony',
      '45.1 Sq. meter',
      'TV',
      '1 King Bed',
    ],

    description: (
      <>
        <p>
          The rooms take <strong>luxury to another level</strong> with exclusive
          linen, premium upholstery, and décor that perfectly complements the
          elegant atmosphere.
        </p>

        <p className="mt-4">
          Guests can enjoy{' '}
          <span className="font-semibold">45.1 sq. meter</span> of beautifully
          designed space with a marble bathroom, luxurious amenities, and a
          pristine view of <i>The Atrium</i>.
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