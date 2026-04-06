import react from 'react';

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols [16rem_1fr] h-full gap-12'>
      <div>Naigation</div>
      <div>{children}</div>
    </div>
  );
}