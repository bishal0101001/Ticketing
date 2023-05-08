import Link from "next/link";

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item mx-1">
          <Link href={href} className="nav-link">
            {label}
          </Link>
        </li>
      );
    });
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand ml-2">
          GitTix
        </Link>
        <div className="d-flex justify-content-end">
          <ul className="nav d-flex align-items-center">{links}</ul>
        </div>
      </div>
    </nav>
  );
};
