"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-lg bg-gray-800/90 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-white">Liam Guetg</h1>
        <div className="space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="p-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          I'm a Computer Science student at UBC with a background in Biochemistry.
          I love building software that solves problems — from data-driven research tools
          to interactive web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12 bg-gray-800/50">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
        <div className="flex justify-center gap-6 max-w-6xl mx-auto">
          {/* Project 1 */}
          <Card 
            className="shadow-lg flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-xl w-96"
            onClick={() => toggleCard('treasure-hunt')}
          >
            <div className="w-full h-56 mx-2 mt-2 mb-2 border-2 border-black overflow-hidden rounded-lg" style={{width: 'calc(100% - 16px)'}}>
              <img 
                src="/images/TreasureHunt_screenshot.png" 
                alt="Treasure Hunt RPG Screenshot"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <CardContent className="px-4 pt-2 pb-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Treasure Hunt! RPG</h3>
              <ul className="text-gray-700 mb-3 space-y-1 text-sm flex-1 list-none">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Java-based GUI RPG</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>JSON persistence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>JUnit testing</span>
                </li>
              </ul>
              <a
                href="https://github.com/liamguetg/TreasureHuntGame"
                target="_blank"
                className="text-blue-600 hover:underline font-medium text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </CardContent>

            {/* Expanded Content */}
            {expandedCard === 'treasure-hunt' && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Images</h4>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Additional Screenshot 1</span>
                      </div>
                    </div>
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Additional Screenshot 2</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Details</h4>
                  <ul className="text-gray-700 space-y-1 text-sm list-none">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 4</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>

          {/* Project 2 */}
          <Card 
            className="shadow-lg flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-xl w-96"
            onClick={() => toggleCard('neo-classifier')}
          >
            <div className="w-full h-56 mx-2 mt-2 mb-2 border-2 border-black overflow-hidden rounded-lg" style={{width: 'calc(100% - 16px)'}}>
              <img 
                src="/images/NeoPrediction_screenshot.png" 
                alt="Near Earth Object Classifier Screenshot"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <CardContent className="px-4 pt-2 pb-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Near Earth Object Classifier</h3>
              <ul className="text-gray-700 mb-3 space-y-1 text-sm flex-1 list-none">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built with R & KNN</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>88% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hazardous object classification</span>
                </li>
              </ul>
              <a
                href="https://github.com/liamguetg/NEO-predictive-modelling"
                target="_blank"
                className="text-blue-600 hover:underline font-medium text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </CardContent>

            {/* Expanded Content */}
            {expandedCard === 'neo-classifier' && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Images</h4>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Data Visualization</span>
                      </div>
                    </div>
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Model Results</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Details</h4>
                  <ul className="text-gray-700 space-y-1 text-sm list-none">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 4</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>

          {/* Project 3 */}
          <Card 
            className="shadow-lg flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-xl w-96"
            onClick={() => toggleCard('game-of-life')}
          >
            <div className="w-full h-56 mx-2 mt-2 mb-2 border-2 border-black overflow-hidden rounded-lg" style={{width: 'calc(100% - 16px)'}}>
              <img 
                src="/images/GameOfLife_screenshot.png" 
                alt="Conway's Game of Life Screenshot"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
            <CardContent className="px-4 pt-2 pb-4 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Conway's Game of Life</h3>
              <ul className="text-gray-700 mb-3 space-y-1 text-sm flex-1 list-none">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Python console-based</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>OOP design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>User interactivity</span>
                </li>
              </ul>
              <a
                href="https://github.com/liamguetg/GameOfLife"
                target="_blank"
                className="text-blue-600 hover:underline font-medium text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub →
              </a>
            </CardContent>

            {/* Expanded Content */}
            {expandedCard === 'game-of-life' && (
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="mt-4">
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Images</h4>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Pattern Examples</span>
                      </div>
                    </div>
                    <div className="w-full h-36 border-2 border-black overflow-hidden rounded-lg">
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Code Structure</span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-md font-semibold mb-3 text-gray-900">Additional Details</h4>
                  <ul className="text-gray-700 space-y-1 text-sm list-none">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 1</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Blank detail 4</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl mb-8 text-blue-100">Feel free to reach out via email or LinkedIn!</p>
            
            {/* Contact Links */}
            <div className="flex justify-center items-center mb-12 gap-10">
              <a 
                href="mailto:guetgliam@gmail.com" 
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                📧 Email
              </a>
              <a 
                href="https://www.linkedin.com/in/liam-guetg-a034a1229/" 
                target="_blank" 
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/liamguetg" 
                target="_blank" 
                className="text-white hover:text-blue-200 transition-colors duration-200"
              >
                🐙 GitHub
              </a>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/20 pt-8">
              <p className="text-blue-200">
                © 2024 Liam Guetg. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
