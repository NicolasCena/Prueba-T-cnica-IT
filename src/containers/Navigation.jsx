import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { AppClima } from './AppClima'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/AppClima" element={ <AppClima/> }/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
