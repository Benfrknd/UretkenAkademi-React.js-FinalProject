import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Images from './pages/Images'
import Contact from './pages/Contact'


export default function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Images" element={<Images />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
    )
}