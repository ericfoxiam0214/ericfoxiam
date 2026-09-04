/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Text,
  Link,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Skeleton,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi'
import styles from './styles.module.css'
import { EducationsList } from 'config/education'
import { mobileBreakpointsMap } from 'config/theme'

const ExperienceTab = () => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const borderColor = useColorModeValue('gray.300', 'gray.600')
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC')
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? ('vertical' as any)

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  })
  return (
    <Tabs id="experienceTabs" orientation={tabOrientation} isLazy>
      <TabList
        width={!isMobile ? '30%' : 'auto'}
        borderColor="transparent"
        overflowX={isMobile ? 'scroll' : 'auto'}
        overflowY={'hidden'}
        className={styles.experienceTabs}
      >
        {EducationsList.map((university) => (
          <Tab
            key={`Tab-${university.name}`}
            fontSize="smaller"
            h="120px"
            minWidth={tabMinWidth}
            boxShadow="none"
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            _selected={{
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={
                colorMode === 'dark' ? university.logo.dark : university.logo.light
              }
              maxWidth="88px"
              fallback={<Skeleton height="100%" width="100%" />}
            ></Image>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {EducationsList.map((university) => (
          <TabPanel key={`TabPanel-${university.name}`}>
            <SlideFade offsetY="20px" in={true}>
              <Stack spacing={0}>
                <Text
                  as="span"
                  fontSize="lg"
                  fontWeight="bold"
                  variant="description"
                >
                  {university.position}
                </Text>
                <Text as="span">
                  <Link
                    href={university.url}
                    aria-label="scentregroup"
                    rel="noreferrer"
                    target="_blank"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    #{university.name}
                  </Link>
                </Text>
                <Text fontSize="smaller">{university.duration}</Text>
              </Stack>
              <List spacing={3} pt={5}>
                {university.roles?.map((roleDesc, idx) => (
                  <ListItem
                    key={`${university.name}-desc-${idx}`}
                    fontSize="smaller"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <ListIcon
                      as={BiRightArrow}
                      color={emphasis}
                      display="block"
                    />
                    <Text as="span" display="block" variant="description">
                      {roleDesc}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default ExperienceTab
