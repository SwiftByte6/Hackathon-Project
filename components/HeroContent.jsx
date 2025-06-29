import React from 'react'
import { Paperclip, Sparkles } from "lucide-react";

const HeroContent = () => {
    return (
        <div className=' w-full min-h-screen'>
            <header className="flex justify-between items-center p-6 px-20">
                <div className="flex items-center gap-2">
                    
                    <div className="font-bold text-3xl">P2P</div>
                </div>
                <button
                    className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-2 text-sm cursor-pointer font-semibold">
                    Get Started
                </button>
            </header>
            {/* Main Content */}
            <main
                className="flex-1 flex flex-col items-center justify-center px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="flex-1 flex justify-center">
                        
                    </div>

                    <h1 className="text-5xl font-bold leading-tight">
                        Automate Your CLI Tasks with Just Your Voice
                    </h1>

                    {/* Subtitle */}
                    <p className="text-md">
                        Meet the future of coding: A Python tool that listens, understands, and executes
                    </p>

                    {/* Search bar */}


                    {/* Suggestion pills */}
                    {/* <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
                            Launch a blog with Astro
                        </button>
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
                            Develop an app using NativeScript
                        </button>
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
                            Build documentation with Vitepress
                        </button>
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
                            Generate UI with shadcn
                        </button>
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-4 py-2 text-sm">
                            Generate UI with HextaUI
                        </button>
                    </div> */}
                    <div className='space-x-5 flex items-center justify-center'>
                        <button
                            className="bg-[#1c1528] hover:bg-[#2a1f3d] rounded-full px-5 py-3 font-bold text-xl">
                            Download
                        </button>
                        <button
                            className="bg-[#2a1f3d] hover:bg-[#3a2d53] rounded-full px-5 py-3 font-bold text-xl">
                            Explore Templates
                        </button>
                    </div>

                </div>
                <div className='h-[80vh] mt-10 rounded-2xl w-[95vw] md:w-[80vw]  bg-white/20 blur-md'>

                </div>
            </main>
        </div>
    )
}

export default HeroContent
