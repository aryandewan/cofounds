"use client"

import React, {useRef} from 'react'
import {BookHeart, Briefcase, LayoutDashboard, RefreshCcw, ShieldPlus, Users} from "lucide-react";
import {outfit} from "@/app/font";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {CardSpotlight} from "@/components/ui/card-spotlight";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const works = [
    {
        title: "Built For Job Seekers",
        description: "Not just another job board. CoFounds is crafted around the needs, habits and pain points of real applicants.",
        icon: Briefcase
    },
    {
        title: "Apply Smarted, Not Harder",
        description: "Cut through clutter. Get curated listings and tools that help you apply with precision, not spray-and-pray.",
        icon: LayoutDashboard
    },
    {
        title: "Always in Sync",
        description: "Track Saved jobs, status updates and notes across devices - without the spreadsheet chaos.",
        icon: RefreshCcw
    },
    {
        title: "Community-Driven Advantage",
        description: "Tap into shared opportunities and insights from the community.",
        icon: Users
    },
    {
        title: "Personalized Job Discovery",
        description: "Get curated job recommendations based on your skills, interests, and activity.",
        icon: BookHeart
    },
    {
        title: "Privacy-First by Design",
        description: "We don't sell your data. We don't track you. We don't share your data.",
        icon: ShieldPlus
    }
]

const Work = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const firstRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: firstRef.current,
                start: "top center",
                once: true,
            }
        })

        tl.to(h1Ref.current, {
            opacity: 1,
            ease: "power2.inOut",
            y: 0,
            duration: 0.5,
        })

        tl.to(paraRef.current, {
            opacity: 1,
            ease: "power2.inOut",
            y: 0,
            duration: 0.5,
        })

        tl.to(cardsRef.current?.children || [], {
            opacity: 1,
            stagger: {
                each: 0.1,
                from: "random",
            },
        })
    })

    return (
        <section ref={sectionRef} className={`bg-gradient-to-b from-black to-black via-[#10104C] flex flex-col items-center justify-center py-20 ${outfit.className}`}>
            <div ref={firstRef} className="flex flex-col items-center justify-center gap-10 py-20 h-[450px] w-full">
                <h1 ref={h1Ref} className="flex items-center justify-center text-white py-3 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10 translate-y-10 opacity-0">
                    Why CoFounds Works?
                </h1>
                <p ref={paraRef} className="text-violet-200/60 text-center text-xl font-semibold translate-y-10 opacity-0">
                    Why CoFounds Delivers Results - Not Just Listings
                </p>
            </div>
            <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 w-2/3">
                {works.map((work, index) => (
                    <div key={index} className="flex flex-col items-start justify-between h-[450px] border-dashed border-2 border-white/20 p-6 opacity-0">
                        <div className="flex flex-col items-start justify-center gap-5">
                            <div className="text-white">{React.createElement(work.icon)}</div>
                            <h1 className="text-white text-left text-4xl font-semibold">{work.title}</h1>
                        </div>
                        <p className="text-white/50 text-left text-xl font-semibold leading-none">{work.description}</p>
                    </div>
                ))}
            </div>
            <CardSpotlight className="w-2/3 h-[450px]">
                <div className="flex flex-col items-center justify-center h-full">
                        <button className="flex items-center justify-center text-white text-4xl p-5 rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-200 cursor-pointer z-50">
                            Join CoFounds Today
                        </button>
                </div>
            </CardSpotlight>
        </section>
    )
}
export default Work
