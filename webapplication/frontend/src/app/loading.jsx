export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-400 border-solid"></div>
      <span className="ml-4 text-gray-700 text-lg">Loading...</span>
    </div>
  );
}