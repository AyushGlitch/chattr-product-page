import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const screenshots = [
  '/screenshot1.png',
  '/screenshot2.png',
  '/screenshot3.png',
  '/screenshot4.png',
  '/screenshot5.png',
  '/screenshot6.png',
  '/screenshot7.png',
  '/screenshot8.png',
  '/screenshot9.png',
  '/screenshot10.png'
];

export function Screenshots() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    defaultAnimation: {
      duration: 1000
    },
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">App Screenshots</h2>
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-2xl">
          {screenshots.map((src, idx) => (
            <div key={idx} className="keen-slider__slide">
              <img src={src} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}