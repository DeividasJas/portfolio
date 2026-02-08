import basketballAssets from '@/assets/basketjoin/basketjoin'
import wanderVilniusAssets from '@/assets/wondervilnius/wandervilnius'
import sweetsecretsAssets from '@/assets/sweetsecrets/sweetsecrets'
import { StaticImageData } from 'next/image'

export type ImageType = {
  src: string | StaticImageData
  alt: string
}

export type WebsiteProjectType = {
  title: string
  slug: string
  link: string
  published: boolean
  logoSrc: string | StaticImageData
  images: ImageType[]
  projectDescription: string
  myWorkDescription?: string
  stack?: string[]
}

export const projects: WebsiteProjectType[] = [
  {
    title: 'BasketJoin',
    slug: 'basketjoin',
    link: 'https://basket-join.vercel.app',
    published: true,
    logoSrc: basketballAssets.logo,
    images: [
      {
        src: basketballAssets.basketball1,
        alt: 'BasketJoin About Page'
      },
      {
        src: basketballAssets.basketball2,
        alt: 'BasketJoin Schedule Page'
      },
      {
        src: basketballAssets.basketball3,
        alt: 'BasketJoin Login Page'
      },
      {
        src: basketballAssets.basketball4,
        alt: 'BasketJoin Player Status Page'
      },
      {
        src: basketballAssets.basketball5,
        alt: 'BasketJoin Profile Dashboard'
      },
      {
        src: basketballAssets.basketball6,
        alt: 'BasketJoin Player Status Page'
      }
    ],
    projectDescription:
      'A basketball registration app built with Next.js and Tailwind CSS, featuring user authentication powered by Kinde. Users can create accounts and register for basketball games. The platform helps track whether enough players have signed up to play on Tuesday evenings or other selected days.',
    myWorkDescription: `I led the development of this basketball registration app, building a full-stack solution with Next.js and Tailwind CSS. The platform features authentication, allowing players to create accounts and register for games. I implemented a dynamic scheduling system that tracks player availability. 
    Admin panel for managing games and players. Ability to add seasons and courts with complex schedules.`,
    stack: ['nextjs', 'tailwind', 'prisma', 'github actions', 'nextauth.js']
  },

  {
    title: 'Sweetsecrets',
    slug: 'sweetsecrets',
    link: 'https://sweetsecrets.app',
    published: true,
    logoSrc: sweetsecretsAssets.logoMonochrome,
    images: [],
    projectDescription:
      'Sweetsecrets is a personalized AI-generated romance story platform. Users can adjust preferences and generate custom romance stories written in second-person present tense following.',
    myWorkDescription:
      'I led the development of this AI-powered romance story platform, building a full-stack solution with Next.js, Supabase and integrating Claude API. The platform features a sophisticated quiz funnel that collects user preferences and generates personalized romance stories in second-person present tense. I implemented the AI story generation pipeline, user authentication, and the entire user experience flow from quiz completion to story reading.',
    stack: ['nextjs', 'tailwindc', 'supabase', 'claude', 'vercel']
  },
  {
    title: 'Fametonic',
    slug: 'fametonic',
    link: 'https://fametonic.com',
    published: true,
    logoSrc: '',
    images: [],
    projectDescription: '',
    myWorkDescription: 'Was resposible for backend development',
    stack: ['nestjs', 'typeorm', 'rabbitmq']
  },
  {
    title: 'WanderVilnius',
    slug: 'wandervilnius',
    link: 'https://www.wandervilnius.lt',
    published: false,
    logoSrc: wanderVilniusAssets.logo,
    images: [],
    projectDescription:
      "WanderVilnius is your ultimate guide to exploring the heart of Lithuania's capital. Whether you're a first-time visitor or a local looking to rediscover hidden gems, our city tours offer a unique and immersive experience. Discover Vilnius' rich history, vibrant culture, and stunning architecture, from the medieval Old Town to modern-day landmarks. With expert guides and customizable itineraries, WanderVilnius makes it easy to explore the city's most iconic sites, charming neighborhoods, and local hotspots. Embark on a journey through time and beauty with WanderVilnius."
  }
]

export default projects
