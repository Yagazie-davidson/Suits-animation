"use client";
import AnimatedHeroText from "@/components/system/AnimatedHeroText";
import { ParallaxText } from "@/components/system/VelocityScroll";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [yValue, setYValue] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setYValue(600);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="mx-10">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          exit={{ y: -50, opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 4,
          }}
          viewport={{ once: true }}
        >
          <nav className="flex items-center justify-between z-50 h-fit">
            <h2 className="font-semibold text-2xl bg-gradient-to-br from-purple-400 to-blue-500 inline-block text-transparent bg-clip-text">
              COMPANY
            </h2>
            <ul className="flex items-center space-x-4 py-5 text-xl">
              <li>
                <Link
                  href="#"
                  className="cursor-pointer hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:cursor-pointer hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="cursor-pointer hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
                >
                  Fit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:cursor-pointer hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
                >
                  Resources
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-0 cursor-pointer">
                <UserRound />
                <p className="cursor-pointer hover:bg-gradient-to-br hover:from-purple-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text">
                  Account
                </p>
              </div>
              <ShoppingBag className="cursor-pointer hover:scale-105 duration-75" />
            </div>
          </nav>
        </motion.div>
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 3,
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-start items-center relative">
              <div className="w-72 absolute right-16 top-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 4,
                    }}
                    viewport={{ once: true }}
                  >
                    <p>
                      Discover the finest hand-stitched suits for every
                      occasion, where precision meets style.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex flex-col -space-y-14 w-full ">
                <AnimatedHeroText
                  delay={3.1}
                  initialX={0}
                  initialY={100}
                  className="font-semibold text-[9rem]"
                  y={0}
                >
                  tailored
                </AnimatedHeroText>
                <ParallaxText baseVelocity={4}>
                  <div className="font-semibold text-[9rem] flex bg-gradient-to-br from-purple-400 to-blue-500 text-transparent bg-clip-text">
                    {"craftsmanship".split("").map((letter, index) => (
                      <AnimatePresence mode="wait" key={index}>
                        <motion.div
                          initial={{ y: 100, opacity: 0, x: 200 }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                          }}
                          exit={{ y: 100, opacity: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index / 25 + 3.1,
                          }}
                          viewport={{ once: true }}
                        >
                          <p className="font-semibold text-[9rem] bg-gradient-to-br from-purple-400 to-blue-500 text-transparent bg-clip-text transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            {letter}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    ))}
                  </div>
                </ParallaxText>
                <AnimatedHeroText
                  delay={3.1}
                  initialX={350}
                  initialY={100}
                  className="font-semibold text-[9rem]"
                  y={0}
                >
                  elegance
                </AnimatedHeroText>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center absolute w-[calc(100%-3rem)] h-fit -top-8">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.7 }}
                whileInView={{
                  y: yValue,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  y: { delay: 0.4, duration: 1 },
                  scale: { delay: 0.8, duration: 1 },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/the-groomsman-suit/image/upload/f_webp,h_721,w_1400,q_auto,f_auto,ar_1.1/v1/gatsby-cloudinary/pages/index/group-cta?_a=AXAH4S10"
                  }
                  alt="general pic"
                  width={900}
                  height={900}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
