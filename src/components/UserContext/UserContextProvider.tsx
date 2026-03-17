// import { useState } from 'react';
import { UserCtx } from './usercontext';
// import App from '@/App';

const UserCtxProvider = ({ children }: { children: React.ReactNode }) => {
  const name = 'Tochi';
  return <UserCtx.Provider value={name}>{children}</UserCtx.Provider>;
};

export default UserCtxProvider;
