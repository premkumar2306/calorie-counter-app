import { Box, Heading, Text } from '@chakra-ui/react'
import { TEXT_SETTINGS_TEXT_DESCRIPTION, TEXT_SETTINGS_TITLE } from '../localization/texts'
import { PageContent } from '../layout'


export const Settings = () => {
  return (
    <PageContent
      pageHeading={TEXT_SETTINGS_TITLE}
      pageDescription={TEXT_SETTINGS_TEXT_DESCRIPTION}
      dataTestId="heading-settings"
    >
      <Box mb={8}>
        <Heading as="h2" size="lg">
          User settings
        </Heading>
        <Text>lorem</Text>
        <Text>lorem</Text>
        <Text>lorem</Text>
      </Box>
      <Box mb={8}>
        <Heading as="h2" size="lg">
          Admin settings
        </Heading>
      </Box>
    </PageContent>
  )
}
