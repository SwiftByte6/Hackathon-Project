import { FaPython, FaNodeJs, FaGithub, FaRegStar } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
import { RiGeminiLine } from "react-icons/ri";
import { SiElevenlabs } from "react-icons/si";

const techStack = [
  {
    name: "Next.js",
    description: "React framework for production",
    icon: SiNextdotjs,
    color: "bg-gray-800",
    borderColor: "border-gray-500/30",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: SiTailwindcss,
    color: "bg-teal-500",
    borderColor: "border-teal-500/30",
  },
  {
    name: "Python",
    description: "Core logic, CLI tool",
    icon: FaPython,
    color: "bg-green-500",
    borderColor: "border-green-500/30",
  },
  
 {
  name: "Eleven Labs",
  description: "AI Voice Generation & Voice Cloning",
  icon: SiElevenlabs,
  color: "bg-lime-600",
  borderColor: "border-lime-600/30"
}
  ,
  {
    name: "GitHub API",
    description: "Automation, versioning",
    icon: FaGithub,
    color: "bg-black",
    borderColor: "border-gray-700/30",
  },
  {
    name: "Gemini",
    description: "AI/LLM integration",
    icon: RiGeminiLine, // fallback icon
    color: "bg-blue-500",
    borderColor: "border-blue-500/30",
  },
]

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0c0414" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Built With Modern Tools</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            VoiceCLI is crafted using powerful and scalable technologies.
          </p>
        </div>

        {/* Tech Stack Layout */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center space-y-4 transition-transform duration-300 hover:scale-105"
              >
                {/* Spherical Icon Container */}
                <div
                  className={`
                    relative w-20 h-20 rounded-full border-2 ${tech.borderColor}
                    bg-gray-900/50 backdrop-blur-sm
                    flex items-center justify-center
                    transition-all duration-300
                    hover:border-opacity-60
                  `}
                >
                  {/* Subtle inner glow */}
                  <div
                    className={`
                      absolute inset-2 rounded-full ${tech.color} opacity-10
                      group-hover:opacity-20 transition-opacity duration-300
                    `}
                  />

                  {/* Icon */}
                  <IconComponent className="w-8 h-8 text-white relative z-10" />
                </div>

                {/* Tech Info */}
                <div className="text-center max-w-32">
                  <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400 leading-tight">{tech.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5">
            <span className="text-purple-300 text-sm font-medium">
              Continuously evolving with the latest technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
