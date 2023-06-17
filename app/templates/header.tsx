import Link from "next/link";

function Header() {
    return (
        <div className='navigation'>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/csr"}>CSR</Link>
          <Link href={"/ssr"}>SSR</Link>
          <Link href={"/ssg"}>SSG</Link>
        </div>
    );
}

export default Header;