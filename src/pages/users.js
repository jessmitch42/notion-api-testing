import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { Client } from "@notionhq/client";
import { Card } from "@/components/Card";

export default function Users({ users }) {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/">Back</Link>
        <h1>Users</h1>
        <ul>
          {users.map((u, i) => (
            <Card key={i} {...u} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.users.list();
  console.log(response);
  return {
    props: {
      users: response.results,
    },
    revalidate: 1,
  };
}
