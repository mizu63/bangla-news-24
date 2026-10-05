
import Image from "next/image";
import Link from "next/link";
interface News {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  lastPublished?: string;
}

interface CardProps {
  news: News;
}
const Card = ({ news }: CardProps) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card h-full bg-base-100 shadow-md transition-shadow duration-300 hover:shadow-lg">
        <figure className="px-3 pt-3">
          <Image
            width={400}
            height={240}
            src={news.imageUrl}
            alt={news.title}
            className="h-44 w-full rounded-lg object-cover sm:h-48"
          />
        </figure>

        <div className="card-body gap-2 p-3">
          <p className="text-sm font-semibold text-red-600">
            {news.category}
          </p>

          <h2 className="card-title text-base leading-snug">
            {news.title}
          </h2>

          <p className="line-clamp-3 text-sm text-base-content/75">
            {news.description}
          </p>

          <div className="mt-1 border-t border-base-300 pt-2">
            <p className="text-xs text-base-content/60">
              {news.lastPublished &&
                new Date(news.lastPublished).toLocaleDateString("bn-BD", {
                  dateStyle: "full",
                })}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

