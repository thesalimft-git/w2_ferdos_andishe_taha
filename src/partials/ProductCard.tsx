type Product = {
  name: string;
  price: number; 
  color: string;
}

type ProductCardProps = {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="border-2 rounded-lg p-5">
            <h1>{product.name}</h1>
            <button>${product.price}</button>
            <button>{product.color}</button>
        </div>
    )
}

