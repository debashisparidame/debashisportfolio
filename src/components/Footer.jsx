import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { assets } from '../../assets/assets'

const Footer = ({ isDarkMode }) => {
  const [currentLogo, setCurrentLogo] = useState(0)
  const logos = ['Debashis Parida🚀', 'Code With Deb👨‍💻']

  // Toggle between logos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev === 0 ? 1 : 0))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`text-2xl sm:text-3xl font-bold font-Ovo mb-3 h-12 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <div className='relative h-full flex justify-center items-center overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.span
                key={currentLogo}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='inline-block hover:scale-110 transition-transform duration-300'
              >
                {logos[currentLogo]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <div className='w-max flex items-center gap-2 mx-auto text-sm sm:text-base'>
          <motion.span
            initial={{ rotate: -30 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className='text-xl'
          >
            📧
          </motion.span>
          debashisparidaofficial@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 {logos[1]}. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href='#' className='hover:underline'>
              GitHub
            </a>
          </li>
          <li>
            <a target='_blank' href='#' className='hover:underline'>
              LinkedIn
            </a>
          </li>
          <li>
            <a target='_blank' href='#' className='hover:underline'>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer