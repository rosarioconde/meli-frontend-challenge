import api from "@/app/services/api"

export default async function ItemPage({params: {id}}: {params: {id: string}}) {
  const item = await api.item.fetch(id)

  return (
    <section className="grid gap-2">
        <img src={item.thumbnail} alt={item.title} />
        <div>
          <h1 className="text-xl font-bold">{item.title}</h1>
          <h2>{Number(item.price).toLocaleString('es-AR',{
            style:'currency',
            currency:item.currency_id,
            })}
          </h2>
          <hr />
          <p className="p-5" >{item.description}</p>
        </div>

    </section>
  )
}
