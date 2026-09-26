import { Eye } from "lucide-react"
import { useState } from "react"



export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')




    function toggleShowPassword() {
        setShowPassword(!showPassword)
        console.log(showPassword)

        console.log(username, password, confirmPassword);
    }


    

    return (
        <div className="w-full">
            <div className="border rounded-md w-md mx-auto mt-5 p-5">
                <form action="" className="grid gap-4">
                    <div>
                        <label className="w-1/4 inline-block" htmlFor="username">Username</label>
                        <input className="w-2/4 inline-block border border-gray-400 rounded-md ms-5" type="text" id="username" onChange={(event)=>{setUsername(event?.target.value)}} />
                    </div>
                    <div>
                        <label className="w-1/4 inline-block" htmlFor="password">Password</label>
                        <input className="w-2/4 inline-block border border-gray-400 rounded-md ms-5" type={showPassword ? 'text' : 'password'} id="password" onChange={(event)=>{setPassword(event?.target.value)}} />
                        <Eye size={12} onClick={()=>{toggleShowPassword()}} />
                    </div>
                    <div>
                        <label className="w-1/4 inline-block" htmlFor="confirm-password">Confirm Password</label>
                        <input className="w-2/4 inline-block border border-gray-400 rounded-md ms-5" type={showPassword ? 'text' : 'password'} id="confirm-password" onChange={(event)=>{setConfirmPassword(event?.target.value)}} />
                    </div>
                    <div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-1" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


