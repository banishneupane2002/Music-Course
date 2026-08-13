"use client";

import React from "react";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import { Spotlight } from "@/components/ui/spotlight-new";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";


interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  slug: string;
  image?: string;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className=" relative py-20 bg-mist-950  ">
        <div
              className={cn(
                "absolute inset-0",
                "[background-size:40px_40px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
         {/* <Spotlight/> */}
      <div className="max-w-7xl mx-auto px-4 ">
      
     
        <div className="text-center mb-12">
            <TypewriterEffectSmooth className="flex justify-center bg-gradient-to-r from-gray-700 to-white bg-clip-text text-transparent relative"
  words={[
    {
      text: "Featured",
      className: "",
    },
    {
      text: "Courses",
      className: "",
    },
  ]}
/> 

          <p className="mt-3 text-gray-600 relative dark:text-gray-400">
            Learn with the Best
          </p>
        </div>

        <FocusCards>
            
          {featuredCourses.map((course: Course) => (
            
            <div
              key={course.id}
              className="group overflow-hidden rounded-xl  bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
                <GlowingEffect  blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}/>
    
                
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image || "/images/course-placeholder.jpg"}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-sm text-white">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-500">
                      Instructor
                    </p>

                    <p className="font-medium">
                      {course.instructor}
                    </p>
                  </div>

                  <div className="text-lg font-bold">
                    ${course.price}
                  </div>
                </div>

                <Link
                  // href={`/courses/${course.slug}`}
                   href={'/courses'}
                  className="block w-full rounded-lg bg-black px-4 py-3 text-center text-white hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </FocusCards>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block relative rounded-lg border px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            View All Courses
          </Link>
        </div>
          
      </div>
    </section>
  );
}