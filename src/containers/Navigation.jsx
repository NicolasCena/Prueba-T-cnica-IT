import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import { DataApiClima } from '../components/AppClima/DataApiClima'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export const Navigation = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/AppClima" element={ <DataApiClima/> }/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
