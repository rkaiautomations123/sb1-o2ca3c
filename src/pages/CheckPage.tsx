import React, { useState } from 'react'

const CheckPage: React.FC = () => {
  const [imageError, setImageError] = useState<string | null>(null)

  const handleImageError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setImageError(`Error loading image: ${error.currentTarget.src}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Welcome to the Check Page</h1>
      <div className="space-y-4">
        <div>
          <img 
            src="https://media.discordapp.net/attachments/1295738035039633438/1295783947997020201/Screenshot_2024-10-15_142429.png?ex=670fe857&is=670e96d7&hm=f74c0cfffd85043fd6260245a9f94377c07751a81feb0e912ed286c011150277&=&format=webp&quality=lossless" 
            alt="Screenshot from Discord" 
            className="w-full max-w-4xl h-auto border border-white" 
            onError={handleImageError}
          />
          {imageError && <p className="text-red-500 mt-2">{imageError}</p>}
        </div>
      </div>
    </div>
  )
}

export default CheckPage