"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type ObjectType = {
  [key: string]: any;
};

type ImageSliderProps<T> = {
  data: T[];
  keyProp: keyof T;
  render: (item: T) => React.ReactNode;
};

export default function ImageSlider<T extends ObjectType>({
  data,
  keyProp,
  render,
}: ImageSliderProps<T>) {
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
                  i === current - 1 ? "bg-white hover:bg-white" : "bg-[#505965]"
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
        <CarouselContent className="ml-0 w-full h-full">
          {data.map((item) => (
            <CarouselItem
              key={item[keyProp]}
              className="pl-0 w-full h-full relative"
            >
              {render(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-black text-[#7c8591] hover:bg-black hover:text-[#7c8591] border-black left-2 top-1/2 -translate-y-1/2 transition-opacity ease-in duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 group-hover:disabled:opacity-50" />
        <CarouselNext className="bg-black text-[#7c8591] hover:bg-black hover:text-[#7c8591] border-black right-2 top-1/2 -translate-y-1/2 transition-opacity ease-in duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-0 group-hover:disabled:opacity-50" />
      </Carousel>
    </>
  );
}
