import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Client } from "@notionhq/client";
import { Card } from "@/components/Card";
import { Nav } from "@/components/Nav";
import { getDatabase } from "@/lib/notion";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ database }) {
  const navItems = ["users", "blocks"];
  return (
    <>
      <Head>
        <title>Notion testing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav items={navItems} />
        <hr />
        <section>
          <h1>Rest API Test (Page)</h1>
          {database.map((d, i) => (
            <ul className="cards" key={i}>
              <li>
                <Link href={`/page/${d.id}`}>
                  <Card {...d} />
                </Link>
              </li>
            </ul>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const database = await getDatabase();

  return {
    props: {
      database,
    },
    revalidate: 1,
  };
}
