import {useState, useEffect} from "react"
import { MainLayout } from "./components/MainLayout"



export default function Posts(){
    const [post, setPost]=useState([])

    useEffect(()=>{
        async function load(){
            const response = await fetch('http://localhost:4200/posts')
            const json = await response.json()
            setPost(json)
        }
        load()
    },[])

    return (
    <MainLayout title='Post'>
        <h1>Posts Page</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </MainLayout>
       
    )
}