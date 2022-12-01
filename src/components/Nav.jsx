import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={`contacts/1`}>Your Name</Link>
        </li>
        <li>
          <Link href={`contacts/2`}>Your Friend</Link>
        </li>
      </ul>
    </nav>
  );
}
