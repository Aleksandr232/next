import NProgress from "next-nprogress/component";



export default function MyApp({Component, pageProps}){
    return(
        <>
        <NProgress
            color="#29d"
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner
            />
        <Component {...pageProps}/>
            <style jsx global>{`
                body{
                    font-family: 'Roboto', sans-serif;
                }
            `}</style>
        </>
    )
}