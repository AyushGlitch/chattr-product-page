import React, { useState } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    defaultAnimation: {
      duration: 1000
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 8000);
      }

      slider.on("created", () => {
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);

      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
    },
  ]);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">App Screenshots</h2>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-2xl">
            {screenshots.map((src, idx) => (
              <div key={idx} className="keen-slider__slide">
                <img src={src} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === idx ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}