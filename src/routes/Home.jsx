import { Link, Outlet, useLoaderData } from "react-router-dom";
import Button from "../components/FormButton";
import Nav from "../components/Nav";
import Search from "../components/Search";
import { getContacts } from "../services/api.service";

export async function preload() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Home() {
  const { contacts } = useLoaderData();

  return (
    <div className="flex gap-x-24">
      <div className="h-screen w-1/5 bg-gray-300 pl-12">
        <h1>React Router Contacts</h1>
        <div className="flex items-center gap-x-2 border-b border-black pb-4">
          <Search />
          <Button />
        </div>
        <Nav />
      </div>
      <Outlet />

      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <Link to={`contacts/${contact.id}`}>
                {contact.first || contact.last ? (
                  <>
                    {contact.first} {contact.last}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite && <span>★</span>}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </div>
  );
}
