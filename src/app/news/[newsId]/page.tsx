
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetailsPage = async ({ params }: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen py-10 md:py-16">
      <article className="max-w-5xl mx-auto px-4">

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">

          {/* Category */}
          <div className="mb-5">
            <span className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              {news.topics?.[0]?.name || "News"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-6">
            {news.title}
          </h1>

          {/* Author */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
            {news.byline?.[0]?.name && (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                  {news.byline[0].name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-700">
                    {news.byline[0].name}
                  </p>

                  <p className="text-xs">
                    {news.byline[0].role}
                  </p>
                </div>
              </div>
            )}

            <span className="hidden md:block text-slate-300">•</span>

            {news.firstPublished && (
              <p>
                {new Date(news.firstPublished).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>

          {/* Main Image */}
          {news.imageUrl && (
            <div className="relative w-full h-[280px] md:h-[520px] overflow-hidden rounded-2xl mb-8">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-5 md:p-6 mb-10">
            <p className="text-lg md:text-xl font-medium leading-8 text-slate-700">
              {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
            </p>
          </div>

          {/* Article Body */}
          <div className="max-w-4xl mx-auto">
            {news.body?.map((item: any, index: number) => {

              // Image
              if (item.type === "image") {
                return (
                  <figure key={index} className="my-10">
                    <div className="overflow-hidden rounded-2xl shadow-sm">
                      <Image
                        src={item.url}
                        alt={item.altText || item.caption || ""}
                        width={item.width || 1024}
                        height={item.height || 600}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {item.caption && (
                      <figcaption className="text-sm text-slate-500 mt-3 px-2">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              // Subheading
              if (item.type === "subheading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-5 pb-3 border-b border-slate-200"
                  >
                    {item.text}
                  </h2>
                );
              }

              // Paragraph
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="text-[17px] md:text-lg leading-8 text-slate-700 mb-6"
                  >
                    {item.text}
                  </p>
                );
              }

              return null;
            })}
          </div>

          {/* Tags */}
          {news.tags?.length > 0 && (
            <div className="border-t border-slate-200 mt-12 pt-8">
              <h3 className="font-bold text-lg text-slate-800 mb-4">
                Related Topics
              </h3>

              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Source */}
          {news.source && (
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500">
                Source:{" "}
                <span className="font-semibold text-slate-700">
                  {news.source}
                </span>
              </p>
            </div>
          )}

        </div>
      </article>
    </main>
  );
};

export default NewsDetailsPage;

