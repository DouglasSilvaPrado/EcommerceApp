import React from 'react'
import { MainCarousel } from './MainCarousel'
import { ShoppingList } from './ShoppingList'

export const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList /> 
    </div>
  )
}
