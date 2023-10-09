import { useState } from 'react'

import Layout from "../components/layout";


export default function Admin(){
    const [isLogin, setIsLogin] = useState(false);
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/ccccccjson'}),
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        })
        if (response.user){
            setIsLogin(true);
        }
    }

    return (
        <Layout isLogin>
            <h1 className="text-lg font-bold">Admin Login</h1>
            <form onSubmit={onSubmit}>
                <label for="user" >Username</label>
                <input name="user" className="border-solid `border-black"/>
                <label for="password">Password</label>
                <input name="password" className="border-solid border-black"/>
                <button className="border-solid border-black" type="submit">Login</button>
            </form>
        </Layout>
    )
}``