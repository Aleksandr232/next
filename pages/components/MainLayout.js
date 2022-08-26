import Link from "next/dist/client/link"

export function MainLayout({children}){
    return(
        <>
            <nav>
               <Link href={'/'}><a>Home</a></Link>
               <Link href={'/about'}><a>About</a></Link>
               <Link href={'/posts'}><a>Post</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav{
                    position: fixed;
                    height: 60px;
                    left:0;
                    right:0;
                    background: darkblue;
                    top: 0;
                    display: flex;
                    justify-content: space-around;
                    align-content: center;
                    flex-wrap: wrap;

                }

                nav a{
                    color: #fff;
                    text-decoration: none
                }
            `}</style>
        </>
    )
}