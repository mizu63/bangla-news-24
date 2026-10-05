import Link from 'next/link';
interface Navs {
    title: string;
    slug: string;
    scrapable: boolean;
    url: string;
    topicId:string | null;
}

const Navlinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs: Navs[] = data.data;
      const filteredNavlinks = navs.filter((n) => n.scrapable);
    return (
        <div className="flex  justify-center gap-5 mt-5 ">
      <Link href={"/"}>
        হোম
      </Link>
            {filteredNavlinks.map((n, i) => (

                <Link key={i}href={`/category/${n.slug}`}>
                    {n.title}
                </Link>
            ))}
        </div>
    );
};

export default Navlinks;