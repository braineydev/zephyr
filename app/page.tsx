import { SiteChrome } from "@/components/chrome/site-chrome";
import { StorySection } from "@/components/sections/story-section";
import { sections } from "@/data/sections";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteChrome />
      <main id="main-content" className="page-shell">
        <div className="preview-banner">Independent reconstruction preview <span>·</span> temporary stock imagery and working copy</div>
        {sections.map((section, index) => <StorySection key={section.id} index={index} section={section} />)}
        <nav aria-label="Page sections" className="section-index">
          <p>Page sections</p>
          <ol>{sections.map((destination) => <li key={destination.id}><a href={`#${destination.id}`}>{destination.title}</a></li>)}</ol>
        </nav>
      </main>
    </>
  );
}
