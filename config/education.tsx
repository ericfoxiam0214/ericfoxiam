import { Link } from '@chakra-ui/react'

export type Education = 'University' | 'Test'

export type EducationDetail = {
  name: string
  longName: string
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
  [key in Education]: EducationDetail
} = {
  University: {
    name: 'Stanford University',
    longName: 'Stanford University',
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
  Educations.University,
]
