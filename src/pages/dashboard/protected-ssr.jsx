import { getSession, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

export default function ProtectedPage() {
  const { data: session } = useSession();

  // If no session exists, display access denied message
  // if (!session) {
  //   return (
  //     <div>
  //       <p>Access denied (ssr)</p>
  //     </div>
  //   );
  // }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page (ssr)</h1>
      <p>
        <strong>
          welcome back {session.user.name} - {session.user.email}
        </strong>
      </p>
    </div>
  );
}

// This function gets called at every request (not at build time like getStaticProps)
// its slower than Static Generation, so use this only if absolutely necessary
export async function getServerSideProps(context) {
  // Get the user's session based on the request
  const session = await getSession(context);

  // If no session exists, return an empty object
  if (!session) {
    return { props: {} };
  }

  // If session exists, return the current session
  return {
    props: { session: await getServerSession(context.req, context.res, authOptions) },
  };
}
