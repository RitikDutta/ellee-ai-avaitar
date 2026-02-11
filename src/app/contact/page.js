"use client";
import "./contact.css";
import { useRef, useEffect } from "react";

import Copy from "@/components/Copy/Copy";
import BrandIcon from "@/components/BrandIcon/BrandIcon";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const calloutRef = useRef(null);
  const contactHeroImgRef = useRef(null);
  const studioCards = [
    {
      label: "Editorial Pull",
      title: "Campaign racks tailored to your visual direction.",
      image: "/spotlight/spotlight_img_01.jpg",
    },
    {
      label: "Private Styling",
      title: "One-to-one fitting sessions for premium clients.",
      image: "/spotlight/spotlight_img_04.jpg",
    },
    {
      label: "Press Access",
      title: "Showroom previews, launch notes, and media assets.",
      image: "/spotlight/spotlight_img_08.jpg",
    },
  ];

  useGSAP(() => {
    if (!contactHeroImgRef.current) return;

    gsap.set(contactHeroImgRef.current, { y: 1000 });
    gsap.to(contactHeroImgRef.current, {
      y: 100,
      duration: 0.75,
      ease: "power3.out",
      delay: 0.75,
    });
  });

  useEffect(() => {
    const container = calloutRef.current;
    if (!container) return;

    const timer = setTimeout(() => {
      const image = container.querySelector(".contact-callout-img");

      const st = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          const translateY = -progress * 20;
          gsap.set(image, {
            y: `${translateY}rem`,
          });
        },
      });

      return () => {
        st.kill();
      };
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-col contact-hero-copy">
            <div className="contact-header">
              <Copy animateOnScroll={false} delay={0.75}>
                <h3>Outbound access is limited, proceed with intent.</h3>
              </Copy>
            </div>
            <div className="contact-meta">
              <div className="contact-meta-block">
                <Copy animateOnScroll={false} delay={0.9}>
                  <p className="bodyCopy">External Comms Protocol</p>
                </Copy>
                <Copy animateOnScroll={false} delay={1}>
                  <h4>echo@ellee.co</h4>
                </Copy>
              </div>
              <div className="contact-meta-block">
                <Copy animateOnScroll={false} delay={1.1}>
                  <p className="bodyCopy">Dispatch Inquiry System</p>
                </Copy>
                <Copy animateOnScroll={false} delay={1.2}>
                  <h4>dispatch@ellee.co</h4>
                </Copy>
              </div>
            </div>
          </div>
          <div className="contact-hero-col contact-hero-img-wrapper">
            <div className="contact-hero-img" ref={contactHeroImgRef}>
              <img src="/contact/hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-callout" ref={calloutRef}>
        <div className="container">
          <div className="contact-callout-header">
            <div className="contact-callout-logo">
              <BrandIcon />
            </div>
            <Copy type="flicker">
              <p>
                Get early signals, private releases, and occasional noise worth
                hearing. You'll know when it matters.
              </p>
            </Copy>
            <Copy>
              <h1>Connect to the silent grid</h1>
            </Copy>
            <div className="contact-callout-img">
              <img src="/contact/contact-callout.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-studio">
        <div className="container">
          <div className="contact-studio-header">
            <Copy>
              <h2>Style Brief Interface</h2>
            </Copy>
            <Copy type="flicker">
              <p className="bodyCopy">
                Build your request with mood, size run, and delivery window.
                We route it to the right team instantly.
              </p>
            </Copy>
          </div>

          <div className="contact-studio-grid">
            {studioCards.map((card) => (
              <article key={card.label} className="studio-card">
                <div className="studio-card-img">
                  <img src={card.image} alt={card.label} />
                </div>
                <div className="studio-card-copy">
                  <p>{card.label}</p>
                  <h5>{card.title}</h5>
                </div>
              </article>
            ))}
          </div>

          <div className="contact-studio-panel">
            <div className="contact-studio-panel-copy">
              <Copy>
                <h4>Need quick turnaround?</h4>
              </Copy>
              <Copy type="flicker">
                <p className="bodyCopy">
                  Send your deck and date. Most requests are answered within 24
                  hours.
                </p>
              </Copy>
            </div>
            <div className="contact-studio-panel-links">
              <a href="mailto:echo@ellee.co?subject=Style%20Brief%20Request">
                Start style brief
              </a>
              <a
                href="mailto:dispatch@ellee.co?subject=Press%20and%20Collaboration%20Request"
              >
                Press and collaboration
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
