import Link from "next/link"

const links = [
    {
        href: "#",
        label: "Process",
    },
    {
        href: "#",
        label: "Services",
    },
    {
        href: "#",
        label: "Benefits",
    },
    {
        href: "#",
        label: "Plans",
    },
    {
        href: "#",
        label: "Contact",
    },
]

const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg w-2/3 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 relative">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="text-2xl font-semibold text-white">CoFounds.</span>
        </Link>
        <div className="hidden xl:absolute xl:left-1/2 transform xl:-translate-x-1/2 lg:flex items-center justify-center gap-10 font-semibold">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-lg font-extralight leading-6 text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <button className="leading-6 text-white cursor-pointer text-2xl p-3 rounded-xl bg-blue-700 font-semibold">
            Join Our Community
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header