import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

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

export const Educations: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'Stanford University',
    longName: 'Stanford University',
    // subDetail: 'Stanford University',
    url: 'https://www.stanford.edu/',
    position: 'Bachelor of Computer Science',
    duration: 'Sep 2012 - Nov 2016',
    logo: {
      light: '/worked_at_logos/STANFORD/STANFORD_light.png',
      dark: '/worked_at_logos/STANFORD/STANFORD_dark.png',
    },
    roles: [
      <>
        Studied ML(machine learning), AI(artificial intelligence), web development area
      </>,
      <>
        Researched ML-translation engine with corpus database written by Java and Python
      </>,
      <>
        Rebuilt web application for school community platform
      </>,
    ],
  },
}

export const EducationsList = [
  Educations.Deloitte,
]
