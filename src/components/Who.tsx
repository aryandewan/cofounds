"use client"
import React, {useRef} from 'react'
import {outfit} from "@/app/font";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

const Who = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const split = SplitText.create(".split", {
            type: "words",
            wordsClass: "word++",
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 80%",
                scrub: 1,
            },
        })
        tl.to(h1Ref.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })

        tl.from(split.words, {
            autoAlpha: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: {
                each: 0.1,
                from: "random",
            }
        })
    }, [])


  return (
    <section ref={sectionRef} className="w-full bg-black flex flex-col items-center justify-center py-20 gap-10 text-white">
        <h1 ref={h1Ref} className="flex items-center justify-center text-white py-3 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10 translate-y-10 opacity-0">
            Who We Are
        </h1>
        <p className={`text-white text-center text-5xl font-semibold w-[56%] leading-[1.3] ${outfit.className} split`}>
            CoFounds is a job-first platform built for individuals, not just companies. We help you discover, track, and manage job opportunities - all in one place.
        </p>
    </section>
  )
}
export default Who