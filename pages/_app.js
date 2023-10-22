import '../styles/tailwind.css'
import {wrapper} from "../store/store";
import React from 'react';


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);