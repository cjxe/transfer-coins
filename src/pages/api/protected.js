// This is an example of to protect an API route
import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return res.send({
      content: `This is protected content. You can access this content because you are logged in. Email: ${session.user.email}`,
    });
  }

  return res.send({
    error: 'You must be signed in to view the protected content on this page.',
  });
}
