import { Loading } from '@/components/core';
import useRequireAuth from '@/lib/useRequireAuth';

export default function ProtectedPage() {
  const session = useRequireAuth();

  if (!session) return <Loading variant="spinner" />;

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
