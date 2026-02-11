import "./lookbook.css";
import Link from "next/link";

import Copy from "@/components/Copy/Copy";

const heroTags = ["Signal Ready", "Modular Layers", "Neutral Runtime"];

const lookbookSequences = [
  {
    id: "Sequence 01",
    title: "Dawn Protocol",
    window: "0600 - 1130",
    note: "Soft shell layering tuned for early transit and controlled light.",
    palette: ["Stone", "Fog", "Graphite"],
    primaryImage: "/spotlight/spotlight_img_01.jpg",
    secondaryImage: "/spotlight/spotlight_img_04.jpg",
  },
  {
    id: "Sequence 02",
    title: "Midday Drift",
    window: "1200 - 1730",
    note: "Airy structures with sharp seams for high-mobility hours.",
    palette: ["Ash", "Concrete", "White"],
    primaryImage: "/spotlight/spotlight_img_02.jpg",
    secondaryImage: "/spotlight/spotlight_img_07.jpg",
  },
  {
    id: "Sequence 03",
    title: "Night Kernel",
    window: "1830 - 0100",
    note: "Dense tonal contrast engineered for low-light clarity.",
    palette: ["Carbon", "Jet", "Silver"],
    primaryImage: "/spotlight/spotlight_img_05.jpg",
    secondaryImage: "/spotlight/spotlight_img_09.jpg",
  },
];

const lookbookDirectives = [
  {
    title: "Asymmetric Layering",
    note: "Stack soft and rigid pieces with one deliberate offset in every fit.",
  },
  {
    title: "Quiet Hardware",
    note: "Keep closures and trims subtle so silhouette carries the signal.",
  },
  {
    title: "Motion First",
    note: "Every look must hold structure while walking, cycling, or commuting.",
  },
];

export default function Lookbook() {
  return (
    <>
      <section className="lookbook-hero">
        <div className="lookbook-hero-media">
          <img src="/spotlight/spotlight_img_06.jpg" alt="Lookbook editorial" />
        </div>
        <div className="lookbook-hero-grid"></div>
        <div className="lookbook-hero-vignette"></div>

        <div className="container">
          <div className="lookbook-hero-tags">
            {heroTags.map((tag, index) => (
              <Copy
                key={tag}
                animateOnScroll={false}
                delay={0.5 + index * 0.08}
                type="flicker"
              >
                <p>{tag}</p>
              </Copy>
            ))}
          </div>

          <div className="lookbook-hero-copy">
            <Copy animateOnScroll={false} delay={0.45}>
              <h1>Lookbook Signal Frames</h1>
            </Copy>
            <Copy animateOnScroll={false} delay={0.68}>
              <p className="bodyCopy">
                A visual journal of complete outfits in real contexts.
                Curated for rhythm, movement, and silhouette contrast.
              </p>
            </Copy>
          </div>

          <div className="lookbook-hero-ticker">
            <div className="lookbook-hero-ticker-track">
              <span>
                Editorial stream / Transit syntax / Neutral runtime / Modular
                posture / Quiet contrast /
              </span>
              <span aria-hidden="true">
                Editorial stream / Transit syntax / Neutral runtime / Modular
                posture / Quiet contrast /
              </span>
            </div>
          </div>
        </div>

        <div className="section-footer light">
          <Copy animateOnScroll={false} delay={0.9} type="flicker">
            <p>[ Editorial Hero ]</p>
          </Copy>
          <Copy animateOnScroll={false} delay={0.9} type="flicker">
            <p>[ No Product Grid ]</p>
          </Copy>
        </div>
      </section>

      <section className="lookbook-showcase">
        <div className="container">
          <div className="lookbook-showcase-header">
            <Copy type="flicker">
              <p>Editorial Showcase</p>
            </Copy>
            <Copy>
              <h3>Scene Built Looks</h3>
            </Copy>
            <Copy>
              <p className="bodyCopy">
                This is not a catalog wall. Each sequence pairs context, pacing,
                and palette to show how garments behave as full systems.
              </p>
            </Copy>
          </div>

          <div className="lookbook-lanes">
            {lookbookSequences.map((sequence, index) => (
              <article
                key={sequence.id}
                className={`lookbook-lane ${index % 2 ? "reversed" : ""}`}
              >
                <div className="lookbook-lane-copy">
                  <Copy type="flicker">
                    <p>{sequence.id}</p>
                  </Copy>
                  <Copy>
                    <h4>{sequence.title}</h4>
                  </Copy>
                  <Copy>
                    <p className="bodyCopy">{sequence.note}</p>
                  </Copy>
                  <div className="lookbook-lane-meta">
                    <p>{sequence.window}</p>
                    <div className="lookbook-lane-palette">
                      {sequence.palette.map((color) => (
                        <span key={color}>{color}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lookbook-lane-visuals">
                  <div className="lookbook-lane-image primary">
                    <img src={sequence.primaryImage} alt={sequence.title} />
                  </div>
                  <div className="lookbook-lane-image secondary">
                    <img src={sequence.secondaryImage} alt={sequence.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="lookbook-directives">
            {lookbookDirectives.map((directive) => (
              <article key={directive.title} className="lookbook-directive">
                <Copy type="flicker">
                  <p>{directive.title}</p>
                </Copy>
                <Copy>
                  <p className="bodyCopy">{directive.note}</p>
                </Copy>
              </article>
            ))}
          </div>

          <div className="lookbook-showcase-cta">
            <Copy type="flicker">
              <p>Need full catalog access?</p>
            </Copy>
            <Link href="/wardrobe">Enter Wardrobe</Link>
          </div>
        </div>
      </section>
    </>
  );
}
