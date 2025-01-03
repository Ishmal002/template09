import React from 'react'
import Image from 'next/image'

const FoodCategory = () => {
  
  const items = [
    { id: 1, Image: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, Image: "/food2.png", label: "Delicious Burgers" },
    { id: 3, Image: "/food3.png", label: "Healthy Salads" },
    { id: 4, Image: "/food4.png", label: "Desserts" },
  ];

  return (
    <section className="bg-yellow-700 text-white py-16 px-6">
      <div className="container mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-yellow-900 font-serif font-normal size-[20px] md:text-[40px] font-family-greatVibes h-[40px]">Food Category</span>
          <br />
          <span className="text-yellow-900">Ch</span>oose Food Item
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              
              <Image
                src={item.Image}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              
              <div className="absolute bottom-4 left-4 bg-yellow-900 bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-yellow-400 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodCategory