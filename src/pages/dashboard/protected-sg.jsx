import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>Access denied (ssr)</p>
      </div>
    );
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        <strong>
          Welcome back {session.user.name} - {session.user.email}
        </strong>
      </p>
    </div>
  );
}
