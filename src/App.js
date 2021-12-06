import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import SignInComponent from './components/SignInComponent'
import OTPComponent from './components/OTPComponent'
import { Provider as DetailProvider } from './context/DetailsContext'
import ProfileSetupComponent from './components/ProfileSetupComponent'
import CalendarComponent from './components/CalendarComponent'
import ActionPlanComponent from './components/ActionPlanComponent'

const App = () => {

  return (
    <BrowserRouter>

      <Routes>

        <Route path = '/' element = { <HomeComponent/> }/>

        <Route path = '/about' element = { <AboutComponent/> }/>

        <Route path = '/signin' element = { <SignInComponent/> }/>

        <Route path = '/otp/:phone_number' element = { <OTPComponent/> }/>

        <Route path = '/questions' element = { <ProfileSetupComponent/> }/>

        <Route path = '/action_plan' element = { <ActionPlanComponent/> }/>

        <Route path = '/calendar' element = { <CalendarComponent/> }/>

      </Routes>

    </BrowserRouter>
  );
}

export default () => (
  <DetailProvider>

    <App/>

  </DetailProvider>);
