import { Box, Card, CardBody, Grid, GridItem, Text } from '@chakra-ui/react'

import { TEXT_HOME_DESCRIPTION, TEXT_HOME_TITLE } from '../localization/texts'

import { PageContent } from '../layout'

const MAX_CONTENT_WIDTH = '1000px'

// TODO: data-test-id get from json file
export const Home = () => {
  return (
    <PageContent pageHeading={TEXT_HOME_TITLE} pageDescription={TEXT_HOME_DESCRIPTION} dataTestId="heading-home">
      <Box mb={8}>
        <Text>lorem</Text>
      </Box>

      <Grid
        maxWidth={MAX_CONTENT_WIDTH}
        gap={4}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          xl: 'repeat(2, 1fr)',
        }}
      >
        <GridItem>
          <Card maxWidth="md" p={4}>
            <CardBody>
              <Box>your bmi is</Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxWidth="md" p={4}>
            <CardBody>
              <Box>graph</Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxWidth="md" p={4}>
            <CardBody>
              <Box>no. of workouts this week</Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxWidth="md" p={4}>
            <CardBody>
              <Box>no. of workouts this month</Box>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </PageContent>
  )
}
