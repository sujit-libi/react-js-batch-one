// https://api.github.com/users/sujit-libi/repos
import GithubRepo from '../components/GithubRepo';

async function page() {
  const response = await fetch('https://api.github.com/users/sujit-libi/repos');
  const data = await response.json();
  console.log(data);

  return <GithubRepo data={data} />;
}

export default page;
