'use client'

import { useState } from 'react'
import Link from 'next/link'
import TankSetupAnalyser from '@/components/TankSetupAnalyser'

export default function TankBuilderPage() {
  const [buildMode, setBuildMode] = useState<'new' | 'existing'>('new')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-aqua-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-1 text-gray-500 md:ml-2">Tank Builder</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Aquarium Tank Builder
        </h1>
        <p className="text-gray-600">
          Plan your aquarium setup and analyze compatibility for new or existing tanks
        </p>
      </div>

      {/* Mode Selection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          What would you like to do?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setBuildMode('new')}
            className={`p-6 rounded-lg border-2 transition-all ${
              buildMode === 'new'
                ? 'border-aqua-500 bg-aqua-50'
                : 'border-gray-200 hover:border-aqua-300'
            }`}
          >
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-aqua-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Plan New Tank</h3>
            </div>
            <p className="text-gray-600 text-left">
              Start fresh and build a new aquarium setup from scratch with compatible species recommendations
            </p>
          </button>

          <button
            onClick={() => setBuildMode('existing')}
            className={`p-6 rounded-lg border-2 transition-all ${
              buildMode === 'existing'
                ? 'border-coral-500 bg-coral-50'
                : 'border-gray-200 hover:border-coral-300'
            }`}
          >
            <div className="flex items-center mb-3">
              <svg className="w-8 h-8 text-coral-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Analyze Existing Tank</h3>
            </div>
            <p className="text-gray-600 text-left">
              Check compatibility of your current fish and see what species you can safely add
            </p>
          </button>
        </div>
      </div>

      {/* Tank Builder Content */}
      {buildMode === 'new' && (
        <div className="space-y-8">
          {/* New Tank Setup Guide */}
          <div className="bg-gradient-to-br from-aqua-50 to-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Building Your New Aquarium
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aqua-600 font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Choose Tank Size</h3>
                <p className="text-sm text-gray-600">Select appropriate tank size for your space and budget</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aqua-600 font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Select Species</h3>
                <p className="text-sm text-gray-600">Pick compatible fish species for your community tank</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-aqua-600 font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Get Equipment</h3>
                <p className="text-sm text-gray-600">Find the right equipment and supplies for your setup</p>
              </div>
            </div>
          </div>

          <TankSetupAnalyser
            onAnalysisComplete={(result) => {
              if (!result) {
                console.warn('Analysis result is null or undefined.');
                return;
              }
              console.log(result);
            }}
          />
        </div>
      )}

      {buildMode === 'existing' && (
        <div className="space-y-8">
          {/* Existing Tank Analysis Guide */}
          <div className="bg-gradient-to-br from-coral-50 to-orange-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Analyzing Your Current Tank
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral-600 font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Current Fish</h3>
                <p className="text-sm text-gray-600">Tell us what fish you currently have in your tank</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral-600 font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Check Compatibility</h3>
                <p className="text-sm text-gray-600">We'll analyze current compatibility and potential issues</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-coral-600 font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Safe Additions</h3>
                <p className="text-sm text-gray-600">Get recommendations for fish you can safely add</p>
              </div>
            </div>
          </div>

          <TankSetupAnalyser
            onAnalysisComplete={(result) => {
              if (!result) {
                console.warn('Analysis result is null or undefined.');
                return;
              }
              console.log(result);
            }}
          />
        </div>
      )}

      {/* Quick Links */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Need More Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/compatibility"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-aqua-300 hover:bg-aqua-50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-aqua-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-aqua-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Compatibility Checker</h3>
              <p className="text-sm text-gray-600">Check specific species combinations</p>
            </div>
          </Link>

          <Link
            href="/species"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-coral-300 hover:bg-coral-50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Species Guide</h3>
              <p className="text-sm text-gray-600">Learn about individual fish species</p>
            </div>
          </Link>

          <Link
            href="/products"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h10a2 2 0 002-2V7l-7-5zM6 9a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Shop Equipment</h3>
              <p className="text-sm text-gray-600">Find tanks, filters, and supplies</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}