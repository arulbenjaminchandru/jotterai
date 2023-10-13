"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
    options = {{
        loop:true,
    }} 
    onInit={(typewriter) => {
        typewriter.typeString('✨ AI Suggested auto complete')
        .pauseFor(1000)
        .deleteAll()
        .typeString('📝 Create Notes')
        .pauseFor(1000)
        .deleteAll()
        .typeString('🚀 Cross-Platform Access')
        .start()

    }
    }
    />
  )
}

export default TypewriterTitle