export default function Loading() {
  return (
    <div className="p-6 md:p-10 space-y-8 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-10 w-48 bg-white/5 rounded-xl"></div>
        <div className="h-10 w-32 bg-white/5 rounded-xl"></div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-white/5 rounded-3xl"></div>
        ))}
      </div>

      {/* Chart Skeleton */}
      <div className="h-96 bg-white/5 rounded-3xl"></div>

      {/* List Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-white/5 rounded-2xl"></div>
        ))}
      </div>
    </div>
  );
}
