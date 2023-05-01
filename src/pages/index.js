import Image from 'next/image'
import { Fleur_De_Leah, Inter } from 'next/font/google'
//import React, { useState } from 'react'
import RadiationExample from './table'
import NRELData from './weatherData'
import UserForm from './userInput'
//import Nreldata from './weatherData'
//import UserForm from './userInput'
//import NRELdata from './weatherData'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center dark:from-inherit lg:static lg:w-auto lg:p-4 lg:dark:bg-zinc-800/30 text-xl">
          Solar Radiation Dashboard
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https:unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Image by Unsplash
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/bg_image.jpg"
          alt="Sun over the mountains"
          width={1000}
          height={900}
          priority
        />
      </div>
      
      <div className="content-center container p-2">
        <h3 className="text-2xl">Radiation in Detroit By Month</h3>
        <p className = "p-2">Average daily radiation determines how many solar panels would be needed to achieve your electricity generation goals.</p>
      <RadiationExample />
      </div>

      <div className="p-3">
        <h3 className="text-xl">NREL Data:</h3>
        <NRELData/>
      </div>

      <div className="p-3">
        <h3 className="text-xl">Please provide feedback</h3>
        <UserForm/>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://pvwatts.nrel.gov/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            PV Watts{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find info on system specifications and size.
          </p>
        </a>

        <a
          href="https://sam.nrel.gov/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SAM{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            For in-depth downloadable cost analysis.
          </p>
        </a>
        
        <a
          href="https://subtle-capybara-44264c.netlify.app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Solar Calculator{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Use your radiation data to determine if solar panels are right for you.
          </p>
        </a>

        <a
          href="https://www.nrel.gov/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NREL{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            For more information, see NREL resources.
          </p>
        </a>
      </div>
    </main>
  )
}
