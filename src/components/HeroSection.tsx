 import React from 'react'
 import Link from 'next/link'
 import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HeroSection() {
  return (
 
    <div
    className="h-auto md:h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 space-y-10" >
        <Spotlight className="absolute -top-40  md:-top-20 md:left-60" fill="blue" />   

     

    <h1 className=' text-center mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>Master the Art of Music</h1>
    
    <div className="text-2xl text-center md:px-60"><p>Learn the fundamentals of music theory and practice with our comprehensive courses.Weather you're a beginner or an advanced player, we have something for everyone.</p></div>
<div> 
    
    <Link href="/courses">
    <button className="relative inline-flex h-20 w-50 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Explore courses
  </span>
</button>
</Link>
</div>

    </div>
  )
}


