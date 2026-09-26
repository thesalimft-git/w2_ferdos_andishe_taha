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


        <ProductCard product="ali" />


        {products.map((product) => {
          return (
            <div key={product.name} className="border-2 rounded-lg p-5">
              <h1>{product.name}</h1>
              <button>${product.price}</button>
              <button>{product.color}</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}