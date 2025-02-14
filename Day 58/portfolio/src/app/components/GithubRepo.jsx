'use client';

function GithubRepo({ data }) {
  return (
    <div>
      {data.map((data, index) => {
        return <div key={index}>{data.name}</div>;
      })}
    </div>
  );
}

export default GithubRepo;
