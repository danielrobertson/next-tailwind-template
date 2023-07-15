export async function MyCustomServerComponent() {
  const response = await fetch("https://dummyjson.com/products/1");
  const product = await response.json();
  return <p>{product.title}</p>;
}
