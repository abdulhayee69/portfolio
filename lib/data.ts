export const profile = {
  name: "Abdul Hayee Baig",
  firstName: "Abdul Hayee",
  lastName: "Baig",
  role: "Motion Graphics Designer · 2D Animator",
  tagline:
    "8+ years crafting cinematic motion — from brand identity to title sequences, animation that moves people.",
  email: "abdulhayeebaig559@gmail.com",
  photo: "/work/profile.webp",
};

export const videoPath = (slug: string) => `/work/${slug}.mp4`;
export const posterPath = (slug: string) => `/work/${slug}.webp`;

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "voov-ai-promo",
    title: "VooV Ai Promo",
    client: "VooV AI",
    year: "2025",
    category: "Motion Graphics",
    description: "Promo for VooV AI, a SaaS AI website builder.",
    featured: true,
  },
  {
    slug: "weather-walay-video-opener",
    title: "Weather Walay Video Opener",
    client: "Weather Walay",
    year: "2025",
    category: "Title Sequence",
    description: "A video opener for Weather Walay.",
    featured: true,
  },
  {
    slug: "focusly-app-promo",
    title: "Focusly App Promo",
    client: "Focusly",
    year: "2024",
    category: "Brand Identity",
    description:
      "Focusly wanted a promo for their file management app, with cool flowy motion and a clean aesthetic with vibrant colors.",
    featured: true,
  },
  {
    slug: "ventus-ai-teaser",
    title: "Ventus AI Teaser",
    client: "Ventus AI",
    year: "2026",
    category: "Motion Graphics",
    description:
      "A teaser for the medicare company for them to showcase in the expo!",
    featured: true,
  },
  {
    slug: "parakeet-ai-proof-of-concept",
    title: "Parakeet AI Proof of Concept",
    client: "Parakeet AI",
    year: "2026",
    category: "Motion Graphics",
    description:
      "Proof of concept made to pitch to the client that this kind of animation can surely elevate their brand image!",
    featured: false,
  },
  {
    slug: "2d-eye-element",
    title: "2D Eye Element",
    client: "Personal Project",
    year: "2025",
    category: "2D Animation",
    description: "A proof of concept of making something look 3D using only 2D.",
    featured: false,
  },
  {
    slug: "3d-using-2d-proof-of-concept",
    title: "3D Using 2D Proof of Concept",
    client: "Personal Projects",
    year: "2025",
    category: "2D Animation",
    description: "This scene simulates 3D using simple shapes and lighting.",
    featured: false,
  },
  {
    slug: "showreel-2025",
    title: "Showreel 2025",
    client: "",
    year: "2025",
    category: "Motion Graphics",
    description: "My showreel for the year 2025.",
    featured: false,
  },
  {
    slug: "ai-orb-transition",
    title: "AI Orb Transition",
    client: "Personal Project",
    year: "2025",
    category: "2D Animation",
    description:
      "A proof of concept for a transition I made to test out new tools in After Effects.",
    featured: false,
  },
  {
    slug: "neenja-ai-promo",
    title: "Neenja AI Promo",
    client: "Neenja AI",
    year: "2026",
    category: "Motion Graphics",
    description: "Neenja AI UI animation for their website hero section.",
    featured: false,
  },
  {
    slug: "cactus-ai-promo",
    title: "Cactus AI Promo",
    client: "Cactus AI",
    year: "2025",
    category: "Motion Graphics",
    description: "A promo for a business managing app called Cactus AI.",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const experience = [
  {
    company: "Benny Productions",
    location: "Remote",
    role: "Mid-Senior Motion Designer",
    period: "June 2023 – 2025",
  },
  {
    company: "Riot Games",
    location: "Remote",
    role: "Junior Motion Designer",
    period: "Apr 2022 – 2023",
  },
  {
    company: "Clumsy Studios",
    location: "Pakistan",
    role: "Intern Motion Designer",
    period: "Mar 2020 – 2022",
  },
  {
    company: "Upwork",
    location: "Remote",
    role: "Freelance Motion Designer",
    period: "Jan 2017 – Present",
  },
];

export const skills = [
  "Motion Graphics Design",
  "2D Animation",
  "After Effects",
  "Cinema 4D",
  "Title Sequences",
  "Brand Identity",
  "Illustration",
  "Sound Design",
];

export const awards = [
  {
    title: "2nd Position – Short Film Competition",
    event: "Rising Pakistan",
    year: "2023",
  },
  {
    title: "3rd Position – Short Film Competition",
    event: "Rising Pakistan",
    year: "2022",
  },
  {
    title: "3rd Position",
    event: "NASFF",
    year: "2022",
  },
];

export const languages = [
  { name: "Urdu", level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 95 },
];

export const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: `${projects.length}`, label: "Projects Delivered" },
  { value: `${awards.length}`, label: "Awards Won" },
];
