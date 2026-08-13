
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CourseData from "@/data/music_courses.json"
import { div } from "motion/react-client";




export default function Page(){
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

    return(
        <div className="bg-black grid grid-cols-1 lg:grid-cols-2  ">

        {CourseData.courses.map((course:Course)=>(
              

        <CardContainer className="inter-var" key={course.id}>
        <CardBody className="bg-gray-50 relative group/card top-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  " >
        
         <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          
        >
          {course.title}
        </CardItem>
       
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {course.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={course.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href="#"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
            ))}
            
        </div>
    )
}