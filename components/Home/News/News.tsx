import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section heading */}
      <SectionHeading heading="Exciting Travel News for you" subTitle="Discover breathtaking places around the world,
handpicked for your perfect getaway."/>
      <div
        className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap10 
      items-center mt-20"
      >
        <div className="mx-3" data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to you must visit in Australia"
            date="15 November 2024"
          />
        </div>
        <div className="mx-3" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 place to visit in Bangladesh"
            date="24 November 2024"
          />
        </div>
        <div className="mx-3" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <NewsCard
            image="/images/n3.png"
            title="Top 10 place to visit in best country India"
            date="21 November 2025"
          />
        </div>
        <div className="mx-3" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 place to visit in New Zealand"
            date="1 November 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
