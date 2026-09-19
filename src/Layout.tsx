export default function Layout({ children }: { children: any }) {
  return (
    <main className="flex">
      {children}
    </main>
  );
}