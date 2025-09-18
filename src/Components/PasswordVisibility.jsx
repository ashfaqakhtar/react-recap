import React, { useState } from 'react'

function PasswordVisibility() {
  const [pass, setPass] = useState("")
  const [visible, setVisible] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-orange-400 mb-6 text-center">
          Enter your Password
        </h1>

        <div className="flex items-center border rounded-lg overflow-hidden bg-white">
          <input
            type={visible ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Type your password..."
            className="flex-1 px-4 py-2 outline-none text-black"
          />

          <button
            className="px-4 py-2 bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PasswordVisibility
