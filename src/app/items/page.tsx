import Link from "next/link";
import api from "../services/api";

export default async function ItemsPage({ searchParams}: { searchParams: { search: string }}) {
  const { results } = await api.item.search(searchParams.search)

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
