import ProductCard from "@/partials/ProductCard"

let products = [
  { name: 'car', price: 100, color: 'red' },
  { name: 'phone', price: 200, color: 'blue' },
  { name: 'cloth', price: 300, color: 'red' },
  { name: 'house', price: 150, color: 'yellow' },
  { name: 'car', price: 120, color: 'white' }
]


export default function DashboardPage() {
  return (
    <div className="border-2 p-20 mx-auto">
      <div className="flex gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}