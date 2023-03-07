import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react'

import { URL_GITHUB } from '../config/urls'
import {
  TEXT_ABOUT_TEXT_DESCRIPTION,
  TEXT_ABOUT_TITLE,
  TEXT_APP_OPEN_SOURCE,
  TEXT_IMAGE_ALT_ABOUT,
} from '../localization/texts'

import logo128 from '../../src/img/question-128.png'
import { PageContent } from '../layout'

export const About = () => {
  return (
    <PageContent
      pageHeading={TEXT_ABOUT_TITLE}
      pageDescription={TEXT_ABOUT_TEXT_DESCRIPTION}
      dataTestId="heading-about"
    >
      <Box mb={8}>
        <Image boxSize="128px" src={logo128} alt={TEXT_IMAGE_ALT_ABOUT} />
      </Box>

      <Box mb={8}>
        <Heading as="h2" size="md" mb={2}>
          Why I created StrongifyMe
        </Heading>
        <Text>I love helping other people 🙂 I want you to better understand your health and fitness.</Text>
      </Box>

      <Box>
        <Heading as="h2" size="md" mb={2}>
          Contribute
        </Heading>
        <Text>
          {TEXT_APP_OPEN_SOURCE}{' '}
          <Link href={URL_GITHUB} color="green.500" isExternal>
            {URL_GITHUB} <ExternalLinkIcon mx={1} />
          </Link>
        </Text>
      </Box>
    </PageContent>
  )
}
