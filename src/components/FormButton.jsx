export default function FormButton() {
  return (
    <form method="POST">
      <button
        type="submit"
        className="flex h-8 items-center rounded bg-slate-100 p-2 text-sky-500"
      >
        New
      </button>
    </form>
  );
}
