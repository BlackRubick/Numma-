import React, { useState } from 'react'

// Imagen que muestra un respaldo neutro si la URL externa no carga
const FallbackImage = ({ src, alt, className = '', fallback = null }) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className="grid h-full w-full place-items-center bg-brand-50 p-6 text-center"
        role="img"
        aria-label={alt}
      >
        {fallback}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  )
}

export default FallbackImage
