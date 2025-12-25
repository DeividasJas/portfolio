import type { StaticImageData } from 'next/image'
import basketballAssets from '@/assets/basketjoin/basketjoin'
import wanderVilniusAssets from '@/assets/wondervilnius/wandervilnius'

export type ImageType = {
  src: string | StaticImageData
  alt: string
}

export type WebsiteProjectType = {
  title: string;
  link: string;
  published: boolean;
  logoSrc: string;
  images: ImageType[];
  description: string;
};

const websiteProjects: WebsiteProjectType[] = [
  {
    title: "BasketJoin",
    link: "https://basket-join.vercel.app",
    published: true,
    logoSrc: basketballAssets.logo,

    images: [
      {
        src: basketballAssets.basketball1,
        alt: "BasketJoin About Page",
      },
      {
        src: basketballAssets.basketball2,
        alt: "BasketJoin Schedule Page",
      },
      {
        src: basketballAssets.basketball3,
        alt: "BasketJoin Login Page",
      },
      {
        src: basketballAssets.basketball4,
        alt: "BasketJoin Player Status Page",
      },
      {
        src: basketballAssets.basketball5,
        alt: "BasketJoin Profile Dashboard",
      },
      {
        src: basketballAssets.basketball6,
        alt: "BasketJoin Player Status Page",
      },
    ],
    description:
      "A basketball registration app built with Next.js and Tailwind CSS, featuring user authentication powered by Kinde. Users can create accounts and register for basketball games. The platform helps track whether enough players have signed up to play on Tuesday evenings or other selected days.",
  },
  {
    title: "WanderVilnius",
    link: "https://www.wandervilnius.lt",
    published: true,
    logoSrc: wanderVilniusAssets.logo,
    images: [
      {
        src: "src/assets/basketball1-about-page.png",
        alt: "WanderVilnius About Page",
      },
      {
        src: "src/assets/basketball2-schedule-page.png",
        alt: "WanderVilnius Schedule Page",
      },
      {
        src: "src/assets/basketball3-signup-page.png",
        alt: "WanderVilnius Signup Page",
      },
      {
        src: "src/assets/basketball4-player-status-page.png",
        alt: "WanderVilnius Tours Page",
      },
    ],
    description:
      "WanderVilnius is your ultimate guide to exploring the heart of Lithuania’s capital. Whether you’re a first-time visitor or a local looking to rediscover hidden gems, our city tours offer a unique and immersive experience. Discover Vilnius’ rich history, vibrant culture, and stunning architecture, from the medieval Old Town to modern-day landmarks. With expert guides and customizable itineraries, WanderVilnius makes it easy to explore the city’s most iconic sites, charming neighborhoods, and local hotspots. Embark on a journey through time and beauty with WanderVilnius.",
  },
];

export default websiteProjects;
