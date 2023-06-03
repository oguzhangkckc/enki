import React from 'react';

export default function Home() {
  const imageUrls = [
    "https://www.enkiticaret.com.tr/1/images/-cc2a50f4a42b4228ad18a341aa8d72c5.jpg",
    "https://www.enkiticaret.com.tr/1/images/-34d47207c6184722b5285d11b9c09e60.jpg",
    "https://www.enkiticaret.com.tr/1/images/-123a37dc1c8a4e4483fc91290da4d671.jpg",
    "https://www.enkiticaret.com.tr/1/images/-ae52b041abc24f13a301060a0f6ec385.jpg",
    "https://www.enkiticaret.com.tr/1/images/-6f606f6693c84f65aad7765722e13aa9.jpg",
    "https://www.enkiticaret.com.tr/1/images/-2aaadbc6527c41559078363f7995d78f.png",
  ];

  return (
    <div className="bg-white w-screen h-1/2 flex overflow-x-auto">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt=""
          className="h-full min-w-full object-cover"
        />
      ))}
    </div>
  );
}
