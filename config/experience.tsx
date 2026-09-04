import { Link } from '@chakra-ui/react'

export type Company = 'Pastel' | 'Bitdeal' | 'KiraNetwork' | 'AbsoluteWeb'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Pastel: {
    name: 'PASTEL_NETWORK abc',
    longName: 'PASTEL_NETWORK Ziegelbrücke',
    // subDetail: 'Software company in Glarus Nord',
    url: 'https://pastel.network/',
    position: 'Sr. Full stack Web3 Software Engineer',
    duration: 'Jan 2022 - Oct 2025',
    logo: {
      light: '/worked_at_logos/PASTEL_NETWORK/PASTEL_NETWORK_light.png',
      dark: '/worked_at_logos/PASTEL_NETWORK/PASTEL_NETWORK_dark.png',
    },
    roles: [
      <>
        Architected and designed the NFT bridge between Ethereum, Solana and Pastel Network referencing Wormhole and Cosmos IBC protocol
      </>,
      <>
        Built NFT picks application with React, Node.js and integrated payment service with Stripe
      </>,
    ],
  },
  Bitdeal: {
    name: 'BITDEAL',
    longName: 'BITDEAL United States',
    // subDetail: 'Consultant in Lugano',
    url: 'https://www.bitdeal.net/',
    position: 'Sr. Full-Stack Web3 Engineer',
    duration: 'May 2020 - Dec 2021',
    logo: {
      light: '/worked_at_logos/BITDEAL/BITDEAL_dark.jpg',
      dark: '/worked_at_logos/BITDEAL/BITDEAL_light.png',
    },
    roles: [
      <>
        Integrated smart contracts to frontend applications using React, Web3.js and Ethers.js
      </>,
      <>
        Architected, designed and developed smart contracts using Cosmwasm and Rust
      </>,
      <>
        Built frontend applications for Defi app using React and Redux
      </>,
      <>
        Worked on sports project with Flow/Cadence and React to build a fast, decentralized and developer-friendly blockchain application
      </>,
    ],
  },
  KiraNetwork: {
    name: 'KIRA_NETWORK',
    longName: 'KIRA_NETWORK',
    // subDetail: 'The Consulting Marketplace',
    url: 'https://kira.network/',
    position: 'Frontend Engineer',
    duration: 'Apr 2019 - May 2020',
    logo: {
      light: '/worked_at_logos/KIRA_NETWORK/KIRA_NETWORK_dark.png',
      dark: '/worked_at_logos/KIRA_NETWORK/KIRA_NETWORK_light.jpg',
    },
    roles: [
      <>
        Architected, designed and developed minimum viable product for application-specific blockchain using Golang, Starport and Cosmos
      </>,
      <>
        Integrated Inter-Blockchain Communication Protocol to SDK-based application with Golang.
      </>,
      <>
        Worked on the frontend application using Vue3 and Quasar framework.
      </>,
    ],
  },
  AbsoluteWeb: {
    name: 'ABSOLUTE_WEB',
    longName: 'ABSOLUTE_WEB',
    // subDetail: 'The Consulting Marketplace',
    url: 'https://absoluteweb.com/',
    position: 'Frontend Engineer',
    duration: 'Nov 2016 - Apr 2019',
    logo: {
      light: '/worked_at_logos/ABSOLUTE_WEB/ABSOLUTE_WEB_light.png',
      dark: '/worked_at_logos/ABSOLUTE_WEB/ABSOLUTE_WEB_dark.png',
    },
    roles: [
      <>
        Designed, developed and deployed full-stack web applications according to business objectives and needs of various clients with React, Express.js, MySQL, PostgreSQL and MongoDB.
      </>,
      <>
        Implemented SEO in React application for e-commerce site with a catalog of 20000+ products leading to an increase in page views per session of 23% with SSR in Next.js and Gatsby.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Pastel,
  Experiences.Bitdeal,
  Experiences.KiraNetwork,
  Experiences.AbsoluteWeb,
]
