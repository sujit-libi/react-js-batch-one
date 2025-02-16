'use client';
import { Suspense } from 'react';

function GithubRepo({ data }) {
  return (
    <Suspense fallback="Data Fetching hudai 6 hai ">
      <div>
        {data.map((data, index) => {
          return <div key={index}>{data.name}</div>;
        })}
      </div>
    </Suspense>
  );
}

export default GithubRepo;
