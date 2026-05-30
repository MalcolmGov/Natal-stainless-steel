import { IMAGES, NATAL_WIX } from "./natal-media";

export { IMAGES };

export const BRAND = {
  name: "Natal Stainless Steel",
  shortName: "Natal Stainless Steel",
  logo: "/natal-logo-nss.png",
  tagline: "Africa's Largest Stainless Steel Supplier",
  location: "Durban · Gauteng · Cape Town",
  email: "info@natal-stainlesssteel.co.za",
  website: "https://www.natal-stainlesssteel.co.za",
} as const;

export const BRANCHES = [
  {
    id: "durban",
    name: "Durban",
    phone: "+27 31 533 5100",
    phoneHref: "+27315335100",
    isPrimary: true,
  },
  {
    id: "gauteng",
    name: "Gauteng",
    phone: "+27 11 824 0401",
    phoneHref: "+27118240401",
  },
  {
    id: "cape-town",
    name: "Cape Town",
    phone: "+27 82 551 1460",
    phoneHref: "+27825511460",
    address: "12 Kaymor Street, Stikland, Bellville, 7530",
    note: "Western Cape branch",
  },
] as const;

export const ANNOUNCEMENT = {
  label: "New Western Cape branch now open",
  detail: "12 Kaymor Street, Stikland, Bellville, 7530",
  href: "#contact",
} as const;

export const HERO = {
  subheadline:
    "Since 1992, quality and affordability have been our credo. We supply stainless steel piping, fittings, flanges, valves, and structural products — with large stock on hand and delivery across Africa.",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Accreditation", href: "#accreditation" },
  { label: "Contact", href: "#contact" },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    name: "Piping & Tubing",
    slug: "piping",
    image: NATAL_WIX.pipes,
    imageAlt: "Stainless steel piping and round tubing",
    accent: "blue" as const,
  },
  {
    name: "Fittings & Flanges",
    slug: "fittings",
    image: NATAL_WIX.project(1),
    imageAlt: "Butt-weld and BSP stainless fittings",
    accent: "steel" as const,
  },
  {
    name: "Valves & Instrumentation",
    slug: "valves",
    image: NATAL_WIX.project(4),
    imageAlt: "Ball valves and instrument fittings",
    accent: "blue" as const,
  },
  {
    name: "Bar & Plate",
    slug: "bar-plate",
    image: NATAL_WIX.project(5),
    imageAlt: "Hollow bar, round bar, and checker plate",
    accent: "steel" as const,
  },
  {
    name: "Dairy & Hygiene",
    slug: "dairy",
    image: NATAL_WIX.project(6),
    imageAlt: "Dairy fittings and hygienic stainless products",
    accent: "blue" as const,
  },
  {
    name: "Handrail Systems",
    slug: "handrail",
    image: NATAL_WIX.project(7),
    imageAlt: "Stainless steel handrail systems",
    accent: "steel" as const,
  },
] as const;

export const PRODUCT_LIST = [
  "Stainless Steel Piping",
  "Butt-weld Fittings",
  "BSP Fittings",
  "Flanges",
  "Socket Weld Fittings",
  "Ball Valves",
  "Round Tubing Sections",
  "Hollow Bar & Round Bar",
  "Dairy Fittings",
  "Stainless Steel Checker Plate",
  "Hand Rail Systems",
  "Instrument Fittings",
] as const;

export const SERVICE_AREA = {
  headline: "Supplying across South Africa and Africa",
  areas: [
    "KwaZulu-Natal",
    "Gauteng",
    "Western Cape",
    "Eastern Cape",
    "Mpumalanga",
    "Free State",
  ],
  note: "Large stock held at all times. Same-day and scheduled delivery available from our branches.",
} as const;

export const STATS = [
  { value: "1992", label: "Established — over three decades of supply" },
  { value: "Africa", label: "One of the continent's largest stainless suppliers" },
  { value: "3", label: "Branches — Durban, Gauteng & Cape Town" },
  { value: "Stock", label: "Large inventory held at all times" },
] as const;

export const EDITORIAL_SERVICES = [
  {
    id: "supply",
    eyebrow: "Supply & Stock",
    title: "Large stock. Benchmark pricing. Reliable delivery.",
    description:
      "Our strength is keeping substantial inventory on hand — from the smallest order to full project supply for construction and industrial sites. Every customer service member, supervisor, and manager is trained to deliver the best service in the stainless steel industry.",
    bullets: [
      "Extensive in-stock range across all major product lines",
      "Small orders through to project-scale supply",
      "Competitive pricing without compromising quality",
    ],
    image: NATAL_WIX.warehouse,
    imageAlt: "Natal Stainless Steel warehouse and stock",
    align: "left" as const,
  },
  {
    id: "projects",
    eyebrow: "Projects & Construction",
    title: "Stainless steel for builds that demand precision.",
    description:
      "We supply stainless steel for large constructions and industrial projects — coordinated delivery, technical support, and the product range contractors expect from a top-tier supplier.",
    bullets: [
      "Project coordination and bulk supply",
      "Technical product guidance",
      "Nationwide branch network",
    ],
    image: NATAL_WIX.project(8),
    imageAlt: "Industrial construction stainless steel supply",
    align: "right" as const,
  },
  {
    id: "quality",
    eyebrow: "Quality & Accreditation",
    title: "The quality you pay for — documented and assured.",
    description:
      "Quality and affordability are our credo. We ensure that our stainless steel products, prices, and delivery remain benchmarks of our company standards.",
    bullets: [
      "Accredited supply chain",
      "Consistent material grades and specifications",
      "Trusted by industry across Africa",
    ],
    image: NATAL_WIX.beeCertificate,
    imageAlt: "Natal Stainless Steel BEE accreditation certificate",
    align: "left" as const,
  },
] as const;

export const FLAGSHIP_PROJECT = {
  eyebrow: "Warehouse & Logistics",
  title: "Our strength is keeping large stock at all times.",
  description:
    "Strategic inventory across our branches ensures you get the products you need when you need them — whether it's a single fitting or a full project bill of materials.",
  image: NATAL_WIX.fleet,
  imageAlt: "Natal Stainless Steel fleet and logistics",
  stats: [
    { value: "Stock", label: "Large inventory on hand" },
    { value: "3", label: "Branches nationwide" },
    { value: "1992", label: "Years of supply excellence" },
    { value: "Africa", label: "Continental reach" },
  ],
} as const;

export const LATEST_PROJECTS = [
  {
    id: "industrial-plant",
    title: "Industrial Plant Piping Supply",
    location: "Gauteng",
    status: "Project Supply",
    statusType: "update" as const,
    sector: "Industrial",
    partners: [] as string[],
    scope: "Bulk stainless piping and fittings supply for a major industrial processing facility.",
    image: NATAL_WIX.project(0),
    imageAlt: "Industrial stainless steel piping supply",
    width: 1200,
    height: 800,
    imageFocus: "50% 50%",
    imageZoom: 1.05,
    imageFit: "cover" as const,
  },
  {
    id: "commercial-fitout",
    title: "Commercial Handrail & Plate",
    location: "Durban, KZN",
    status: "Delivered",
    statusType: "award" as const,
    sector: "Commercial",
    partners: [] as string[],
    scope: "Handrail systems and checker plate for a commercial development.",
    image: NATAL_WIX.project(2),
    imageAlt: "Commercial stainless handrail and plate",
    width: 1200,
    height: 800,
    imageFocus: "50% 40%",
    imageZoom: 1.08,
    imageFit: "cover" as const,
  },
  {
    id: "cape-expansion",
    title: "Western Cape Branch Launch",
    location: "Bellville, Cape Town",
    status: "Now Open",
    statusType: "award" as const,
    sector: "Expansion",
    partners: [] as string[],
    scope: "New Western Cape branch — 12 Kaymor Street, Stikland, Bellville, serving the Cape region.",
    image: NATAL_WIX.about,
    imageAlt: "Natal Stainless Steel Western Cape branch",
    width: 1200,
    height: 800,
    imageFocus: "50% 50%",
    imageZoom: 1.06,
    imageFit: "cover" as const,
  },
] as const;

export const CERTIFICATIONS = [
  {
    code: "ISO",
    title: "Quality Management",
    description:
      "Committed to consistent quality across sourcing, handling, and delivery of stainless steel products.",
  },
  {
    code: "SANS",
    title: "Standards Aligned",
    description:
      "Products supplied to meet applicable South African and international material specifications.",
  },
  {
    code: "TRACE",
    title: "Traceable Supply",
    description:
      "Documentation and traceability support for project and audit requirements.",
  },
  {
    code: "AFRICA",
    title: "Continental Reach",
    description:
      "Supply capability across South Africa with delivery solutions for broader African projects.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Enquire",
    description: "Contact your nearest branch with specifications, quantities, or drawings.",
  },
  {
    step: "02",
    title: "Quote",
    description: "Receive competitive pricing from our trained sales and technical team.",
  },
  {
    step: "03",
    title: "Supply",
    description: "Pick up or schedule delivery from our large in-stock inventory.",
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing account support for repeat orders and project phases.",
  },
] as const;

export const TESTIMONIALS = {
  disclaimer:
    "Sample client feedback for demonstration — replace with verified testimonials from Natal Stainless Steel customers.",
  items: [
    {
      quote:
        "Natal Stainless Steel keeps the stock we need on the floor. Their team understands project deadlines and delivers without drama.",
      author: "Procurement Manager",
      company: "Industrial client, Gauteng",
    },
    {
      quote:
        "We've used them from small maintenance orders to full piping packages. Consistent quality and fair pricing.",
      author: "Site Supervisor",
      company: "Construction contractor, KZN",
    },
  ],
} as const;

export const FAQ_ITEMS = [
  {
    question: "What products do you supply?",
    answer:
      "We supply a full range of stainless steel products including piping, butt-weld and BSP fittings, flanges, socket weld fittings, ball valves, tubing, hollow and round bar, dairy fittings, checker plate, handrail systems, and instrument fittings.",
  },
  {
    question: "Where are your branches?",
    answer:
      "We have branches in Durban (KwaZulu-Natal), Gauteng, and Cape Town — including our new Western Cape branch at 12 Kaymor Street, Stikland, Bellville, 7530.",
  },
  {
    question: "Do you hold stock?",
    answer:
      "Yes. Keeping large stock at all times is a core strength. Contact your nearest branch to confirm availability for your specification.",
  },
  {
    question: "Can you supply large projects?",
    answer:
      "Absolutely. From the smallest order to supplying stainless steel for large constructions and industrial projects, our team is equipped to support project-scale requirements.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use our contact form or call your nearest branch directly. Our customer service, supervisors, and managers are trained to assist with pricing and delivery.",
  },
] as const;

export const FOOTER_SERVICES = [
  "Stainless Steel Piping",
  "Fittings & Flanges",
  "Valves & Instrumentation",
  "Bar, Plate & Handrail",
  "Dairy Fittings",
  "Project Supply",
] as const;

export const BUSINESS_HOURS = [
  { day: "Mon – Fri", hours: "07:30 – 17:00" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
  { day: "Public holidays", hours: "Closed" },
] as const;

export const PROJECT_TYPES = [
  "Product enquiry",
  "Request a quote",
  "Bulk / project supply",
  "Branch — Durban",
  "Branch — Gauteng",
  "Branch — Cape Town",
  "Other",
] as const;
