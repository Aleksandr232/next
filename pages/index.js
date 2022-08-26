import Link from "next/link";


export default function Index() {
  return (
    <>
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
