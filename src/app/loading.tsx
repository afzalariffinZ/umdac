export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Data-themed loading animation */}
        <div className="flex space-x-2">
          <div className="w-4 h-16 bg-primary-400 animate-[wave_1s_ease-in-out_infinite]" />
          <div className="w-4 h-16 bg-primary-500 animate-[wave_1s_ease-in-out_0.1s_infinite]" />
          <div className="w-4 h-16 bg-primary-600 animate-[wave_1s_ease-in-out_0.2s_infinite]" />
          <div className="w-4 h-16 bg-primary-700 animate-[wave_1s_ease-in-out_0.3s_infinite]" />
          <div className="w-4 h-16 bg-primary-800 animate-[wave_1s_ease-in-out_0.4s_infinite]" />
        </div>
        <p className="mt-4 text-center text-secondary-600 font-mono">Loading...</p>
      </div>
    </div>
  )
} 