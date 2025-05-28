"use client"
import React, {useRef, useState} from 'react'
import {outfit} from "@/app/font";
import {ArrowDown} from "lucide-react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(SplitText, useGSAP);

interface Question {
    question: string,
    answer: string
}

const questions: Question[] =  [
    {
        question: "What is CoFounds?",
        answer: "CoFounds is a modern job search companion that helps you track, discover and apply to jobs smarter - all in one place, powered by the community."
    },
    {
        question: "Is CoFounds free to use?",
        answer: "Yes, it is completely free to use."
    },
    {
        question: "How is CoFounds different from other job search platforms?",
        answer: "CoFounds is different from other job search platforms because it is built for individuals, not just companies."
    },
    {
        question: "Do I need to register to use CoFounds?",
        answer: "No, you don't need to register to use CoFounds. You can use it for free."
    },
    {
        question: "Is my data safe with CoFounds?",
        answer: "Yes, your data is safe with CoFounds. We don't sell your data. We don't track you. We don't share your data."
    }
]

const Qa = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);

    const [openIndex, setOpenIndex] = useState(0)

    useGSAP(() => {
        const split = SplitText.create(".answer", {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
        })

        if(openIndex === 0 || openIndex) {
            gsap.from(split.lines, {
                y: 50,
                ease: "power2.inOut",
                stagger: 0.05
            })
        }
    }, [openIndex])

    return (
        <section className={`w-full bg-black flex flex-col items-center justify-center py-20 gap-10 text-white ${outfit.className}`}>
            <h1 ref={h1Ref} className="flex items-center justify-center text-white py-3 px-10 border-1 border-white/20 rounded-full backdrop-blur-md bg-white/10">
                Your Questions, Our Answers.
            </h1>
            <p ref={paraRef} className="text-violet-200/60 text-center text-xl font-semibold">
                Everything you need to know about CoFounds - from the start to the end.
            </p>
            <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="w-full space-y-5">
                    {questions.map((question, index) => (
                        <div key={index} className="p-5 bg-[#121212] cursor-pointer" onClick={() => setOpenIndex(index)}>
                            <h1 className="text-white text-2xl font-semibold flex items-center justify-between">
                                <span>{question.question}</span>
                                <ArrowDown className={`${openIndex === index ? '-rotate-90' : 'rotate-0'} transition-all duration-200 ease-linear`}/>
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="w-full bg-[#121212] h-full p-10 text-2xl lg:text-4xl leading-relaxed text-justify flex items-center justify-center">
                    <span className="answer">
                        {questions[openIndex].answer}
                    </span>
                </div>
            </div>
        </section>
    )
}
export default Qa
