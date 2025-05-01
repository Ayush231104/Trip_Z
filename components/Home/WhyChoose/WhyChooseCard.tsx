import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  subTitle: string;
};

const WhyChooseCard = ({ image, title, subTitle }: Props) => {
  return (
    <div>
      {/* image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      {/* content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {subTitle}
      </p>
    </div>
  );
};

export default WhyChooseCard;
