export default function Form() {
  return (
    <form>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="search"
        placeholder="Search"
        className="h-8 rounded p-1"
      />
    </form>
  );
}
