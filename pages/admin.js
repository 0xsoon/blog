import Layout from "../components/layout";
import { setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {wrapper} from "../store/store";


export default function Admin(){
    const {authState} = useSelector(state => state);
    const dispatch = useDispatch();

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(Object.fromEntries(formData.entries()))
        })

        if (response.user){
            dispatch(setAuthState(true));
        } else {
            dispatch(setAuthState(false));
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
            <div>{authState ? "Logged in" : "Not Logged In"}</div>
        </Layout>
    )
}