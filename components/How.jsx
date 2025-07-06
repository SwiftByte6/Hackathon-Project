import React from "react";
import { BsMic } from "react-icons/bs";
import { SiGooglecolab } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
    {
        step: "1",
        title: "Speak a Command",
        description: "Use natural language to describe what you want to accomplish",
        example: `"Create a file called hello.py"`,
        icon: <BsMic size={24} className="text-blue-400" />,
    },
    {
        step: "2",
        title: "AI Processes with Gemini",
        description: "Python backend with Gemini API converts voice to intent",
        example: `$ touch hello.py\n$ git add hello.py`,
        icon: <SiGooglecolab size={24} className="text-purple-400" />,
    },
    {
        step: "3",
        title: "We Update GitHub for You",
        description: "Auto commit, push, and PR creation with voice feedback",
        example: `✓ File created and committed`,
        icon: <FaGithub size={24} className="text-blue-400" />,
    },
];

const voices = [
    { name: "James", desc: "Husky & Engaging", gender: "Male", age: "Middle-aged" },
    { name: "Austin", desc: "Good ol' Texas boy", gender: "Male", age: "Middle-aged" },
    { name: "Hope", desc: "Upbeat and clear", gender: "Female", age: "Young" },
    { name: "Blondie", desc: "Conversational", gender: "Female", age: "Middle-aged" },
    { name: "Rachel", desc: "Professional Female", gender: "Female", age: "Young" },
    { name: "Zani", desc: "Japanese Voice", gender: "Neutral", age: "Unknown" },
    { name: "Fuxuan", desc: "Japanese Character", gender: "Neutral", age: "Unknown" },
    { name: "Fugue", desc: "Japanese Character", gender: "Neutral", age: "Unknown" },
    { name: "Firefly", desc: "Japanese Character", gender: "Neutral", age: "Unknown" },
    { name: "Onoe-Matsuya", desc: "Traditional Japanese", gender: "Male", age: "Unknown" },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = () => {
    return (
        <section className="w-full px-4 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* LEFT: How It Works */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        How It Works
                    </span>
                </h2>
                <p className="text-gray-300 max-w-lg text-center md:text-left mb-10">
                    From speaking a command to pushing code — it all happens in seconds.
                </p>

                <div className="flex flex-col gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className=" relative  rounded-xl py-6 px-5 hover:border-purple-500/40 transition-all"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="flex gap-3 items-start">
                                <div className="w-10 h-10 rounded-full bg-[#251a35] flex items-center justify-center">
                                    {step.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                                    <p className="text-sm text-gray-400">{step.description}</p>
                                    <pre className="text-xs text-purple-300 mt-2 whitespace-pre-wrap font-mono">{step.example}</pre>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Voice Profiles */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Voice Profiles
                    </span>
                </h2>
               
                <div className="bg-[#1a1025] mt-9 border border-purple-500/20 rounded-xl p-6 overflow-y-scroll max-h-[470px] custom-scroll">



                    <div className="space-y-4 ">
                        <p className="text-gray-300 max-w-lg  text-center md:text-left mb-10">
                    Choose your Voice Assistant
                </p>
                        {voices.map((v, i) => (
                            <div
                                key={i}
                                className="border border-purple-500/10 rounded-lg p-4 bg-[#221634] hover:border-purple-500/30 transition"
                            >
                                <h4 className="text-lg font-semibold text-white">{v.name}</h4>
                                <p className="text-sm text-gray-400">{v.desc}</p>
                                <div className="flex gap-4 text-xs text-gray-500 mt-2">
                                    <span className="bg-[#2e1b44] px-2 py-0.5 rounded-full">{v.gender}</span>
                                    <span className="bg-[#2e1b44] px-2 py-0.5 rounded-full">{v.age}</span>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section;
