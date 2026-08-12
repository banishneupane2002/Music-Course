"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { GlowingEffect } from "@/components/ui/glowing-effect";



const musicSchoolContent = [
  {
    title: "Learn from Expert Instructors",
    description:
      "Learn music from experienced musicians and passionate instructors. Whether you're picking up an instrument for the first time or looking to sharpen your existing skills, our teachers provide personalized guidance to help you grow with confidence.",
    content: (
        
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white text-2xl font-bold">
         <GlowingEffect  blur={0}
                        borderWidth={3}
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}/>
           <img
        src="https://westernreservemusic.com/wp-content/uploads/2026/03/Western-Reserve-Music-Blogs-5.png"
        alt="Expert music instructor"
        className="h-full w-full object-cover"
      />
      </div>
    ),
  },
  {
    title: "Master Your Instrument",
    description:
      "Build a strong foundation and develop real musical skills through structured lessons. Learn technique, rhythm, theory, and expression while practicing at your own pace with lessons designed for your level and goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white text-2xl font-bold">
         <img
        src="https://media.istockphoto.com/id/894058154/photo/musical-instruments.jpg?s=612x612&w=0&k=20&c=uB0TFyqeY1wu1BPyH2EB7NMoOCaSb86pk7YNQ5QVCGQ="
        alt="Musician playing instrument"
        className="h-full w-full object-cover"
      />
      </div>
    ),
  },
  {
    title: "Practice. Create. Perform.",
    description:
      "Turn your practice into performance. Work on songs, develop your musical style, and gain the confidence to perform in front of others. From your first song to the stage, we'll help you take your music further.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] text-white text-2xl font-bold">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VkWb_YGcJFZ4mXXjnKZWzMJLsNJr7lYhK_63TDT5ug&s=10"
        alt="Musician playing instrument"
        className="h-full w-full object-cover"
      />
      </div>
    ),
  },
  {
    title: "Find Your Musical Community",
    description:
      "Music is better together. Connect with fellow musicians, collaborate on projects, join group sessions, and share your passion for music in a supportive and inspiring community.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-500))] text-white text-2xl font-bold">
        <img
        src="https://pxl-yorksjacuk.terminalfour.net/1600x1000/filters:quality(35)/prod01/yorksjacuk/media/content-assets/safe-images/1600-x-1000/ICCM-Djembe-Hands-(1).jpg"
        alt="Musician playing instrument"
        className="h-full w-full object-cover"
      />
      </div>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>)}