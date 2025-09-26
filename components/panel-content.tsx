"use client"

import React, { useState, useEffect } from "react"

// Cloud Architecture Visualization Component
export const CloudArchitectureContent = () => (
  <div className="relative w-64 h-64 mx-auto group">
    <div
      className="w-full h-full transform-3d glass-morphism animate-gentle-pulse"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl border border-slate-300 group-hover:shadow-3xl transition-all duration-500">
        <div className="absolute inset-3 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-xl backdrop-blur-sm" />

        {/* Cloud infrastructure layers */}
        <div className="absolute top-4 left-4 right-4 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-sm flex items-center justify-center">
          <div className="text-white text-xs font-medium drop-shadow-sm">Cloud Infrastructure</div>
        </div>

        {/* Container orchestration layer */}
        <div className="absolute top-16 left-6 right-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-md shadow-sm flex items-center justify-center">
          <div className="text-white text-xs drop-shadow-sm">Kubernetes</div>
        </div>

        {/* Microservices containers */}
        <div className="absolute top-26 left-8 w-12 h-4 bg-orange-400 rounded shadow-sm hover:scale-105 transition-transform duration-300"></div>
        <div className="absolute top-26 left-22 w-12 h-4 bg-purple-400 rounded shadow-sm hover:scale-105 transition-transform duration-300"></div>
        <div className="absolute top-26 right-8 w-12 h-4 bg-pink-400 rounded shadow-sm hover:scale-105 transition-transform duration-300"></div>

        {/* Data flow connections */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gray-400"></div>
        <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gray-400"></div>

        {/* Database layer */}
        <div className="absolute bottom-8 left-8 right-8 h-6 bg-gradient-to-r from-red-400 to-rose-500 rounded-md shadow-sm flex items-center justify-center">
          <div className="text-white text-xs drop-shadow-sm">Database Layer</div>
        </div>

        {/* Monitoring indicators */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Subtle highlight */}
        <div className="absolute top-2 left-4 w-8 h-1 bg-white/40 rounded-full blur-sm" />
      </div>
    </div>

    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
      Cloud Architecture Visualization
    </div>

    {/* iPhone-like scroll cues */}
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
      <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
    </div>
    
    {/* Swipe indicator text */}
    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-light">
      Swipe to explore
    </div>
  </div>
)

// Sample panel content components inspired by Apple's design
export const MacScreenContent = () => (
  <div className="relative w-full max-w-2xl mx-auto">
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
      {/* Mac menu bar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-gray-300 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>Tue Apr 1 9:41 AM</div>
      </div>
      
      {/* Screen content */}
      <div className="bg-gradient-to-br from-red-500 to-orange-500 p-8 min-h-64 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-md animate-fade-in-up hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.5s' }}>
          <div className="text-gray-800 text-sm">
            <div className="font-semibold mb-2 text-red-600 animate-pulse">🚨 Production Down - Critical Alert</div>
            <div className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Kubernetes cluster experiencing high memory usage. Auto-scaling triggered. Investigating root cause...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const NightWorkContent = () => (
  <div className="relative w-full max-w-2xl mx-auto">
    <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
      {/* Laptop screen */}
      <div className="bg-black p-4">
        <div className="bg-gray-800 rounded-lg p-6 min-h-48 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-red-500 text-sm font-mono">
            <div className="animate-pulse">● Processing data...</div>
            <div className="mt-2 text-gray-400 animate-fade-in" style={{ animationDelay: '0.6s' }}>Performance monitoring active</div>
          </div>
        </div>
      </div>
      
      {/* Laptop base */}
      <div className="bg-gray-700 h-4 rounded-b-2xl animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
    </div>
  </div>
)

export const AppIconsContent = () => {
  const [scrambledApps, setScrambledApps] = useState([
    { name: "Slack", color: "bg-purple-500" },
    { name: "Photoshop", color: "bg-blue-500" },
    { name: "Word", color: "bg-blue-600" },
    { name: "Zoom", color: "bg-blue-400" },
    { name: "Canva", color: "bg-pink-500" },
    { name: "Excel", color: "bg-green-600" },
    { name: "Notes", color: "bg-yellow-500" },
    { name: "Drive", color: "bg-green-500" },
  ])

  // Auto-scramble effect
  useEffect(() => {
    const scrambleInterval = setInterval(() => {
      setScrambledApps(prev => {
        const shuffled = [...prev]
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }
        return shuffled
      })
    }, 3000) // Scramble every 3 seconds

    return () => clearInterval(scrambleInterval)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
      {scrambledApps.map((app, index) => (
        <div
          key={`${app.name}-${index}`}
          className={`${app.color} rounded-2xl aspect-square flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-500 ease-out animate-fade-in-up hover:shadow-2xl group`}
          style={{ 
            animationDelay: `${index * 0.08}s`,
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          <span className="text-white font-semibold text-sm animate-fade-in group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${index * 0.08 + 0.15}s` }}>{app.name}</span>
        </div>
      ))}
    </div>
  )
}

export const iPhoneContent = () => (
  <div className="relative w-48 mx-auto">
    <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl animate-fade-in-up">
      {/* iPhone screen */}
      <div className="bg-white rounded-2xl overflow-hidden">
        {/* Status bar */}
        <div className="bg-gray-100 px-4 py-1 flex justify-between items-center text-xs">
          <span className="font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-gray-400 rounded-sm animate-fade-in" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-6 h-2 bg-gray-400 rounded-sm animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
        
        {/* App content */}
        <div className="p-4 bg-gradient-to-b from-green-50 to-green-100">
          <div className="text-center mb-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-bold text-gray-800">Ruby's Cafe</h3>
            <p className="text-sm text-gray-600">Food Delivery</p>
          </div>
          
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-2 shadow-sm animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '1.0s' }}>
              <div className="text-sm font-medium">Chicken Avocado Salad</div>
              <div className="text-xs text-gray-500">$12.99</div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm animate-fade-in-up hover:scale-105 transition-transform duration-300" style={{ animationDelay: '1.2s' }}>
              <div className="text-sm font-medium">Spicy Vodka Pasta</div>
              <div className="text-xs text-gray-500">$15.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
