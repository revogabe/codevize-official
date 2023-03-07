'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export function SwitchMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const [isActivated, setIsActivated] = useState('')

  function handleSwitchMode() {
    if (mode === 'light') {
      setMode('dark')
      setIsActivated('dark')
    } else {
      setMode('light')
      setIsActivated('light')
    }
  }

  return (
    <div>
      <button
        data-ui={isActivated}
        onClick={handleSwitchMode}
        className="flex h-max w-max cursor-pointer items-center justify-center gap-2 rounded-full bg-gray-600/10 py-3 px-6 text-heading transition-all duration-300 ease-out data-light:bg-gray-600/10 data-dark:bg-gray-600/10 hover:bg-gray-600/10 hover:text-primarycolor"
      >
        {mode === 'light' ? (
          <>
            <h1>Light Theme</h1>
            <SunIcon />
          </>
        ) : (
          <>
            <h1>Dark Theme</h1>
            <MoonIcon />
          </>
        )}
      </button>
    </div>
  )
}
