import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './component/HomePage'
import ReactQueryPage from './component/ReactQueryPage'
import NormalFetch from './component/NormalFetch'

export const React_Query_Demo_App = () => {
  return (
    <div>
      React_Query_Demo_App
      <nav style={{backgroundColor: "beige", padding: "20px"}}>
        <Link to="/" style={{marginRight: "10px"}}>
          Home Page
        </Link>
        <Link to="/react-query">
          React Query
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/normal-fetch" element={<NormalFetch/>} />
        <Route path="/react-query" element={<ReactQueryPage/>} />
      </Routes>
    </div>
  )
}
