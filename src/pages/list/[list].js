import Link from "next/link";
import { useRouter } from "next/router";

export default function List() {
  const router = useRouter();
  const { list } = router.query;
  return (
    <div>
      <Link href="/">Back</Link>
      <h1>Page ID: {list}</h1>
    </div>
  );
}
