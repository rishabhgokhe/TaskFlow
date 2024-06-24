import { auth } from '@/auth';
import { useSession, SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

export default async function UserProfile() {
//   const { data: session } = useSession();

  return (
    <div>
      {/* {session?.user?.image && (
        <Image
          src={session.user.image}
          width={30}
          height={30}
          className='rounded-full'
          alt='User Profile Photo'
        />
      )} */}
      <p style={{color: "wheat"}}>hello</p>
    </div>
  );
}
