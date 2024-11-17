import basketballAssets from '@/assets/basketjoin/basketjoin';
export type ImageType = {
  src: string;
  alt: string;
};

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
    title: 'BasketJoin',
    link: 'https://www.localhost:3000',
    published: true,
    logoSrc: basketballAssets.logo,

    images: [
      {
        src: basketballAssets.basketball1,
        alt: 'BasketJoin About Page',
      },
      {
        src: basketballAssets.basketball2,
        alt: 'BasketJoin Schedule Page',
      },
      {
        src: basketballAssets.basketball3,
        alt: 'BasketJoin Signup Page',
      },
      {
        src: basketballAssets.basketball4,
        alt: 'BasketJoin Player Status Page',
      },
    ],
    description:
      'A basketball registration page built with Next.js and Tailwind CSS, featuring user authentication powered by Kinde. Users can create accounts and register for basketball games. The platform helps track whether enough players have signed up to play on Tuesday evenings or other selected days.',
  },
  {
    title: 'WanderWilnius',
    link: 'https://www.wanderwilnius.lt',
    published: true,
    logoSrc: '',
    images: [
      {
        src: 'src/assets/basketball1-about-page.png',
        alt: 'BasketJoin About Page',
      },
      {
        src: 'src/assets/basketball2-schedule-page.png',
        alt: 'BasketJoin Schedule Page',
      },
      {
        src: 'src/assets/basketball3-signup-page.png',
        alt: 'BasketJoin Signup Page',
      },
      {
        src: 'src/assets/basketball4-player-status-page.png',
        alt: 'BasketJoin Player Status Page',
      },
    ],
    description:
      'A basketball registration page built with Next.js and Tailwind CSS, featuring user authentication powered by Kinde. Users can create accounts and register for basketball games. The platform helps track whether enough players have signed up to play on Tuesday evenings or other selected days.',
  },
  {
    title: 'GinteJasiene',
    link: 'https://www.gintejasiene.lt',
    published: true,
    logoSrc: '',
    images: [
      {
        src: 'src/assets/basketball1-about-page.png',
        alt: 'BasketJoin About Page',
      },
      {
        src: 'src/assets/basketball2-schedule-page.png',
        alt: 'BasketJoin Schedule Page',
      },
      {
        src: 'src/assets/basketball3-signup-page.png',
        alt: 'BasketJoin Signup Page',
      },
      {
        src: 'src/assets/basketball4-player-status-page.png',
        alt: 'BasketJoin Player Status Page',
      },
    ],
    description:
      'A static landing page for a psychologist, designed to provide information about their services, approach, and contact details. The page offers a clean, professional layout to ensure visitors feel welcomed and informed.',
  },
];

export default websiteProjects;
