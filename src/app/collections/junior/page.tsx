import Item from '@/components/app/collections/shared/item';

async function getJunior() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 5 },
  });
  return res
    .json()
    .then((result) => result.filter((p: any) => p.albumId === 2))
    .then((result) => ({
      time: new Date().toISOString(),
      data: result,
    }));
}

export default async function Page() {
  const data = await getJunior();
  const { data: items } = data;
  return (
    <div className="container grid grid-cols-3 mt-8">
      {items.map((item: any) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
