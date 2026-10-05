import Link from "next/link";
import MarqueeText from "react-marquee-text"
// import "react-marquee-text/dist/index.css"
interface News {
  title: string;
  slug: string;
    id: string;
  scrapable: boolean;
  url: string;
  topicId: string | null;
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
  const data = await res.json()
  const newsdata: News[] = data.data
  console.log(newsdata)
  return (
    <div className="bg-red-600 text-white  ">
      <div className="flex mx-auto max-w-7xl items-center gap-2">
        <div className="font-bold bg-red-600 text-white px-2">সর্বশেষ</div>
        <MarqueeText
          direction="right"
          duration={10}
         
          className="text-sm py-1 px-2"
        >
          {newsdata.map((h) => (
            <Link className="hover:underline"
              key={h.id}
              href={`/news/${h.id}`}
            >
              <span>
                <span>{h.title}</span>
                <span className="mx-4">•</span>
              </span>
            </Link>
          ))}
        </MarqueeText>

      </div>
    </div>
  );
};

export default Marquee;