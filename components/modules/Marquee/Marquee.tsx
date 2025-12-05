"use client";
import React, { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { FaQuoteLeft } from "react-icons/fa";
import "./Marquee.css";

const messages = [
  "Tech Talk: Advancements in Science and Tech",
  "Tech Talk: Advancements in Science and Tech",
  "Tech Talk: Advancements in Science and Tech",
  "Tech Talk: Advancements in Science and Tech",
];

const InfiniteMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const cloneRef = useRef<HTMLDivElement | null>(null);

  const emojiAnimation = useSpring({
    transform: "scale(1.5)",
    loop: { reverse: true },
    config: { friction: 10, tension: 200 },
  });

  useEffect(() => {
    const marquee = marqueeRef.current;
    const clone = cloneRef.current;

    if (!marquee || !clone) return;

    let position = 0;
    const speed = 2;

    const animate = () => {
      position -= speed;

      if (position <= -marquee.clientWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      clone.style.transform = `translateX(${position + marquee.clientWidth}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const renderContent = () =>
    messages.map((text, index) => (
      <React.Fragment key={index}>
        <animated.div style={emojiAnimation} className="text-amber-400">
          <FaQuoteLeft />
        </animated.div>
        <div className="text-teal-400">{text}</div>
      </React.Fragment>
    ));

  return (
    <div className="marquee-container">
      <div className="marquee-content" ref={marqueeRef}>
        {renderContent()}
      </div>

      <div className="marquee-content" ref={cloneRef}>
        {renderContent()}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
