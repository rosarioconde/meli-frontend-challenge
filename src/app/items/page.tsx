import Link from "next/link";

export default async function ItemsPage({ searchParams}: { searchParams: { search: string }}) {
  const { results } = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}`).then(res => res.json() as Promise<{
    results: {
      id: string;
      title: string;
      thumbnail: string;
      price: number;
      currency_id: string;
      seller_address: {
        city: {
          name: string;
      }
    }
    }[]
   }>)


  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <Link href={`/items/${item.id}` } key={item.id} className='flex gap-4'>
              <img src={item.thumbnail} alt={item.title} />
              <div>
                <h1 className="text-xl font-bold">{item.title}</h1>
                <h2>{Number(item.price).toLocaleString('es-AR',{
                  style:'currency',
                  currency:item.currency_id,
                  })}</h2>
                <h3>{item.currency_id}</h3>
                <span className="ml-auto text-sm opacity-50 capitalize">
                  {item.seller_address.city.name.toLowerCase()}
                </span>
              </div>
          </Link>
        ))}
      </article>
    </section>
  )
}
