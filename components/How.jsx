import React from 'react'
import { BsMic } from "react-icons/bs";
import { FaMicrochip } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa";
import { motion } from "framer-motion";

const howItWorks = [
    {
        icon:<BsMic size={28} className='text-blue-400'/>,
        step: "1",
        title: "Speak",
        description: "Activate VoiceCLI and speak your command naturally"
    },
    {
        icon:<FaMicrochip size={28} className='text-purple-400'/>,
        step: "2",
        title: "Process",
        description: "AI converts your speech to executable terminal commands"
    },
    {
        icon:<FaTerminal size={28} className='text-blue-400'/>,
        step: "3",
        title: "Execute",
        description: "Commands run automatically in your terminal"
    }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const How = () => {
    return (
        <div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 px-6 gap-7 w-full max-w-7xl">
                    {howItWorks.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#1a1025] relative flex flex-col items-center justify-center border border-purple-500/20 rounded-xl py-8 p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="w-12 h-12 absolute -top-5 rounded-full bg-[#1a1025] border border-purple-500/20 flex items-center justify-center mb-4 text-purple-300">
                                {item.step}
                            </div>
                            <div className="w-15 h-15 mt-1  rounded-full bg-[#251a35] flex items-center justify-center mb-4 text-purple-300">
                                {item.icon}
                            </div>
                            <h3 className="text-3xl font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-md text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default How
