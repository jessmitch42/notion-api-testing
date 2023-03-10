import Link from "next/link";

export const Nav = () => (
  <ul className="nav">
    <li>
      <Link href="/users">Users</Link>
    </li>
    <li>
      <Link href="/blocks">Blocks</Link>
    </li>
  </ul>
);
