import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center gap-5 p-20 bg-zinc-900">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="relative card flex items-center justify-center w-full h-full rounded-xl bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-3xl border-[#CDEA68] text-[#CDEA68] border-[1px] left-10 bottom-10">
            {" "}
            &#169; 2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] flex items-center gap-5 w-1/2">
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className="card flex items-center justify-center relative w-full h-full rounded-xl bg-[#192826]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute px-3 py-1 rounded-3xl border-[#CDEA68] text-[#CDEA68] border-[1px] left-10 bottom-10">
              {" "}
              &#169; 2019-2022
            </button>
          </div>
        </div>
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className="card flex items-center justify-center relative w-full h-full rounded-xl bg-[#192826]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button className="absolute px-3 py-1 rounded-3xl border-[#CDEA68] text-[#CDEA68] border-[1px] left-10 bottom-10">
              {" "}
              &#169; 2019-2022
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
