import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found page</h2>
      <p>Could not find requested resource</p>
      <Link href="/en">Return Home</Link>
    </div>
  );
}