import Link from "next/link";

import NavLink from "./nav-link";

export default function MainHeader() {

  const links = [
    { href: "/news", label: "News" },
    { href: "/archive", label: "Archive" }
  ]

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
