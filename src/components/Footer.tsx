import { div } from "motion/react-client";
import React from "react";
import Link from "next/link";

export default function footer(){
    return(<div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4  py-12 mx-auto gap-8 px-5 md:px-20  " >
        <div>
            <h1 className="text-xl font-semibold">About Us</h1>
            <p>Passionate about music, dedicated to helping you grow. Our academy provides professional music education for beginners and experienced musicians alike.</p>
        </div>

        <div>
            <h1 className="text-xl font-semibold"> Quick Links</h1>

            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Courses</li>
                <li>Contact</li>
            </ul>        
        </div>

        <div>
            <h1 className="text-xl font-semibold">Follow Us</h1>
            <div className="flex space-x-3">
                <Link href={"#"}>Facebook</Link>
                <Link href={"#"}>Twitter</Link>
                <Link href={"#"}>Instagram</Link>
            </div>
        </div>
        <div>
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <ul>
               <li>Kathmandu, Nepal</li> 
               <li>Kathmandu 44000</li>
               <li>Email: banishrox@gmail.com</li>
               <li>Phone: 9841000000</li>
            </ul>
        </div>





    </div>)
}