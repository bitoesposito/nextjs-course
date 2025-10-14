import Link from 'next/link';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products && products.map((product) => (
        <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const fs = await import('node:fs/promises');
  const path = await import('node:path');
  
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10
  };
}

export default HomePage;