import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/@Eric',
  //   icon: FaTwitter,
  // },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/@Eric',
  //   icon: FaInstagram,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/@Eric',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/@Eric',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/@Eric',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/mastercodercat',
    icon: FaGithub,
  },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/@Eric',
  //   icon: FaDev,
  // },
]
