

const Loading = () => {
  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Loading Header */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-8 w-1 animate-pulse rounded-full bg-red-600"></div>

          <div className="h-7 w-48 animate-pulse rounded-lg bg-slate-200"></div>
        </div>

        {/* Skeleton Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="h-52 w-full animate-pulse bg-slate-200"></div>

              {/* Content */}
              <div className="space-y-4 p-5">
                <div className="h-4 w-24 animate-pulse rounded bg-red-100"></div>

                <div className="space-y-2">
                  <div className="h-5 w-full animate-pulse rounded bg-slate-200"></div>
                  <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200"></div>
                </div>

                <div className="space-y-2">
                  <div className="h-3 w-full animate-pulse rounded bg-slate-100"></div>
                  <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100"></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="h-3 w-20 animate-pulse rounded bg-slate-100"></div>
                  <div className="h-8 w-20 animate-pulse rounded-lg bg-red-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Text */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-red-600"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:150ms]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:300ms]"></div>

          <span className="ml-2 text-sm font-medium text-slate-500">
            সংবাদ লোড হচ্ছে...
          </span>
        </div>

      </div>
    </main>
  );
};

export default Loading;
