import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export default function Instructor(){
    const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Marcus Anderson",
    designation: "Guitar Instructor",
    image:
      "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
  },
  {
    id: 3,
    name: "Sophia Bennett",
    designation: "Piano Instructor",
    image:
      "https://img.magnific.com/premium-photo/smiling-man-png-sticker-round-badge-transparent-background_53876-996829.jpg?semt=ais_test_b&w=740&q=80",
  },
  {
    id: 4,
    name: "Daniel Carter",
    designation: "Drums Instructor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNJvvnIOrQnUwof4N-nDqmF_Fm_aiCmb8Pmru0nq-NAH9Zbrq5bP2i38&s=10",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    designation: "Violin Instructor",
    image:
      "https://img.magnific.com/premium-photo/png-smiling-man-with-beard-round-badge-transparent-background_53876-953494.jpg?semt=ais_test_b&w=740&q=80",
  },
];
    return(
         <WavyBackground
      className="text-center flex flex-col justify-center items-center space-y-10 px-4 "
      containerClassName="relative overflow-hidden"
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      backgroundFill="#020617"
      waveOpacity={0.5}
      blur={10}
      speed="fast"
    >
        <div className="justify-center">
            <div className="text-center flex flex-col justify-center items-center space-y-10">
                <h1 className="md:text-7xl text-4xl">Meet Our Instructors</h1>
                <p className="md:text-3xl">Discover the talented professional who will help in your musical journey</p>
               
            </div>
               
        </div>
         <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={instructors} />
    </div>
        </WavyBackground>
     

    )
}