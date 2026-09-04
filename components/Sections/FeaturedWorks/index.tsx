import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my projects.
      </Heading>
      <Text variant="description">
        Check out some of the sites
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="smartmint"
            src="/works/smartmint.png"
            description="SmartMint by Pastel is a no-code NFT minting platform where creators can easily create, manage and sell NFTs on their own custom smart contracts while simultaneously leveraging Pastel’s infrastructure for near-duplicate NFT detection (Sense) and permanent NFT data storage (Cascade). SmartMint works for Ethereum. Support for other blockchains like Solana coming soon"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://pastel.network/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="pastel network"
            description="Pastel Network is an NFT Blockchain startup that has developed the world’s first fully dedicated and purpose-built platform for the creation, validation, and trading of provably rare digital assets (or NFTs). We allow anyone anywhere to store, buy, sell, and trade NFTs globally without the high transaction fees associated with other platforms. We also open our advanced infrastructure to the world through a number of tools and protocols that are easy to use and build upon."
            src="/works/pastel.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://pastel.network/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="klimadao finance"
            description="
              Solvrr Creative Studio is a digital marketing agency. 
              We help our clients get found, get customers, and make more money on the web."
            src="/works/klimadao_finance2.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://klimadao.finance/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="kira"
            description="The first network that hosts, powers and secures DeFi applications with value of real assets at stake."
            src="/works/kira2.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://kira.network/"
            isMobile={isMobile}
          />
        </MotionGridItem>
        
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="scoro"
            description="Work management software that brings your team, projects, sales and reports together. Centralize all projects and data in one platform."
            src="/works/scoro.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.scoro.com/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
