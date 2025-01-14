import { useState, useEffect } from "react"

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-200 px-6 py-4 z-50 flex justify-between items-center shadow-lg border-t border-gray-700">
        <p className="text-sm leading-relaxed max-w-2xl">
          Tento web používá cookies k zajištění lepšího uživatelského zážitku.{" "}
          <a
            href="/policy"
            className="underline text-blue-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
          >
            Více informací
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
        >
          Přijmout
        </button>
      </div>
    )
  )
}

export default CookieBanner
