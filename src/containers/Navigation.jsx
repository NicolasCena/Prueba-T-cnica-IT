import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import { AppClima } from './AppClima'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/AppClima" element={ <AppClima/> }/>
        </Routes>
    </BrowserRouter>
  )
}
