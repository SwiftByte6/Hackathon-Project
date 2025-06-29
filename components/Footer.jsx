'use client'

import { FiTerminal, FiGithub, FiMail, FiCode } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-6 lg:px-8 border-t border-purple-500/20 bg-[#0c0414]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Description */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <FiTerminal className="text-purple-400 text-xl" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                VoiceCLI
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              A Python-based tool that lets developers run terminal commands using voice instructions.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <FiGithub className="text-lg" />
              <span>github.com/voicecli</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <FiMail className="text-lg" />
              <span>contact@voicecli.dev</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <FiCode className="text-lg" />
              <span>Hackathon Project 2023</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 VoiceCLI Team. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
