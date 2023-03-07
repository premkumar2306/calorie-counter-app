import { Box, Text } from '@chakra-ui/react'

import {
  TEXT_BMI_CALCULATOR_INFO,
  TEXT_BMI_CALCULATOR_TEXT_DESCRIPTION,
  TEXT_BMI_CALCULATOR_TITLE,
} from '../localization/texts'

import { BmiCalculatorForm } from '../components/BmiCalculatorForm'
import { PageContent } from '../layout'

export const BmiCalculator = () => {
  return (
    <PageContent
      pageHeading={TEXT_BMI_CALCULATOR_TITLE}
      pageDescription={TEXT_BMI_CALCULATOR_TEXT_DESCRIPTION}
      dataTestId="heading-bmi-calculator"
    >
      <Box mb={8}>
        <Text>{TEXT_BMI_CALCULATOR_INFO}</Text>
      </Box>

      <BmiCalculatorForm />
    </PageContent>
  )
}
