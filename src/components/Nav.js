import Link from "next/link";

export const Nav = ({ items }) => (
  <ul className="nav">
    {items.map((item, i) => {
      const link = item === "back" ? "" : item;
      return (
        <li key={i}>
          <Link href={`/${link}`}>{item}</Link>
        </li>
      );
    })}
  </ul>
);
