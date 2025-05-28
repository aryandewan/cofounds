"use client"
import React, {useRef} from 'react'
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay'
import {outfit} from "@/app/font";
import {Star} from "lucide-react";
import Image from "next/image";

interface Review {
    name: string,
    review: string,
    stars: number
    image: string
}

const reviews: Review[] = [
    {
        name: "Aryan",
        review: 'CoFounds helped me cut through the clutter and find my dream job - without feeling overwhelmed.',
        stars: 4,
        image: "/images/svg/aryan.svg"
    },
    {
        name: "Jane",
        review: 'CoFounds helped find people who are like me and helped me land my dream job.',
        stars: 5,
        image: "/images/svg/jane.svg"
    },
    {
        name: "John",
        review: 'CoFounds helped me find my dream job and helped me land my dream job.',
        stars: 4,
        image: "/images/svg/john.svg"
    },
    {
        name: "Aarti",
        review: "CoFounds has helped me and my peers from college to find a job at the right companies - Thank you so much CoFounds.",
        stars: 4,
        image: "/images/svg/aarti.svg"
    }
]

const Testimonials = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    return (
        <section className={`w-full bg-black flex flex-col items-center justify-center pb-20 gap-10 text-white ${outfit.className}`}>
            <h1 ref={h1Ref} className="flex items-center justify-center text-white py-3 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10">
                Real People. Real Journeys. Real Outcomes.
            </h1>
            <p ref={paraRef} className="text-violet-200/60 text-center text-xl font-semibold">
                Built with you - Backed by Community.
            </p>
            <div className="w-2/3">
                <Carousel plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}>
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} >
                                <div className="p-1">
                                    <Card className="w-full h-[450px] bg-black">
                                        <CardContent className="flex flex-col lg:flex-row items-center justify-center gap-5 h-full w-full">
                                            <div className="p-10 flex items-center justify-center w-1/3">
                                                <Image src={review.image} alt={review.name} width={100} height={100} className="w-full rounded-full"/>
                                            </div>
                                            <div className="flex flex-col items-center justify-center gap-5 w-full">
                                                <CardHeader className="text-white font-bold text-xl lg:text-3xl w-full text-center lg:text-left flex items-center justify-between">{review.name}
                                                    <div className="flex items-center">
                                                    {[...Array(review.stars)].map((_, i) => (
                                                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={25} />
                                                    ))}
                                                </div>
                                                </CardHeader>
                                                <CardDescription className="text-3xl lg:text-5xl text-white w-full font-light text-center lg:text-justify">&#34;{review.review}&#34;</CardDescription>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}
export default Testimonials
