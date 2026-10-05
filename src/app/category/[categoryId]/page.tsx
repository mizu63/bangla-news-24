
import Card from "@/component/Card";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  lastPublished?: string;
}

interface CategoryPageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category news");
  }

  const data = await res.json();
  const categorynews: News[] = data.data;

  return (
    <div>
      <h1 className="mb-5 border-b-2 border-red-700 text-2xl font-bold p-3">
        {data.title}
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categorynews.map((news) => (
          <Card key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

