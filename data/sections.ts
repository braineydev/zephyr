export type SectionDefinition = { id: string; title: string; description: string };

export const sections = [
  { id: "main-home", title: "Opening film / hero", description: "Introductory section shell. Approved brand media and final copy are pending." },
  { id: "intro", title: "This Is Zephyr", description: "Section shell; project description requires approved source copy." },
  { id: "features", title: "Features", description: "Section shell; feature details and artwork are pending verification." },
  { id: "arrival", title: "Arrive at Zephyr", description: "Section shell; final content and media are pending." },
  { id: "reception", title: "Main Reception", description: "Section shell; final content and media are pending." },
  { id: "sanctuary", title: "Sunken Sanctuary", description: "Section shell; final content and media are pending." },
  { id: "amenities", title: "Amenities", description: "Section shell; amenity claims and matching illustrations require approval." },
  { id: "interiors", title: "Interiors", description: "Section shell; residence details and imagery are pending approval." },
  { id: "executive-lounge", title: "Executive Lounge", description: "Section shell; floor-level and amenity claims are pending verification." },
  { id: "floating-pool", title: "The Floating Pool", description: "Section shell; final content and media are pending." },
  { id: "rooftop-club", title: "Rooftop Bar & Residence Lounge", description: "Section shell; final content and media are pending." },
  { id: "floor-plans", title: "Floor Plans", description: "Section shell; verified floor-plan source files are not yet available." },
  { id: "why-westlands", title: "Why Westlands", description: "Section shell; destination and travel claims require verification." },
  { id: "location", title: "Location map", description: "Section shell; verified coordinates and approved map provider are pending." },
  { id: "lifestyle", title: "Life Beyond Your Door / Lifestyle in Westlands", description: "Section shell; local destinations and supporting claims require verification." },
  { id: "team", title: "Developer / Team", description: "Section shell; biographies and team details require approved sources." },
  { id: "contact", title: "Contact", description: "Section shell; contact details are observed in references and await owner approval." },
] as const satisfies readonly SectionDefinition[];
