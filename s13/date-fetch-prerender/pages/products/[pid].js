import fs from "node:fs/promises";
import path from "node:path";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>No product found</p>;
  }

  return <h1>{loadedProduct.title}</h1>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const productIds = data.products.map((product) => product.id);

  return {
    paths: productIds.map((productId) => ({ params: { pid: productId } })),
    fallback: true 
  };
}

async function getData() {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);
    return data;
}
