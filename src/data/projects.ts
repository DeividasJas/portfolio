import basketballAssets from '@/assets/basketjoin/basketjoin'
import wanderVilniusAssets from '@/assets/wondervilnius/wandervilnius'
import sweetsecretsAssets from '@/assets/sweetsecrets/sweetsecrets'
import { StaticImageData } from 'next/image'

export type ImageType = {
  src: StaticImageData
  alt: string
}

export type WebsiteProjectType = {
  title: string
  slug: string
  link: string
  published: boolean
  logo: StaticImageData
  images: ImageType[]
  projectDescription: string
  myWorkDescription?: string
  stack?: string[]
  highlightKeywords?: string[]
}

export const projects: WebsiteProjectType[] = [
  {
    title: 'BasketJoin',
    slug: 'basketjoin',
    link: 'https://basket-join.vercel.app',
    published: true,
    logo: basketballAssets.logo,
    images: [
      { src: basketballAssets.basketball1, alt: 'BasketJoin Schedule Page' },
      { src: basketballAssets.basketball2, alt: 'BasketJoin Profile Page' },
      { src: basketballAssets.basketball3, alt: 'BasketJoin Admin League Creation' },
      { src: basketballAssets.basketball4, alt: 'BasketJoin Payments Dashboard' },
      { src: basketballAssets.basketball5, alt: 'BasketJoin League Details' },
      { src: basketballAssets.basketball6, alt: 'BasketJoin Admin Panel' },
      { src: basketballAssets.basketball7, alt: 'BasketJoin Game Roster' }
    ],
    projectDescription:
      'A platform that takes the headache out of organizing pickup basketball. Players sign up, pick their days, and the app tracks whether enough people are in for Tuesday night or any other session. No more group chat chaos — just open the app, register, and show up.',
    myWorkDescription:
      'Sole developer on the full stack. Built the auth system, a scheduling engine that tracks player availability across multiple courts and seasons, and an admin panel where organizers manage games, rosters, and payments. Automated deployments with GitHub Actions.',
    stack: ['nextjs', 'tailwind', 'prisma', 'github actions', 'nextauth.js'],
    highlightKeywords: ['pickup basketball', 'Sole developer', 'scheduling engine', 'admin panel']
  },

  {
    title: 'Sweetsecrets',
    slug: 'sweetsecrets',
    link: 'https://sweetsecrets.app',
    published: true,
    logo: sweetsecretsAssets.logoMonochrome,
    images: [
      { src: sweetsecretsAssets.sweetsecrets1, alt: 'Sweetsecrets Landing Page' },
      { src: sweetsecretsAssets.sweetsecrets6, alt: 'Sweetsecrets Subscription Pricing' },
      { src: sweetsecretsAssets.sweetsecrets2, alt: 'Sweetsecrets Story Library' },
      // { src: sweetsecretsAssets.sweetsecrets3, alt: 'Sweetsecrets Story Reader' },
      { src: sweetsecretsAssets.sweetsecrets4, alt: 'Sweetsecrets Interactive Story Choices' },
      { src: sweetsecretsAssets.sweetsecrets5, alt: 'Sweetsecrets Profile and Story Settings' },
      { src: sweetsecretsAssets.sweetsecrets7, alt: 'Sweetsecrets Coin Store' }
    ],
    projectDescription:
      'An interactive romance story platform where AI writes personalized stories one chapter at a time. You start with a quiz that shapes the characters and plot, then read a section and tell the AI what to change — tweak a character, shift the plot, or keep going as-is. Readers collect coins to unlock premium stories and can like and share their favorites with the community.',
    myWorkDescription:
      'Built at Netzet. Designed and built the branching onboarding funnels where each answer changes the next question, wired up AI story generation through Claude, and built a coin store that drives premium upsells. Added a likes/views system to surface popular stories and integrated a CRM for lifecycle messaging. Set up the full CI/CD pipeline — code pushes trigger database migrations and deploy automatically.',
    stack: ['nextjs', 'tailwind', 'supabase', 'claude', 'vercel', 'github actions'],
    highlightKeywords: ['interactive romance story', 'personalized stories', 'collect coins', 'Built at Netzet', 'branching onboarding funnels', 'AI story generation', 'coin store', 'CI/CD pipeline']
  },
  {
    title: 'Fametonic',
    slug: 'fametonic',
    link: 'https://fametonic.com',
    published: true,
    logo: null as unknown as StaticImageData,
    images: [],
    projectDescription:
      "A social media growth platform used by 45,000+ creators. Users get AI-powered deep analysis of any social media account — what's working, what's not, and how to grow faster. The platform also includes image generation tools and an AI chatbot for on-demand advice. Account reports run in the background so users never wait around staring at a loading screen.",
    myWorkDescription:
      'Built at Netzet. Owned the entire backend for a platform serving 45K+ users. Built the account analysis system that runs deep profile breakdowns using third-party scrapers, with BullMQ handling long-running jobs so the app stays responsive. Also built the image generation pipeline and AI chatbot. Designed the database layer with TypeORM on PostgreSQL.',
    stack: ['nestjs', 'typeorm', 'rabbitmq', 'bullmq', 'postgresql'],
    highlightKeywords: ['45,000+ creators', 'AI-powered deep analysis', 'image generation', 'AI chatbot', '45K+ users', 'BullMQ', 'Built at Netzet']
  },
  {
    title: 'WanderVilnius',
    slug: 'wandervilnius',
    link: 'https://www.wandervilnius.lt',
    published: false,
    logo: wanderVilniusAssets.logo,
    images: [],
    projectDescription:
      "WanderVilnius is your ultimate guide to exploring the heart of Lithuania's capital. Whether you're a first-time visitor or a local looking to rediscover hidden gems, our city tours offer a unique and immersive experience. Discover Vilnius' rich history, vibrant culture, and stunning architecture, from the medieval Old Town to modern-day landmarks. With expert guides and customizable itineraries, WanderVilnius makes it easy to explore the city's most iconic sites, charming neighborhoods, and local hotspots. Embark on a journey through time and beauty with WanderVilnius."
  }
]
