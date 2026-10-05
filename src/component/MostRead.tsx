import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();
  const readdata: News[] = data.data;

  return (
  
<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
  <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-3">
    <div className="h-7 w-1 rounded-full bg-red-600"></div>

    <h1 className="text-xl font-bold text-gray-800">
      সর্বাধিক পঠিত
    </h1>
  </div>

  <div className="space-y-3">
    {readdata.map((n, i) => (
      <div
        key={n.id}
        className="group flex gap-3 rounded-xl border border-gray-100 p-3 transition-all duration-200 hover:border-red-200 hover:bg-red-50"
      >
    
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-lg font-bold text-red-600 group-hover:bg-red-600 group-hover:text-white">
          {i + 1}
        </div>

        <Link
          href={`/news/${n.id}`}
          className="line-clamp-2 text-sm font-semibold leading-6 text-gray-700 transition-colors group-hover:text-red-600"
        >
          {n.title}
        </Link>
      </div>
    ))}
  </div>
</div>


    // <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-4">
    //   <h2 className="mb-4 text-xl font-bold text-black">
    //     সর্বাধিক পঠিত
    //   </h2>

    //   <div className="space-y-3">
    //     {readdata.slice(0, 10).map((news, index) => (
    //       <a
    //         key={news.id}
    //         href={news.link}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="flex items-start gap-3"
    //       >
    //         <span className="text-xl leading-6 text-red-500">
    //           {index + 1}
    //         </span>

    //         <h3 className="text-base leading-5 text-black hover:text-red-600">
    //           {news.title}
    //         </h3>
    //       </a>
    //     ))}
    //   </div>
    // </div>
  );
};

export default MostRead;

