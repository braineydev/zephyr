import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Carousel } from "@/components/ui/carousel";
import { InteriorsSelector } from "@/components/sections/interiors-selector";
import type { SectionDefinition } from "@/data/sections";

const amenities = [
  "Concierge", "Residence Lounge", "Games Room", "Red Light Therapy", "Blue Light Therapy",
  "Spa", "Cinema", "Kids Play Area", "Gym", "Yoga", "Restaurant", "Book Café",
  "Creative Studio", "Co-work", "Boardroom",
];

const glyphs = [
  ["M5 20h14", "M7 20V9h10v11", "M9 9V6h6v3", "M10 13h4"],
  ["M5 19V8h9a4 4 0 0 1 4 4v7", "M5 14h13", "M8 19v2", "M18 19v2"],
  ["M12 3 21 8v8l-9 5-9-5V8l9-5Z", "m8 9 1 .1", "m15 9 1 .1", "m8 14 1 .1", "m15 14 1 .1"],
  ["M12 3v3", "M5.6 5.6l2.1 2.1", "M3 12h3", "M15.9 7.7 18 5.6", "M9 13h6l-1 8h-4l-1-8Z"],
  ["M12 3v3", "M5.6 5.6l2.1 2.1", "M3 12h3", "M18 12h3", "M9 13h6l-1 8h-4l-1-8Z"],
  ["M12 3C9 8 6 11 6 15a6 6 0 0 0 12 0c0-4-3-7-6-12Z", "M9 16a3 3 0 0 0 3 3"],
  ["M4 6h16v12H4z", "m10 9 5 3-5 3V9Z", "M8 21h8"],
  ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"],
  ["M3 10h3l2-5 4 14 4-14 2 5h3", "M3 14h18"],
  ["M12 12V5", "M12 9 7 5", "M12 9l5-4", "M12 12l-5 8", "M12 12l5 8", "M7 20h10"],
  ["M12 3v18", "M3 12h18", "M7 7l10 10", "M17 7 7 17", "M8 3v4", "M16 17v4"],
  ["M5 8h14", "M7 8V5h10v3", "M6 8l1 13h10l1-13", "M9 12h6", "M9 16h6"],
  ["M4 20 15 5l4 4L8 20H4Z", "m14 6 4 4", "M4 20h16"],
  ["M3 4h18v13H3z", "M8 21h8", "M12 17v4", "M8 9h8", "M8 12h5"],
  ["M3 7h18", "M5 7v12h14V7", "M8 4v6", "M16 4v6", "M8 13h8", "M8 16h8"],
];

function Icon({ index }: { index: number }) {
  return (
    <svg aria-hidden="true" className="amenity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      {glyphs[index].map((path, pathIndex) => <path d={path} key={`${index}-${pathIndex}`} />)}
    </svg>
  );
}

function Scene({ src, alt, position = "50% 50%", className = "" }: { src: string; alt: string; position?: string; className?: string }) {
  return (
    <figure className={`scene ${className}`} style={{ "--scene-position": position } as CSSProperties}>
      <Image alt={alt} className="scene-image" fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 90vw, 1200px" src={src} />
      <figcaption>Temporary Pexels image · illustrative only · not Zephyr property photography</figcaption>
    </figure>
  );
}

function DraftNote({ children = "Working preview copy · project facts and publication text await owner approval" }: { children?: string }) {
  return <p className="draft-note">{children}</p>;
}

function Intro({ title, eyebrow, children, headingId }: { title: string; eyebrow: string; children: ReactNode; headingId: string }) {
  return <div className="section-copy"><p className="eyebrow">{eyebrow}</p><h2 id={headingId}>{title}</h2><p className="section-lede">{children}</p><DraftNote /></div>;
}

export function StorySection({ section, index }: { section: SectionDefinition; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  if (section.id === "main-home") {
    return (
      <section aria-labelledby="main-home-heading" className="story-section story-section--hero" id={section.id}>
        <Scene alt="Starry sky above a mountain lake with reflections" className="hero-scene" position="50% 66%" src="/media/night-mountain-lake.jpg" />
        <div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow">{number} / 17 · independent visual reconstruction</p><h1 id="main-home-heading">Choose<br />extraordinary</h1><p className="hero-caption">A visual direction preview for Zephyr Westlands</p><DraftNote>Temporary stock image · pending official Zephyr media</DraftNote><a className="text-link" href="#intro">Discover the preview <span aria-hidden="true">↓</span></a></div>
      </section>
    );
  }

  if (section.id === "intro") return (
    <section aria-labelledby="intro-heading" className="story-section chapter chapter--intro" id={section.id}>
      <Intro headingId="intro-heading" eyebrow={`${number} / 17 · project introduction`} title="This Is Zephyr">An editorial introduction layout is in place. Final residence descriptions, facts, and customer-facing claims await approved project copy.</Intro>
      <Scene alt="Temporary example of a modern living room interior" className="intro-scene" src="/media/living-room.jpg" />
      <div className="preview-actions"><a className="button button--light" href="#floor-plans">View plans <span>↗</span></a><a className="button button--outline" href="#contact">Enquire <span>↗</span></a></div>
    </section>
  );

  if (section.id === "features") return (
    <section aria-labelledby="features-heading" className="story-section chapter chapter--features" id={section.id}>
      <Intro headingId="features-heading" eyebrow={`${number} / 17 · feature overview`} title="Designed around living">Feature groups are shown as a visual framework. Specific specifications and claims remain unverified.</Intro>
      <Scene alt="Temporary stock photograph of a clear quartz crystal" className="feature-scene" src="/media/quartz-crystal.jpg" />
      <div className="feature-grid">{["The Residences", "The Building", "Security", "Parking"].map((item, i) => <article className="feature-item" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>Reference category · details pending approval</p></article>)}</div>
    </section>
  );

  if (section.id === "amenities") return (
    <section aria-labelledby="amenities-heading" className="story-section chapter chapter--amenities" id={section.id}>
      <Intro headingId="amenities-heading" eyebrow={`${number} / 17 · amenities`} title="Amenities for every rhythm">These labels are transcribed from reference material and remain subject to owner confirmation. Matching custom line illustrations are temporary.</Intro>
      <div className="amenity-grid">{amenities.map((name, i) => <div className="amenity" key={name}><Icon index={i} /><span>{name}</span></div>)}</div>
      <DraftNote>Observed amenity labels · confirm names and availability before publication</DraftNote>
      <div className="amenity-gallery"><p className="eyebrow">A Day at the Spa · preview</p><Carousel label="Illustrative spa and wellness gallery" slides={[
        { src: "/media/spa-lounge.jpg", alt: "Temporary photograph of a calm spa relaxation room", caption: "Spa room · illustrative stock image" },
        { src: "/media/reflective-indoor-pool.jpg", alt: "Temporary photograph of a reflective indoor pool", caption: "Water setting · illustrative stock image" },
        { src: "/media/lounge-interior.jpg", alt: "Temporary photograph of a quiet lounge interior", caption: "Lounge setting · illustrative stock image" },
      ]} /></div>
    </section>
  );

  if (section.id === "interiors") return (
    <section aria-labelledby="interiors-heading" className="story-section chapter chapter--interiors" id={section.id}>
      <Intro headingId="interiors-heading" eyebrow={`${number} / 17 · interiors`} title="Interiors">A residence-interior chapter with sample photography. The selector is decorative and does not imply approved unit types.</Intro>
      <InteriorsSelector />
      <Scene alt="Temporary example of a modern luxury living room" className="interior-scene" src="/media/living-room.jpg" />
    </section>
  );

  if (section.id === "floor-plans") return (
    <section aria-labelledby="floor-plans-heading" className="story-section chapter chapter--plans" id={section.id}>
      <Intro headingId="floor-plans-heading" eyebrow={`${number} / 17 · floor plan chapter`} title="Floor plans">The original plans have not been supplied. This generic reference image reserves the composition only; it is not a Zephyr plan.</Intro>
      <div aria-label="Floor plan views; unavailable until verified plans are supplied" className="plan-controls">
        <div aria-label="Floor plan categories" className="visual-tabs" role="group">
          <button disabled type="button">1 Bedroom · plan unavailable</button>
          <button disabled type="button">2 Bedrooms · plan unavailable</button>
          <button disabled type="button">Building floors · plan unavailable</button>
        </div>
        <label className="floor-select-label">Building floors<select disabled><option>Standard floor · awaiting approved plan</option></select></label>
        <p className="control-note">Plan controls are unavailable until validated Zephyr drawings and approved floor labels are supplied.</p>
      </div>
      <Scene alt="Generic architectural floor-plan drawing on a desk; not a Zephyr residence plan" className="plan-scene" src="/media/generic-floor-plan-reference.jpg" />
      <p className="image-warning">SAMPLE IMAGE ONLY · NOT A ZEPHYR FLOOR PLAN</p>
    </section>
  );

  if (section.id === "location") return (
    <section aria-labelledby="location-heading" className="story-section chapter chapter--location" id={section.id}>
      <Intro headingId="location-heading" eyebrow={`${number} / 17 · location`} title="Location">A map-shaped composition is reserved without markers or coordinates. Verified location data and a map source are not available yet.</Intro>
      <div aria-label="Illustrative map frame with no geographic data" className="map-placeholder" role="img"><div className="map-grid" /><span className="map-label">LOCATION VISUAL PLACEHOLDER</span><span className="map-no-data">No verified coordinates or map tiles</span></div>
      <p className="map-fallback">Accessible text fallback: Zephyr’s location and nearby destinations await verification.</p>
    </section>
  );

  if (section.id === "why-westlands") return (
    <section aria-labelledby="why-westlands-heading" className="story-section chapter chapter--why" id={section.id}>
      <Intro headingId="why-westlands-heading" eyebrow={`${number} / 17 · neighbourhood`} title="Why Westlands">Category labels follow the supplied reference notes. Distances, destinations, and journey times are omitted until independently verified and approved.</Intro>
      <div className="category-grid">{["Education", "Socialize / Escape", "Work", "Connectivity", "Health"].map((label, i) => <article className="category" key={label}><span>0{i + 1}</span><h3>{label}</h3><p>Supporting details pending verification.</p></article>)}</div>
    </section>
  );

  const visuals: Record<string, { eyebrow: string; title: string; text: string; image: string; alt: string; className?: string }> = {
    arrival: { eyebrow: "arrival / exterior", title: "Arrive at Zephyr", text: "A first-arrival visual chapter. Property-specific architecture and approved descriptive copy are pending.", image: "/media/high-rise-facade.jpg", alt: "Temporary photograph of a contemporary high-rise exterior", className: "chapter--arrival" },
    reception: { eyebrow: "welcome / reception", title: "Main Reception", text: "A reception scene establishes the editorial scale. Sample hospitality imagery stands in for the missing project render.", image: "/media/hotel-reception.jpg", alt: "Temporary photograph of a modern hotel reception lobby", className: "chapter--reception" },
    sanctuary: { eyebrow: "landscape / retreat", title: "Sunken Sanctuary", text: "A water-focused composition suggests the calm of a garden retreat without asserting any property feature.", image: "/media/reflective-indoor-pool.jpg", alt: "Temporary photograph of a reflective indoor pool", className: "chapter--sanctuary" },
    "executive-lounge": { eyebrow: "residence / lounge", title: "Executive Lounge", text: "A separate lounge chapter is laid out with generic sample photography. Floor level and amenity details await verification.", image: "/media/lounge-interior.jpg", alt: "Temporary photograph of a modern lounge interior", className: "chapter--lounge" },
    "floating-pool": { eyebrow: "water / horizon", title: "The Floating Pool", text: "A dedicated pool chapter uses temporary stock photography. It does not represent the Zephyr building.", image: "/media/rooftop-infinity-pool.jpg", alt: "Temporary photograph of a rooftop infinity pool and city skyline", className: "chapter--pool" },
    "rooftop-club": { eyebrow: "sky / social spaces", title: "Rooftop Bar & Residence Lounge", text: "A distinct rooftop-club composition is reserved. Sample imagery and working copy will be replaced when approved material arrives.", image: "/media/hotel-reception.jpg", alt: "Temporary photograph of a modern hotel lobby used as a lounge composition sample", className: "chapter--rooftop" },
    lifestyle: { eyebrow: "neighbourhood / daily life", title: "Life Beyond Your Door", text: "A lifestyle collage layout is ready for approved neighbourhood photography. No travel times or destination claims are shown.", image: "/media/high-rise-facade.jpg", alt: "Temporary city architecture photograph for layout only", className: "chapter--lifestyle" },
    team: { eyebrow: "developer / project team", title: "Developer & Team", text: "Developer and team credits await approved identity assets and source information. No individual biographies are included.", image: "/media/hotel-reception.jpg", alt: "Temporary architectural interior image used as a composition sample", className: "chapter--team" },
    contact: { eyebrow: "contact / next steps", title: "Start a conversation", text: "GY Group publishes general sales contact details and an official enquiry page. This reconstruction links to those channels and does not collect or transmit lead data.", image: "/media/quartz-crystal.jpg", alt: "Temporary crystal photograph used as visual placeholder", className: "chapter--contact" },
  };

  if (section.id === "team") return (
    <section aria-labelledby="team-heading" className="story-section chapter chapter--team" id="team">
      <Intro headingId="team-heading" eyebrow={`${number} / 17 · developer / project team`} title="Developer & Team">Developer credits await approved identity artwork and source information. No individual biographies are included.</Intro>
      <div className="developer-mark"><span>GY GROUP</span><small>Reference identity placeholder · approved brand artwork pending</small></div>
    </section>
  );
  if (visuals[section.id]) {
    const visual = visuals[section.id];
    return (
      <section aria-labelledby={`${section.id}-heading`} className={`story-section chapter ${visual.className ?? ""}`} id={section.id}>
        <Intro headingId={`${section.id}-heading`} eyebrow={`${number} / 17 · ${visual.eyebrow}`} title={visual.title}>{visual.text}</Intro>
        {section.id === "contact" ? <div className="preview-actions" aria-label="Official GY Group contact options">
          <a className="button button--light" href="tel:+254768699999">Call GY Group Sales <span>0768 699 999</span></a>
          <a className="button button--outline" href="mailto:info@gygroup.ke">Email GY Group Sales <span>↗</span></a>
          <Link className="button button--outline" href="https://gygroup.ke/contact" rel="noopener noreferrer" target="_blank">Open official enquiry page <span>↗</span></Link>
        </div> : section.id === "reception" ? <Carousel label="Illustrative reception and interior gallery" slides={[
          { src: "/media/hotel-reception.jpg", alt: visual.alt, caption: "Reception setting · illustrative stock image" },
          { src: "/media/lounge-interior.jpg", alt: "Temporary photograph of a modern lounge", caption: "Lounge setting · illustrative stock image" },
          { src: "/media/living-room.jpg", alt: "Temporary photograph of a residential living room", caption: "Living room · illustrative stock image" },
        ]} /> : <Scene alt={visual.alt} className="chapter-scene" src={visual.image} />}
      </section>
    );
  }

  return <section aria-labelledby={`${section.id}-heading`} className="story-section chapter" id={section.id}><div className="section-copy"><p className="eyebrow">{number} / 17</p><h2 id={`${section.id}-heading`}>{section.title}</h2><DraftNote /></div></section>;
}




