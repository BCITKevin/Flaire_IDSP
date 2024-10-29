// src/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Logo from "../../public/images/logo_Flare.png";
import BottomNavBar from "../components/BottomNavBar";
import Flare from "../../public/images/FLARE.png";
import Bell from "../../public/icons/Bell.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function Home() {
  const router = useRouter();

  const handleCard1Click = () => {
    router.push("/map");
  };

  return (
    <div className="flex flex-col min-h-screen bg-flare-gradient">
      {/* 메인 카드 */}
      <div className="flex flex-col flex-1 w-full max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden p-6 pb-16 sm:pb-20 md:pb-24 bg-flare-gradient">
        <header className="flex justify-between items-center mb-6">
          <Image src={Logo} alt="Flare logo" className="w-12 h-12" />
          <button
            className="text-gray-700 hover:text-green-500 p-2"
            aria-label="icon bell"
            type="button"
          >
            <Image src={Bell} alt="Bell icon" className="w-6 h-6" />
          </button>
        </header>
        <main>
          <Image src={Flare} alt="Flare" className="mb-6" />
          <div className="shadow-xl p-10 rounded-sm flex flex-col justify-between bg-flare-gradientlow gap-4 mb-6">
          <h1 className="text-white self-start">Wildfire Risk:<b>Low</b></h1>
</div>
          <section className="grid grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
            <Card onClick={handleCard1Click} className="cursor-pointer shadow-2xl rounded-sm bg-fuchsia-900 border-none flex flex-col justify-center items-center aspect-square">
              <CardContent>
                <CardTitle className="text-white text-lg font-semibold">Card 1</CardTitle>
                <CardDescription className="text-white">Click to view map</CardDescription>
              </CardContent>
            </Card>
            <div className="shadow-2xl p-6 rounded-sm bg-fuchsia-800 flex flex-col justify-center items-center row-span-2">
              <Carousel
                className="w-full h-full"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent className="w-full h-full">
                  <CarouselItem className="w-full h-full">123</CarouselItem>
                  <CarouselItem className="w-full h-full">456</CarouselItem>
                  <CarouselItem className="w-full h-full">789</CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
            {/* Shadcn 카드 3 */}
            <Card className="shadow-2xl rounded-sm bg-fuchsia-600 border-none flex flex-col justify-center items-center aspect-square">
              <CardContent>
                <CardTitle className="text-white text-lg font-semibold">Card 3</CardTitle>
                <CardDescription className="text-white">This is the third card.</CardDescription>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
      <BottomNavBar />
    </div>
  );
}
