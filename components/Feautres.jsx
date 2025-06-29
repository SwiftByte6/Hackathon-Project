import React from 'react';
import { TiMicrophoneOutline } from "react-icons/ti";
import { LuBrain } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosGitMerge } from "react-icons/io";

const features = [
    { icon: <TiMicrophoneOutline size={30} className='text-blue-400'/>, heading: "Voice Trigger", para: "Activate and control your terminal with natural voice commands" },
    { icon: <AiOutlineThunderbolt size={30} className='text-purple-400'/>, heading: "Task Automation", para: "Create voice shortcuts for complex command sequences" },
    { icon: <LuBrain size={30} className='text-blue-400'/>, heading: "NLP to CLI", para: "Advanced language processing converts speech to precise commands" },
    { icon: <IoIosGitMerge size={30} className='text-purple-400'/>, heading: "Git Integration", para: "Seamless voice control for all your Git workflows" }
]

const Feautres = () => {
    return (
        <div className="flex flex-col justify-center items-center py-16">
  <h2
    className="text-3xl md:text-4xl font-bold mb-4 text-center"
    aria-label="Section heading"
  >
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
      Powerful Features
    </span>
  </h2>
  <p className="text-gray-300 max-w-xl mx-auto text-center mb-10">
    VoiceCLI combines natural language processing with terminal functionality for a hands-free coding experience.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-4 px-6 gap-7 w-full max-w-7xl">
    {features.map((item, index) => (
      <div
        key={index}
        className="bg-[#1a1025] border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
      >
        <div className="w-12 h-12 rounded-lg bg-[#251a35] flex items-center justify-center mb-4 text-purple-300">
          {item.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {item.heading}
        </h3>
        <p className="text-sm text-gray-400">{item.para}</p>
      </div>
    ))}
  </div>
</div>

    )
}

export default Feautres
