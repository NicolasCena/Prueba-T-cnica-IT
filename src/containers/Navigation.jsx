import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { NotFound } from '../components/NotFound'
import { Home } from './Home'
import { AppClima } from './AppClima'
import { AppAparcamiento } from './AppAparcamiento'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
            <Route path="/AppClima" element={ <AppClima/> }/>
            <Route path="/AppAparcamiento" element={ <AppAparcamiento/> }/>
            <Route path="*" element={ <NotFound/> }/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
