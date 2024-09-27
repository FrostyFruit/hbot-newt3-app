"use client";

import type React from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { blogContentmansorygrid } from "../../data/chamberData";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  768: 2,
  500: 1,
};

const ChamberMasonryGrid: React.FC = () => {
  const imageUrl = "https://d144dqt8e4woe2.cloudfront.net/chambers/gallery/";

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="-mx-4 mt-8 flex"
      columnClassName="px-4"
    >
      {blogContentmansorygrid.map((item) => (
        <div className="mb-8" key={item.id}>
          <article className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
            <div className="relative">
              <Image
                width={400}
                height={item.height}
                src={`${imageUrl}${item.id}.png`}
                alt="post"
                loading="lazy"
                style={{ height: item.height }}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
            </div>
          </article>
        </div>
      ))}
    </Masonry>
  );
};

export default ChamberMasonryGrid;
