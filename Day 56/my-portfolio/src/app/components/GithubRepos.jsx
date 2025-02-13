import { Bar } from 'react-chartjs-2';

const GitHubRepos = ({ repos }) => {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="bg-white border rounded-lg p-4 w-80 hover:border-green-400 cursor-pointer"
        >
          <h3 className="text-xl font-bold">{repo.name}</h3>
          <p className="text-gray-600">{repo.description}</p>
          {/* <span className="block mt-2 font-semibold">
            Commits: {repo.commits_url.split('/').length}
          </span> */}
          <span className="text-white mt-2 font-regular text-xs bg-green-400 py-0.5 px-1 rounded-sm">
            {repo.language}
          </span>
          <span className="text-white mt-2 ml-2 font-regular text-xs bg-blue-400 py-0.5 px-1 rounded-sm">
            {repo.visibility}
          </span>
          {/* <Bar
            data={{
              labels: ['Commits'],
              datasets: [
                {
                  label: 'Commits',
                  data: [repo.size],
                  backgroundColor: 'blue',
                },
              ],
            }}
          /> */}
        </div>
      ))}
    </div>
  );
};

export default GitHubRepos;
