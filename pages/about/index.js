import  Router  from "next/router"
import Head from "next/head"
import { MainLayout } from "../components/MainLayout"

export default function About(){

    const linkClickHandler=()=>{
        Router.push('/')
    }
    return(
        <MainLayout>
            <Head>
                <title>About</title>
            </Head>
            <h1>About Page</h1>

            <button onClick={linkClickHandler}>Go back to home </button>
            <button onClick={()=>Router.push('/posts')}>Go  to posts inline </button>
        </MainLayout>
        
    )
}