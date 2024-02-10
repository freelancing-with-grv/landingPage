import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#CDEA68] relative w-full rounded-tr-3xl rounded-tl-3xl text-black">
        <div className=" px-20 py-20">
          <h1 className="text-[4.3vw] tracking-tight leading-[4.3vw]">
            Ochi is a strategic partner for fast-grow­ing tech businesses that
            need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
            hire great peo­ple.
          </h1>
        </div>
        <div className="w-full px-4 lg:px-20 py-4 border-t border-[#a1b562] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-16">
          {/* Row 1, Column 1 */}
          <div className="row-start-1 lg:col-span-2 xl:col-span-2">
            <p className="text-sm lg:text-base">What you can expect:</p>
          </div>

          {/* Row 1, Column 2 */}
          <div className="row-start-2 lg:row-start-1 lg:col-span-1 xl:col-span-1">
            <p className="text-sm text-start lg:text-base">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="mt-14">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>

          {/* Row 1, Column 3 */}
          <div className="row-start-3 lg:row-start-1 lg:col-span-1 xl:col-span-1 flex flex-col-reverse">
            <ul>
              <li>Instagram</li>
              <li>Behance</li>
              <li>Facebook</li>
              <li>Linkden</li>
            </ul>
            <p className="text-sm lg:text-base">S:</p>
          </div>
        </div>

        <div className="w-full px-20 py-4 mt-10 border-t-[1px] border-[#a1b562] flex justify-between items-start">
          <div className="w-1/2">
            <h1 className="text-[3vw] font-semibold uppercase">Our Approach</h1>
            <button className="px-8 flex items-center gap-10 mt-14 py-5 bg-zinc-900 uppercase rounded-full text-white">
              Read More
              <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[60vh] rounded-md bg-[#b0c859]"></div>
        </div>
      </div>
    </>
  );
};

export default About;
