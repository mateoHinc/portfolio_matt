export default function Footer({ t, name }) {
  return (
    <footer className="py-8 text-neutral-500 text-sm text-center">
      {t.footer(name)}
    </footer>
  );
}
