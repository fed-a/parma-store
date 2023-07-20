import Item from '@/components/app/collections/shared/item';

async function getSport() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    next: { revalidate: 5 },
  });
  return res
    .json()
    .then((result) => result.filter((p: any) => p.albumId === 3))
    .then((result) => ({
      time: new Date().toISOString(),
      data: result,
    }));
}

export default async function Page() {
  const data = await getSport();
  const { data: items } = data;
  return (
    <div className="container grid grid-cols-3 mt-8">
      {items.map((item: any) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
