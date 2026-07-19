interface Props {
  params: Promise<{
    id: string;
  }>;
}

const perfumes = {
  nocturne: {
    name: "Nocturne",
    price: "₹849",
    description:
      "A mysterious blend of black amber, smoked vetiver and white musk. Crafted for unforgettable evenings.",
  },
  "une-rose": {
    name: "Une Rose",
    price: "₹499",
    description:
      "A romantic composition of Damask Rose, sandalwood and soft musk with timeless elegance.",
  },
  "or-pale": {
    name: "Or Pâle",
    price: "₹659",
    description:
      "Golden amber with bergamot, vanilla and tobacco leaf. Warm, luxurious and refined.",
  },
};

export default async function PerfumePage({ params }: Props) {
  const { id } = await params;

  const perfume = perfumes[id as keyof typeof perfumes];

  if (!perfume) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-4xl">Perfume Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <p className="text-yellow-500 uppercase tracking-[0.4em]">
          Amoret Rêve
        </p>

        <h1 className="text-6xl italic mt-6">
          {perfume.name}
        </h1>

        <p className="text-2xl text-yellow-500 mt-4">
          {perfume.price}
        </p>

        <div className="mt-12 h-80 rounded-3xl border border-neutral-800 bg-neutral-900 flex items-center justify-center">
          <span className="text-8xl opacity-30">🧴</span>
        </div>

        <p className="mt-12 text-lg text-gray-300 leading-9">
          {perfume.description}
        </p>

    <a
  href={`mailto:khanarman6362@gmail.com?subject=Order Request - ${perfume.name}&body=Hello Amoret Rêve,%0D%0A%0D%0AI would like to purchase the ${perfume.name} perfume.%0D%0A%0D%0APlease share the payment details and delivery process.%0D%0A%0D%0AThank you.`}
  className="inline-block mt-12 bg-yellow-500 text-black px-8 py-4 rounded-full hover:bg-yellow-400 transition"
>
  Buy Now
</a>
      </div>
    </main>
  );
}