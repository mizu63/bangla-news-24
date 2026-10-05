import Image from "next/image";
import Link from "next/link";
interface News {
  title: string;
  id: string;
  description: string;
  category: string;
  imageUrl: string;
  lastPublished?: string;
}

const Mainnews = ({ news }: { news: News[] }) => {
  const [fristnews, ...othernews] = news
  //   const othernews= news.slice(1);
  //   console.log(othernews)
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Left */}
      <Link href={`/news/${fristnews.id}`}>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              width={400}
              height={400}
              src={fristnews.imageUrl}
              alt={fristnews.title}
              className="w-full h-64 object-cover"
            />
          </figure>

          <div className="card-body">
            <p className="text-red-600 font-semibold">
              {fristnews.category}
            </p>

            <h2 className="card-title">
              {fristnews.title}
            </h2>

            <p>{fristnews.description}</p>

            <p>
              {fristnews.lastPublished &&
                new Date(fristnews.lastPublished).toLocaleDateString("bn-BD", {
                  dateStyle: "full",
                })}
            </p>
          </div>
        </div>
      </Link>

      {/* Right */}
      {/* <div className="grid gap-2">
    {othernews.slice(0, 4).map((newsitem, index) => (
      <div
        key={index}
        className="card bg-base-100 border border-gray-300 p-3 shadow-sm"
      >
        <p className="text-red-600 font-semibold">
          {newsitem.category}
        </p>

        <h2 className="text-lg">
          {newsitem.title}
        </h2>
      </div>
    ))}
  </div> */}
      <div className="grid gap-2">
        {othernews.slice(0, 4).map((on) => (
          <Link
            key={on.id}
            href={`/news/${on.id}`}
          >
            <div className="card bg-base-100 border border-gray-300 p-3 shadow-sm hover:shadow-md transition">
              <p className="text-red-600 font-semibold">
                {on.category}
              </p>

              <h2 className="text-lg">
                {on.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mainnews;