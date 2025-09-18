import React, { useState } from 'react'

function CharacterCounter() {
  const [char, setChar] = useState("")

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl font-bold text-orange-500 mb-4">
          Start typing to see the character Count
        </h1>

        <p className="mb-4">
          {char ? `Total characters: ${char.length}` : "0"}
        </p>

        <textarea
          className="w-full border px-4 py-2 rounded text-black bg-white"
          rows="6"
          value={char}
          onChange={(e) => setChar(e.target.value)}
          placeholder="Type something..."
        ></textarea>
      </div>
    </div>
  )
}

export default CharacterCounter
