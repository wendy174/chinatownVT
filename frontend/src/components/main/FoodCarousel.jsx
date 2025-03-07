import { Card, CardContent } from "@/components/ui/card"; 
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"; 

  

export default function FoodCarousel() { 
    
    const foodImages = [
        {id: 1, src: "/afood_gallery_images/carb_rangoon.jpeg", name:"Crab Rangoon" }, 
        {id: 2, src: "/afood_gallery_images/download.jpeg", name: "Lemon Chicken" }, 
        {id: 3, src: "/afood_gallery_images/dumplings.jpeg", name: "Fried Dumplings"}, 
        {id: 4, src: "/afood_gallery_images/egg_roll.jpeg", name: "Egg Roll"}, 
        {id: 5, src: "/afood_gallery_images/general.jpeg", name: "General Tso Chicken"}, 
        {id: 6, src: "/afood_gallery_images/hot_soup.jpeg", name: "Hot and Sour Soup"}, 
        {id: 7, src: "/afood_gallery_images/kong_po_chicken.jpeg", name: "Kong Po Chicken"}, 
        {id: 8, src: "/afood_gallery_images/lo_mein.jpeg", name: "Beef Lo Mein"}, 
        {id: 9, src: "/afood_gallery_images/pupuplatter.jpeg", name: "Pu Pu Platter"}, 
        {id: 10, src: "/afood_gallery_images/platter.jpeg", name: "Combination Platter"}, 
        {id: 11, src: "/afood_gallery_images/stir_fry.jpeg", name: "Chicken Stir Fry"}, 
        {id: 12, src: "/afood_gallery_images/wonton_soup.jpeg", name: "Wonton Soup"}
    ]

    return( 
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white bg-opacity-95 shadow-lg rounded-xl w-full p-10 lg:p-16">   

            <h1 className="text-3xl font-semibold text-stone-700 mb-6 text-center">
                    Food Gallery
            </h1>
            <Carousel
            opts={{
                align: "start",
            }}
            >

                <CarouselContent>
                    {foodImages.map((image) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                        <div>
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <img src={image.src} className="rounded-xl"/>
                            </CardContent>
                            
                            <h2 className="text-center pb-4 font-medium">{image.name}</h2>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            </div>
        </div>
    )
}