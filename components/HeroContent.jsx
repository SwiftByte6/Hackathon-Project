import React from 'react'
import {easeIn, easeOut, motion} from 'framer-motion'

const HeroContent = () => {
    return (
        <div className=' w-full min-h-screen'>
            <header className="flex justify-between items-center p-6 md:px-20">
                <div className="flex items-center gap-2">
                    
                    <div className="font-bold text-3xl">P2P</div>
                </div>
                <button
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold">
                    Get Started
                </button>
            </header>
            {/* Main Content */}
            <motion.main
                
                className="flex-1 flex flex-col items-center justify-center px-4 text-center">
                <motion.div
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{delay:1,ease:easeOut}}
                className="max-w-4xl mx-auto space-y-6">
                    <div className="flex-1 flex justify-center">
                        
                    </div>

                    <h1 className="text-2xl md:text-5xl  font-bold leading-tight">
                        Automate Your CLI Tasks with Just Your Voice
                    </h1>

                    {/* Subtitle */}
                    <p className="md:text-md  text-sm">
                        Meet the future of coding: A Python tool that listens, understands, and executes
                    </p>

             
                    <div className='space-x-0 md:space-x-5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0'>
                        <button
                            className="w-full md:w-auto bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-5 py-3 font-bold text-xl transition-colors duration-200">
                            Download
                        </button>
                        <button
                            className="w-full md:w-auto bg-[#2a1f3d] hover:bg-[#3a2d53] rounded-full px-5 py-3 font-bold text-xl transition-colors duration-200 mt-2 md:mt-0">
                            Explore Templates
                        </button>
                    </div>

                </motion.div>
                <motion.div
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:1.2,ease:easeIn}}
                className='h-[80vh] mt-10 rounded-2xl w-[95vw] md:w-[80vw]  bg-white/20 blur-md'>

                </motion.div>
            </motion.main>
        </div>
    )
}

export default HeroContent
