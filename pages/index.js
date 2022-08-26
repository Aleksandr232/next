import Link from "next/link";
import { MainLayout } from "./components/MainLayout";

export default function Index() {
  return (
    <MainLayout title='Home'>
      <h1>Hello next.js</h1>
      <p><Link href={'/about'} ><a>About</a></Link></p>
      <p><Link href={'/posts'} ><a>Post</a></Link></p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        aperiam ipsa expedita. Cupiditate quaerat animi harum nemo, nam
        exercitationem distinctio dolores dolore laboriosam nulla cumque
        repellat, ab porro odit? Sequi!
      </p>
    </MainLayout>
  );
}
