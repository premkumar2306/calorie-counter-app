import { Route, Routes } from 'react-router-dom'

import {
  ROUTE_ABOUT,
  ROUTE_BMI_CALCULATOR,
  ROUTE_HOME,
  ROUTE_PROFILE,
  ROUTE_SETTINGS,
  ROUTE_SIGN_IN,
} from '../config/routes'

import { About, BmiCalculator, Home, Profile, Settings, SignIn } from '../pages'
import { SidebarWithHeader } from './SidebarWithHeader'

export const AppLayout = () => {
  return (
    <>
      <SidebarWithHeader>
        <Routes>
          <Route path={ROUTE_HOME} element={<Home />} />
          <Route path={ROUTE_BMI_CALCULATOR} element={<BmiCalculator />} />
          <Route path={ROUTE_ABOUT} element={<About />} />
          <Route path={ROUTE_SETTINGS} element={<Settings />} />
          <Route path={ROUTE_SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE_PROFILE} element={<Profile />} />
        </Routes>
      </SidebarWithHeader>
    </>
  )
}
