import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
    <Head>
        <title>Next</title>
        <meta name="keywords" content="next, javascript, react" />
        <meta name="description" content="next tutorial" /> 
        <meta charSet="utf-8" />
    </Head>
      <h1>Hello next.js</h1>
      <p><Link href={'/about'} ><a>About</a></Link></p>
      <p><Link href={'/posts'} ><a>Post</a></Link></p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        aperiam ipsa expedita. Cupiditate quaerat animi harum nemo, nam
        exercitationem distinctio dolores dolore laboriosam nulla cumque
        repellat, ab porro odit? Sequi!
      </p>
    </>
  );
}
