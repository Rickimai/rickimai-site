export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-16">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-neutral-700 border-t-primary-500" />
        <p className="mt-4 text-sm text-neutral-400">Loading...</p>
      </div>
    </div>
  );
}
