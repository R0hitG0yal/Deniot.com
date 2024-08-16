import "./App.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  

  const container = useRef(null);
  useGSAP(() => {
    gsap.to(".box", {
      // scale: 1.5,
      borderTop: "200px solid gray",
      borderBottom: "200px solid gray",
      borderLeft: "500px solid gray",
      borderRight: "500px solid gray",

      scrollTrigger: {
        trigger: ".box",
        // toggleActions: "pause restart none none",
        start: "10vh",
        end: "+=7vh",
        pin: true,
        // markers: true,
        // end: "+=50",
        scrub: true,
      },
    }); // <-- automatically reverted
    gsap.to(".box", {
      imageRenderer: true,
      borderLeft: "250px solid gray",
      borderRight: "250px solid gray",
      scrollTrigger: {
        trigger: ".box",
        // markers: true,
        pin: true,
        // toggleActions: "pause restart none none",
        start: "15vh",
        end: "+=10vh",
        scrub: true,
      },
    });
    gsap.to(".box", {
      imageRenderer: true,
      borderTop: "1px solid transparent",
      borderBottom: "1px solid transparent",
      borderLeft: "1px solid transparent",
      borderRight: "1px solid transparent",

      scrollTrigger: {
        trigger: ".box",
        // markers: true,
        pin: true,
        // toggleActions: "pause restart none none",
        start: "27vh",
        end: "+=10vh",
        scrub: true,
      },
    });
  }, [container]);

  // const data: string[] = [
  //   "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
  //   "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  //   "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  //   "https://plus.unsplash.com/premium_photo-1681113076872-c74b8926e70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  //   "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  //   "https://plus.unsplash.com/premium_photo-1686090449342-f8f94e6cbb9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
  // ];

  return (
    <div ref={container} className="container">
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
        <div id="box" className="box">
          {/* <img src="https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D" /> */}
        </div>
        <p contentEditable id="quote">
          Design your life and dreams
        </p>
      </div>
    </div>
  );
}

export default App;
