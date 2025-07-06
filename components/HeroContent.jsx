import React from 'react'
import { easeIn, easeOut, motion } from 'framer-motion'
import { FiGithub } from "react-icons/fi";
import { FaGithub } from 'react-icons/fa6';
import Image from 'next/image';
import { HiMiniSpeakerWave } from "react-icons/hi2";

const HeroContent = () => {
    // Replace with your actual download and GitHub URLs
    const handleDownload = () => {
        window.open('https://github.com/Sukumarsawant/Kuro-CLI-/releases/download/asset/Kuro.zip', '_blank');
    };

    const handleGithub = () => {
        window.open('https://github.com/Sukumarsawant/Kuro-CLI-', '_blank');
    };

    return (
        <div className=' w-full '>
            <header className="flex justify-between items-center p-6 md:px-20">
                <div className="flex items-center gap-2">
                    <div className="font-bold text-3xl">Kuro CLI</div>
                </div>
                 <button
                            onClick={handleGithub}
                            className="w-full flex gap-3 items-center justify-center  md:w-auto cursor-pointer rounded-full px-5 py-3 font-bold text-xl transition-colors duration-200 mt-2 md:mt-0">
                            <FiGithub className='text-white' />
                        </button>
            </header>
            {/* Main Content */}
            <motion.main
                className="flex-1 flex flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, ease: easeOut }}
                    className=" mx-auto space-y-15">
                    <div className="flex-1 flex justify-center">
                    </div>
                    <div className='flex justify-center -mb-2 items-center gap-2'>
                        <span>
                            <HiMiniSpeakerWave size={18} className='text-purple-600/70' />
                        </span>
                        <h2 className='text-sm md:text-base font-medium text-neutral-500 tracking-wide uppercase'>
                            10 Voice Profiles Available
                        </h2>
                    </div>

                    <h1 className="text-6xl md:text-9xl  font-bold leading-tight bg-gradient-to-b from-purple-900 via-purple-500  bg-clip-text text-transparent">
                        Talk. Code. Commit
                    </h1>


                    {/* Subtitle */}
                    <p className="md:text-2xl  text-xl">
                        Build and manage your GitHub projects — hands-free, with voice commands powered by AI.
                    </p>

                    <div className='space-x-0 md:space-x-5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0'>
                        <button
                            onClick={handleDownload}
                            className="w-full md:w-auto bg-[#1c1528] border-2 border-purple-400/10 hover:bg-[#2a1f3d] hover:scale-[1.1] rounded-full px-5 py-3 font-bold text-xl transition-colors duration-200">
                            Download
                        </button>
                        <button
                            onClick={handleGithub}
                            className="w-full flex gap-3 items-center justify-center  md:w-auto bg-[#2a1f3d] border-2 border-purple-400/10 hover:bg-[#3a2d53] rounded-full px-5 py-3 font-bold text-xl transition-colors duration-200 mt-2 md:mt-0">
                            <FiGithub className='text-white' />View on Github
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, ease: easeIn }}
                    className='mt-10 rounded-2xl   relative'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* The Problem */}
                        <div className="bg-[#1a1025] relative flex flex-col items-center justify-center border border-purple-500/20 rounded-xl py-8 p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                            <h2 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">😩 The Problem</h2>
                            <p className="text-gray-300 text-center">
                                Tired of typing repetitive terminal commands?
                            </p>
                            <pre className="text-sm text-left text-lime-300 mt-4 bg-purple-900/10 p-4 rounded w-full overflow-auto">
                                <code>
                                    $ git add .{'\n'}
                                    $ git commit -m "fix: update component"{'\n'}
                                    $ git push origin main{'\n'}
                                    $ npm run test{'\n'}
                                    $ npm run build
                                </code>
                            </pre>
                            <p className="text-gray-400 mt-4 italic">Every. Single. Day.</p>
                        </div>

                        {/* The Solution */}
                        <div className="bg-[#1a1025] relative flex flex-col items-center justify-center border border-purple-500/20 rounded-xl py-8 p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
                            <h2 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">✨ The Solution</h2>
                            <p className="text-gray-300 text-center">
                                Just say it, and let <span className="text-purple-400 font-bold">Kuro</span> do the work — from git commits to running tests.
                            </p>
                            <pre className="text-sm text-left text-lime-300 mt-4 bg-purple-900/10 p-4 rounded w-full overflow-auto">
                                <code>
                                    🎤 "Commit my changes and run tests"{'\n'}
                                    ✓ git add .{'\n'}
                                    ✓ git commit -m "feat: add new feature"{'\n'}
                                    ✓ npm run test{'\n'}
        // Done!
                                </code>
                            </pre>
                        </div>
                    </div>

                </motion.div>
            </motion.main>
        </div>
    )
}

export default HeroContent
