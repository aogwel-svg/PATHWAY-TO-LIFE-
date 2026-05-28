export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-gray-900">
          You&apos;re offline
        </h1>

        <p className="mt-3 text-gray-600">
          Pathway To Life Church is currently not connected to the internet,
          but cached content may still be available.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Please reconnect and try again.
        </p>
      </div>
    </div>
  )
}