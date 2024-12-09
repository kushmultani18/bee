import React from "react";

// import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img
          src="https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png"
          alt=""
        />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          We offer a wide variety of shoes for every occasion—whether you're
          looking for trendy sneakers, elegant heels, durable boots, or casual
          everyday wear.{" "}
        </p>

        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
