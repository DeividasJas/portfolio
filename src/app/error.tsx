'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const errorMessage =
    error instanceof Error
      ? error.message
      : 'An unexpected error occurred'

  return (
    <div id="error-page" className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  )
}
