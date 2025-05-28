"use client"

import React, {useRef} from 'react'
import {outfit} from "@/app/font";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Reasons = [
    {
        title: "Centralized Job Tracker",
        description: "Manage all your job applications in one place - no more messy spreadsheets or lost links",
        image: "/images/svg/central.svg"
    },
    {
        title: "Smart Discovery",
        description: "Get curated job recommendations based on your skills, interests, and activity.",
        image: "/images/svg/smart-disc.svg"
    },
    {
        title: "Community Powered Hiring",
        description: "Leverage referrals, share opportunities, and hiring insights from people like you ",
        image: "/images/svg/community.svg"
    }
]

const Why = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                once: true,
            }
        })
        tl.to(h1Ref.current, {
            opacity: 1,
            ease: "power2.inOut",
            y: 0,
            duration: 0.5
        })

        tl.to(paraRef.current, {
            opacity: 1,
            ease: "power2.inOut",
            y: 0,
            duration: 0.5
        })

        tl.to(cardRef.current?.children || [], {
            opacity: 1,
            ease: "power2.inOut",
            x: 0,
            stagger: 0.1,
            duration: 1
        })
    }, {scope: sectionRef})

    return (
        <section ref={sectionRef} className="w-full bg-black flex flex-col items-center justify-center py-20 gap-10">
            <h1 ref={h1Ref} className="flex items-center justify-center text-white py-3 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10 translate-y-10 opacity-0">
                Why CoFounds?
            </h1>
            <p ref={paraRef} className="text-violet-200/60 text-center text-xl font-semibold translate-y-10 opacity-0">
                Built for Job Seekers - Not Just Recruiters.
            </p>
            <div ref={cardRef} className="flex flex-col lg:flex-row items-center justify-center gap-5 w-2/3">
                {Reasons.map((reason, index) => (
                    <div key={index} className="flex flex-col items-start justify-between gap-5 h-[450px] w-[400px] border-1 border-white/20 rounded-2xl p-6 translate-x-10 opacity-0 relative">
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <Image src={reason.image} alt={reason.title} width={50} height={50} className="h-full w-2/3 "/>
                        </div>
                        <h1 className={`text-white text-left text-2xl font-semibold outfit.className ${outfit.className}`}>{reason.title}</h1>
                        <p className={`text-white/50 text-left text-lg font-semibold leading-none ${outfit.className}`}>{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Why
