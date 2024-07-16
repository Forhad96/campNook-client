import { useState } from "react";
import ComHeader from "../shared/ComHeader";
  const testimonials = [
    {
      avatar: "avatars/avatar1.png",
      name: "John Doe",
      title: "Avid Camper",
      quote:
        "CampNook has the best camping gear! Everything I bought exceeded my expectations in quality and durability.",
    },
    {
      avatar: "/avatars/avatar2.png",
      name: "Jane Smith",
      title: "Outdoor Enthusiast",
      quote:
        "I love the variety of products available at CampNook. Their customer service is fantastic and the free shipping is a great bonus!",
    },
    {
      avatar: "/avatars/avatar3.png",
      name: "Mike Johnson",
      title: "Backpacker",
      quote:
        "CampNook is my go-to shop for all my camping needs. The prices are unbeatable and the products are top-notch.",
    },
    {
      avatar: "/avatars/avatar4.png",
      name: "Emily Davis",
      title: "Hiking Lover",
      quote:
        "The gear I purchased from CampNook made my recent hiking trip a breeze. Highly recommend to all outdoor enthusiasts!",
    },
  ];

export default function Testimonials() {


  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ComHeader head="What people are saying" />
          <ul>
            {testimonials.map((item, idx) =>
              currentTestimonial == idx ? (
                <li key={idx}>
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                        “{item.quote}“
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <img
                        src={item.avatar}
                        className="w-16 h-16 mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item, idx) => (
              <li key={idx}>
                <button
                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-brandPrimary focus:ring ${
                    currentTestimonial == idx ? "bg-brandPrimary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
