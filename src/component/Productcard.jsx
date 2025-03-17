import React, { useState, useEffect } from "react";

const Productcard = () => {
  return (
    <div>
       
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">Sale Ends In:</h3>
      <p className="text-xl font-bold">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    { id: 1, src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=", category: "Nature" },
    { id: 2, src: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg", category: "Technology" },
    { id: 3, src: "https://t3.ftcdn.net/jpg/02/21/70/32/360_F_221703253_kn2uhTMJOFADLX9oIDSxDaIMo3hGQHY0.jpg", category: "Art" },
    { id: 4, src: "http://getwallpapers.com/wallpaper/full/d/9/f/820882-full-hd-nature-wallpapers-2560x1440-notebook.jpg", category: "Nature" },
    { id: 5, src: "https://cdn.wallpapersafari.com/94/68/lOsTXu.jpg", category: "Technology" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {["All", "Nature", "Technology", "Art"].map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg hover:scale-105 duration-150 hover:bg-gray-600 hover:text-white ${
              filter === category ? "bg-blue-500 hover:bg-blue-700 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredImages.map(img => (
          <img key={img.id} src={img.src} alt={img.category} className="rounded-lg shadow-lg hover:scale-105 duration-100" />
        ))}
      </div>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="container mx-auto p-6">
      <CountdownTimer targetDate={new Date().getTime() + 1000 * 60 * 60 * 24 * 2} />
      <ImageGallery />
    </div>
  );
};


export default ProductCards;
