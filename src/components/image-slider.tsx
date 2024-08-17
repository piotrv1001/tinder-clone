"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSliderProps = {
  images: { id: string; src: string }[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      const idx = api.selectedScrollSnap();
      setCurrent(idx + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel className="w-full h-full group" setApi={setApi}>
        <div className="absolute left-0 z-50 top-4 w-full">
          <div className="flex gap-x-2 mx-auto max-w-[90%]">
            {Array.from(Array(count).keys()).map((i) => (
              <button
                key={i}
                className={`mx-1 h-[5px] flex-grow rounded-full p-0  ${
                  i === current - 1
                    ? "bg-white hover:bg-white"
                    : "bg-neutral-500/75 hover:bg-neutral-500"
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
        <CarouselContent className="ml-0 w-full h-full">
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="pl-0 w-full h-full relative"
            >
              <Image
                src={image.src}
                alt="User image"
                className="object-cover absolute inset-0"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 transition-opacity ease-in duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 group-hover:disabled:opacity-50" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2 transition-opacity ease-in duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 group-hover:disabled:opacity-50" />
      </Carousel>
    </>
  );
}
