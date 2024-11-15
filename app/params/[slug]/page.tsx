"use client";
import { useState } from "react";


/*interface Instrument {
    id: number;
    name: string;
    price: number;
    image: string;
    like: number;
    is_new: boolean;
  }*/
const [instrumentsData] = [
  {
    id: 1,
    name: "Guitar",
    price: 1300,
    image: "https://i.pinimg.com/enabled/474x/c1/2d/af/c12daf82bbdd9730e3b40947e8bca7d0.jpg",
    like: 1200,
    is_new: true,
  },

  {
    id: 2,
    name: "Ukulele",
    price: 500,
    image: "https://i.pinimg.com/enabled/474x/77/a6/43/77a64352d453e1280c81e68fbfe7a9af.jpg",
    like: 150,
    is_new: true,
  },

  {
    id: 3,
    name: "Bass",
    price: 1500,
    image: "https://i.pinimg.com/474x/6b/92/be/6b92be6330120d167d3b23adbc02eae8.jpg",
    like: 1110,
    is_new: true,
  },

  {
    id: 4,
    name: "Violin",
    price: 1800,
    image: "https://i.pinimg.com/enabled/474x/a0/88/b6/a088b64ea04ed2c4d39cfaf0aed905bd.jpg",
    like: 400,
    is_new: true,
  },

  {
    id: 5,
    name: "Piano",
    price: 3200,
    image: "https://i.pinimg.com/enabled/474x/eb/5e/19/eb5e198b15980535bc82d0a87a577cf0.jpg",
    like: 550,
    is_new: true,
  },

  {
    id: 6,
    name: "Drum",
    price: 5700,
    image: "https://i.pinimg.com/enabled/474x/fc/c8/8a/fcc88a43a4de2622e3187ee867f89c71.jpg",
    like: 200,
    is_new: true,
  },

  {
    id: 7,
    name: "Trumpet",
    price: 3000,
    image: "https://i.pinimg.com/474x/01/59/18/01591883455a5483a1e19b907d026094.jpg",
    like: 210,
    is_new: true,
  },

  {
    id: 8,
    name: "Saxophone",
    price: 2200,
    image: "https://i.pinimg.com/enabled/474x/db/81/10/db8110847a1eae86ed6401e7bce67cd3.jpg",
    like: 240,
    is_new: true,
  },

  {
    id: 9,
    name: "Harp",
    price: 5400,
    image: "https://i.pinimg.com/474x/af/63/21/af6321b248880dbc188863b7b4a29cda.jpg",
    like: 1000,
    is_new: true,
  },
  {
    id: 10,
    name: "Cello",
    price: 5400,
    image: "https://i.pinimg.com/474x/2d/90/2d/2d902d05185f5e6f9cf524e90d791a01.jpg",
    like: 1000,
    is_new: true,
  },
]

export default function InstrumentPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const [instrument, setInstrument] = useState<any>(null);
  
  if (!instrumentsData) {
    return <div>Instrument not found</div>; 
  } else {

  return (
    <div className="bg-[#d5d0f7] min-h-screen">
      <header className='flex items-center py-3 bg-[#7c6ce4] text-white'>
        <div className="ml-2 font-bold">Music Store</div>
        <div className="hidden lg:flex gap-4 ml-auto font-bold">
          <span>HOME</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </div>
      </header>
{/**
 * {posts.map((post) => (
        <li key={post.id}>
        </li>
      ))}
 */}
 
      <div className="border-2   w-100 rounded-lg shadow-lg p-10 flex items-center justify-center box-border">
        {/**block w-full rounded bg-[#0202] px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105 */}
        <img src={instrumentsData.image}
          alt={instrumentsData.name}
          className="w-1/3 mt-6" />

        
        <div className="flex flex-col m-5 p-5  ">
          <h1 className="text-2xl font-bold">{instrumentsData.name}</h1>
          <p className="mt-4 text-lg">Price: {instrumentsData.price} ฿</p>
        </div>
      </div>
    </div>
  );}
} 
