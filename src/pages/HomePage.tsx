import { useEffect, useState } from "react"
import axios from 'axios'
import { RestaurantsCard } from "@/partials/RestaurantsCard";

export interface RestaurantType {
    id: number;
    name: string;
    label: string;
    phone: string;
    address: string;
    logo: string;
    rank: number;
    is_active: boolean;
    created_date: string;
    updated_date: string;
}



export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        axios.get('https://apionlinemenu.salicode.ir/api/v1/restaurants/')
            .then(response => {
                setRestaurants(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
                setError(error)
            });
    }, [])

    if (loading) {
        return <div>laoding ...</div>
    }
    if (error) {
        return <div className="bg-red-500 w-full">ERROR: {error}</div>
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
            {restaurants.map((restaurant, index) => {
                return (
                    <div key={index}>
                        <RestaurantsCard restaurant={restaurant} />
                    </div>
                )
            })}

        </div>

    )
}
