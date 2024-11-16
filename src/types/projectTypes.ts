export type ImageType = {
    src: string;
    alt: string;
}

export type WebsiteProjectType = {
  title: string;
  description: string;
  images: ImageType[];
  link: string;
  published: boolean;
};

const websiteProjects: WebsiteProjectType[] = [
  {
    title: 'BasketJoin',
    link: 'localhost:3000',
    published: true,
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
    title: 'WanderWilnius',
    link: 'www.wanderwilnius.lt',
    published: true,
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
    link: 'www.gintejasiene.lt',
    published: true,
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
