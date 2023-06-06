import React from 'react'

export default function Timeline({text, url, h3style, imgstyle}) {
  return (
    <div>
        <h3 className={h3style}>{text}</h3>
        <img className={imgstyle} src={url} alt=''/>
    </div>
  )
}