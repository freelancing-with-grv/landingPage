import React, { useState } from "react";

function Featured() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const cardsData = [
    {
      name: "FYDE",
      image:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    },
    {
      name: "VISE",
      image:
        "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    },
  ];
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 pb-16 border-b-[1px] border-zinc-700">
        <h1 className="text-6xl tracking-tight">Featured projects</h1>
      </div>
      <div className="cards relative w-full flex  p-20">
        <div className="heading absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <h1 className="text-8xl font-semibold text-[#CDEA68] text-center">
            {hoveredItem ? hoveredItem.name : ""}
          </h1>
        </div>
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="cardContainer w-1/2 h-[70vh]"
            onMouseEnter={() => setHoveredItem(card)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-full card h-full overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={card.image}
                alt={card.name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
