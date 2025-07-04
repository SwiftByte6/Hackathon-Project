import React from 'react'

const Command = () => {

    const commandExamples = [
        {
            voice: "Create a new branch called feature",
            terminal: " git checkout -b feature"
        },
        {
            voice: "Run the test suite",
            terminal: " npm test"
        },
        {
            voice: "Push my changes to origin",
            terminal: " git push origin main"
        },
        {
            voice: "Install React and TypeScript",
            terminal: " npm install react typescript @types/react"
        },
        {
            voice: "Create a new React component",
            terminal: " touch src/components/NewComponent.tsx"
        },
        {
            voice: "Start development server",
            terminal: " npm run dev"
        }
    ];

    return (
        <div>
            <div className="flex flex-col justify-center items-center py-16">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                    aria-label="Section heading"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                       Command Examples
                    </span>
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto text-center mb-10">
                    Speak naturally and watch VoiceCLI translate your words into terminal commands
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 px-6 gap-7 w-full max-w-7xl">
                    {commandExamples.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1a1025] space-y-4 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className='flex gap-2 items-center'>
                                <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                                <h2 className='text-purple-400'>Voice Command</h2>
                            </div>
                          <h2 className='font-bold text-xl'>{item.voice}</h2>
                              <div className='flex gap-2 items-center'>
                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                <h2 className='text-blue-400'>Terminal Output</h2>
                            </div>
                            <div className='bg-black p-2 rounded-2xl px-3'>
                                <h2 className='text-gray-400'>$<span className='ml-2 text-yellow-400'>{item.terminal}</span></h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Command
