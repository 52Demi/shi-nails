import React from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Diamond Crystal Nails",
    price: "$19.99",
    image: "/OIP.jpg",
  },
  {
    id: 2,
    name: "Pink Glitter Glam Nails",
    price: "$21.99",
    image: "/OIP.jpg",
  },
  {
    id: 3,
    name: "Cute Bear Art Nails",
    price: "$22.99",
    image: "/OIP.jpg",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10 font-sans text-gray-800">
      <div className="flex justify-center mb-6">
        <img src="/OIP.jpg" alt="SHI Logo" className="h-16" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-6 tracking-wide">
        SHI - Eco-friendly Press On Nails
      </h1>
      <p className="text-center max-w-lg mx-auto text-lg text-gray-600">
        SHI is founded by two young individuals who care about the environment and love nail art. Our mission is to provide high-quality, eco-friendly press-on nails made with sustainable materials.
      </p>
      <div className="text-center mt-4">
        <Link href="/about">
          <span className="text-black underline text-lg cursor-pointer">
            Learn More About Us
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md bg-white text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
            <h2 className="text-xl font-semibold tracking-wide mt-4">{product.name}</h2>
            <p className="text-gray-600 text-lg">{product.price}</p>
            <button className="mt-2 w-full bg-black text-white hover:bg-gray-800 rounded-full py-2 text-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <footer className="mt-12 text-center text-gray-500 text-lg">
        Contact us at: <a href="mailto:sheandyao@gmail.com" className="text-black underline">sheandyao@gmail.com</a>
      </footer>
    </div>
  );
}
