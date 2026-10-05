
import Card from "@/component/Card";
import Mainnews from "@/component/Mainnews";
import MostRead from "@/component/MostRead";
interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}
export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();
  const sections = data.data;
  const mainnews = sections[0].articles;
  const othernews:IOtherSection[] = sections.slice(1)

  return (
    <div>
      <div className="grid grid-cols-3 mt-4 gap-2">
        <div className="col-span-2 ">
          <Mainnews news={mainnews} />
        <div className="grid gap-5 mt-4">
            {
            othernews.map((item, index) => (
              <div key={index} >
                <h2 className="text-lg font-bold mb-2 border-b-4 border-red-700 pb-2 rounded-sm">{item.title}</h2>
              <div className="grid grid-cols-3 gap-2">
                  {
                  item.articles.map(news => 
                  <Card key={news.id} news={news}/>)
                }
              </div>
              </div>
            ))
          }
        </div>
        </div>

        <div className="col-span-1 rounded-2xl ">

          <MostRead/>
        </div>
      </div>
    </div>
  );
}