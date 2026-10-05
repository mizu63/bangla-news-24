
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-xl text-center">

        {/* 404 */}
        <div className="relative mb-6">
          <h1 className="text-[120px] font-black leading-none tracking-tight text-red-600 sm:text-[160px]">
            404
          </h1>

          <div className="absolute inset-x-0 bottom-2 mx-auto h-3 w-40 rounded-full bg-red-100 blur-sm"></div>
        </div>

        {/* Content */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
            📰
          </div>

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            পেজটি খুঁজে পাওয়া যায়নি!
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            দুঃখিত, আপনি যে সংবাদ বা পেজটি খুঁজছেন সেটি
            হয়তো সরিয়ে ফেলা হয়েছে অথবা ঠিকানাটি ভুল।
          </p>

          {/* Button */}
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
          >
            <span>←</span>
            হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* Brand */}
        <p className="mt-6 text-sm text-slate-400">
          <span className="font-bold text-slate-600">Bangla</span>{" "}
          <span className="font-bold text-red-600">News 24</span>
        </p>
      </div>
    </main>
  );
}

