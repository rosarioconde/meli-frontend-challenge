

export default async function ItemPage({params: {id}}: {params: {id: string}}) {
  const item = await fetch(`https://api.mercadolibre.com/items/${id}`
  ).then(
    res =>
    res.json() as Promise<{
      id: string;
      title: string;
      thumbnail: string;
      price: number;
      currency_id: string;
   }>)

   const {plain_text} = await fetch(`https://api.mercadolibre.com/items/${id}/description`
   ).then(
     res =>
     res.json() as Promise<{
       plain_text: string;
    }>)

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
          <p className="p-5" >{plain_text}</p>
        </div>

    </section>
  )
}
