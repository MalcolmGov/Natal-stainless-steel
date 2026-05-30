/**
 * Image assets from https://www.natal-stainlesssteel.co.za/ (Wix CDN).
 * Run `npm run images:fetch` to mirror these into public/images for offline use.
 */
const WIX = "https://static.wixstatic.com/media";

export function wixImage(
  id: string,
  ext: "jpg" | "jpeg" | "png" | "gif" | "webp" = "jpg",
  width = 1920
) {
  const file = `${id}~mv2.${ext}`;
  const base = `${WIX}/${file}`;
  if (ext === "gif") return base;
  const height = Math.round(width * 0.625);
  return `${base}/v1/fill/w_${width},h_${height},al_c,q_90,usm_0.66_1.00_0.01,enc_auto/${file}`;
}

/** Project gallery — https://www.natal-stainlesssteel.co.za/projects */
export const PROJECT_GALLERY = [
  "026a55_5dcf31c4223e4667941eec65d1f5ec82",
  "026a55_0bba6927ff544e79b548f03cc0be553d",
  "026a55_d13d211fe325433399006b10ed621183",
  "026a55_41faff236f174edabce3b8e40c820e38",
  "026a55_236604b2b93f4df88c4781f403efee6f",
  "026a55_95ad74199e2d45cf834822966d005c1b",
  "026a55_8d2c44cffc7b42cda78c727491b703d3",
  "026a55_9a860d0691f9405291b4c456f37b95c2",
  "026a55_a01c0eaab82b4e67920609d921deb855",
  "026a55_1e7fa9c82c4d4120ab611533b1eb6925",
  "026a55_184dbb472a074ea8981bbc31ddd83da9",
  "026a55_32e38947b4564b9788f079830c2ad12b",
  "026a55_f607be9f88aa4e52b80c75425f37e7d1",
  "026a55_a4b54345d7c64fc79f807583faa14978",
  "026a55_04457b5808da47dcbb33e8ae05ac7834",
  "026a55_78f02b480256480ab5f2485487efd1a6",
  "026a55_f2a6ada7e43e4da68153eb22fd3b5597",
  "026a55_3aac5afaf8484424b51d5e3a359c711d",
  "026a55_c2199bd9012044b6a6f8b50a11c2801d",
  "026a55_9a82cdd4a5f74732b617728aef52fd13",
  "833a68_f40c1b2dd5d34849b21db26cb970a1ec",
  "833a68_c5bb6d548cf94363b400e0c213a14e94",
  "833a68_fabe207a2aec46e6aa17f22897290530",
  "833a68_abed8216d06f489f8cf55f4c143ab1dc",
] as const;

export const NATAL_WIX = {
  logo: `${WIX}/833a68_438298f1dbd849ab936149d78652e99f~mv2.gif`,
  /** Homepage hero / banner */
  hero: wixImage("833a68_c5bb6d548cf94363b400e0c213a14e94"),
  /** Product range (pipes) */
  pipes: wixImage("026a55_5dcf31c4223e4667941eec65d1f5ec82"),
  /** Warehouse / stock */
  warehouse: wixImage("833a68_f40c1b2dd5d34849b21db26cb970a1ec"),
  /** Fleet / logistics */
  fleet: wixImage("833a68_abed8216d06f489f8cf55f4c143ab1dc"),
  /** About / team workspace */
  about: wixImage("833a68_fabe207a2aec46e6aa17f22897290530"),
  /** Accreditation section background */
  accreditation: wixImage("833a68_9b86cab2522540ac971bec865e89a32d"),
  /** BEE certificate — /accreditation */
  beeCertificate: wixImage("833a68_967a67dedcbb41dda8955178906e0d9d", "jpg", 840),
  project: (index: number) =>
    wixImage(PROJECT_GALLERY[index % PROJECT_GALLERY.length]),
} as const;

export const IMAGES = {
  /** Premium dual-hero visual (local asset) */
  heroVisual: "/images/hero-premium.jpg",
  hero: NATAL_WIX.hero,
  warehouse: NATAL_WIX.warehouse,
  fleet: NATAL_WIX.fleet,
  products: NATAL_WIX.pipes,
  projects: NATAL_WIX.project(3),
  accreditation: NATAL_WIX.accreditation,
  cta: NATAL_WIX.about,
} as const;
