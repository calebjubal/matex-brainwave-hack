'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white">
      <main className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-between"
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold mb-4">Revolutionize Your Code Reviews with AI</h1>
            <p className="text-xl mb-6">Matex brings the power of artificial intelligence to your development workflow, providing insightful and efficient code reviews.</p>
            <Button asChild className="bg-white text-orange-600 hover:bg-orange-100 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-lg bg-white p-4 shadow-2xl">
              <div className="bg-gray-800 rounded-md p-4">
                <pre className="text-green-400 font-mono text-sm">
                  <code>{`# Matex AI Review
Great job on the implementation!
Consider optimizing the loop on line 23.
Overall code quality: ⭐⭐⭐⭐

Suggestions:
1. Use list comprehension for better readability
2. Add type hints to improve maintainability
3. Consider using async/await for I/O operations

Performance Impact: +15% 🚀
Security Score: 95/100 🔒`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 

 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Matex?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered Insights", description: "Leverage cutting-edge AI to get deep, context-aware code reviews." },
              { title: "Boost Productivity", description: "Reduce review time and catch issues before they become problems." },
              { title: "Continuous Learning", description: "Our AI evolves with your codebase, providing ever-improving feedback." }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}