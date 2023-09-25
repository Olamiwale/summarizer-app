import React from 'react'
import {logo} from '../assets'

export default function Hero() {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo'  className='w-28 object-contain'/>
        <button type='button' 
        onClick={() => window.open('https://google.com')}
        className='black_btn'
        > Google </button>
      </nav>

      <h1 className='head_text'>
        Summarize Article with <br className='max-md:hidden'  />
        <span  className='orange_gradient'>OpenAI GPT-4</span>
      </h1>

      <h2 className='desc'>

      Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries

      </h2>
     
      </header>
  )
}

