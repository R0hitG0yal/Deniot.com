import "./App.css";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "top top", // Start when the top of .imageContainer hits 10% from top of the viewport
        end: "+=650px", // End after scrolling 600px
        scrub: 2,
        // markers: true,
        pin: true, // Pin the element in place
      },
    });

    timeline
      .fromTo(
        ".imageContainer #box",
        {
          borderTop: "250px solid gainsboro",
          borderBottom: "250px solid gainsboro",
          borderLeft: "550px solid gainsboro",
          borderRight: "550px solid gainsboro",
        },
        {
          borderTop: "200px solid gainsboro",
          borderBottom: "200px solid gainsboro",
          borderLeft: "500px solid gainsboro",
          borderRight: "500px solid gainsboro",
          duration: 1,
        }
      )
      .fromTo(
        ".imageContainer #box",
        {
          borderTop: "200px solid gainsboro",
          borderBottom: "200px solid gainsboro",
          borderLeft: "500px solid gainsboro",
          borderRight: "500px solid gainsboro",
        },
        {
          borderTop: "200px solid gainsboro",
          borderBottom: "200px solid gainsboro",
          borderLeft: "300px solid gainsboro",
          borderRight: "300px solid gainsboro",
          duration: 1,
        }
      )
      .fromTo(
        ".imageContainer #box",
        {
          borderTop: "200px solid gainsboro",
          borderBottom: "200px solid gainsboro",
          borderLeft: "300px solid gainsboro",
          borderRight: "300px solid gainsboro",
        },
        {
          borderTop: "0px solid gainsboro",
          borderBottom: "0px solid gainsboro",
          borderLeft: "0px solid gainsboro",
          borderRight: "0px solid gainsboro",
          duration: 1,
        }
      );

    gsap.to("span", {
      transform: "translateY(0px)",
      ease: "bounce.inOut",
      duration: 2.5,
      delay: .5,
      scrollTrigger: {
        trigger: ".title",
        start: "top 90%", // Start when the top of .imageContainer hits 10% from top of the viewport
        end: "+=150px",
        // markers: true,
        pin: true, // Pin the element in place
      },
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <nav id="nav-container">
            <a href="/" aria-label="Homepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 58"
                width="55"
                height="58"
                focusable="false"
                tabIndex={-1}
                className="logo"
              >
                <g transform="translate(0 6)">
                  <defs>
                    <filter
                      id="a"
                      filterUnits="userSpaceOnUse"
                      x="-5"
                      y="-5"
                      width="64.1"
                      height="56"
                    >
                      <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix>
                    </filter>
                  </defs>
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="-5"
                    y="-5"
                    width="64.1"
                    height="56"
                    id="b"
                  >
                    <g filter="url(#a)">
                      <path
                        d="M22.8 12.8L10.1.2 6.6 3.8 22.9 20c5.5-5.5 11-11 16.4-16.3L35.6 0 22.8 12.8zM.1 10.2l12.8 12.7C8.4 27.2 4.2 31.5 0 35.7l3.6 3.6L19.9 23 3.5 6.7.1 10.2zm34 4.2l-7.8 7.8c-.2.2-.4.5-.6.6l16.7 16.7 8.2-8.2c2.9-2.9 4.1-6.5 3.2-10.5-1-4.6-3.9-7.7-8.4-9.1-1.2-.4-2.5-.6-3.6-.6-2.8 0-5.4 1.1-7.7 3.3zm-1.2 8.3c1.5-1.5 3-3 4.5-4.6 2.8-2.7 6.3-2.9 9.4-.4 3.1 2.5 3.3 7 .6 9.8-1.6 1.6-3.2 3.2-4.8 4.7-3.3-3.1-6.5-6.2-9.7-9.5zM6.5 42.3l3.6 3.6c4.3-4.2 8.6-8.5 13-12.9l12.6 12.6 3.5-3.4C33.8 36.8 28.3 31.4 22.9 26L6.5 42.3z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="#fff"
                      ></path>
                    </g>
                  </mask>
                  <path
                    d="M-5 51h64.1V-5H-5v56z"
                    mask="url(#b)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    className="logo-top"
                  ></path>
                </g>
                <linearGradient
                  id="c"
                  gradientUnits="userSpaceOnUse"
                  x1="22.876"
                  y1="52.275"
                  x2="22.876"
                  y2="32.682"
                >
                  <stop offset=".2" stop-color="#c69952"></stop>
                  <stop offset=".26" stop-color="#ca9f5b"></stop>
                  <stop offset=".59" stop-color="#dbba88"></stop>
                  <stop offset=".85" stop-color="#e6cca4"></stop>
                  <stop offset="1" stop-color="#ead2ae"></stop>
                </linearGradient>
                <path
                  d="M22.9 32l16.3 16.3-3.5 3.4-12.6-12.6L10.2 52l-3.6-3.6L22.9 32"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="url(#c)"
                ></path>
              </svg>
            </a>
            <div id="nav-links">
              <a href="">Interior Design</a>
              <a href="">Architecture</a>
              <a href="">Furniture</a>
              <a href="">Q&A with JLD</a>
              <a href="">Books</a>
              <a href="">Instagram</a>
              <a href="">Contact</a>
            </div>
          </nav>
          <div id="box" className="box"></div>
          <div>
            {loading ? (
              <img
                className="w-screen h-full"
                src="https://i.vimeocdn.com/video/1045506040-3622c5586953046b156926fb6d0d6681933575e41fd746289e4cea5444a289ab-d.jpg"
              ></img>
            ) : (
              <></>
            )}
            <iframe
              src="https://player.vimeo.com/video/505223053?controls=0&loop=true&autoplay=true&muted=true&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false"
              allowFullScreen
              allow="autoplay,fullscreen,picture-in-picture"
              title="Player for PRJCT2 FINALE"
              data-ready="true"
              tabIndex={-1}
              onLoad={() => setLoading(false)}
            ></iframe>
          </div>
          <p contentEditable id="quote">
            Design your life and dreams
          </p>
        </div>
      </div>
      <div className="titleContainer">
        <div className="title">
          <span>Jean-Louis</span>
          <span> Deniot</span>
        </div>
      </div>
    </>
  );
}

export default App;
