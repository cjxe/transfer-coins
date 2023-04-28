import { Loading } from '@/components/core';
import useRequireAuth from '@/lib/useRequireAuth';

export default function ProtectedPage() {
  const session = useRequireAuth();

  // not loaded yet
  if (!session) {
    return <Loading variant="spinner" />;
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page (sg)</h1>
      <p>
        <strong>
          welcome back {session.user.name} - {session.user.email}
        </strong>
      </p>
    </div>
  );
}
