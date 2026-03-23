import React from 'react';
import Navigation from '../components/Navigation';
import Counter from '../components/Counter';

export default async function page() {
  const res = await fetch("example.com");
  const data = await res.json();
  
  return (
    <div>
      <h1>Cabins page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Counter users={users}/>
    </div>
  );
}
