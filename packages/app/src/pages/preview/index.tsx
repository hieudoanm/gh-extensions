import { GitHubSocialPreview } from '@gh/components/GitHubSocialPreview';
import { Divider } from '@gh/components/Divider';
import { Navbar } from '@gh/components/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';

const PreviewPage: NextPage = () => {
  const [
    {
      name = 'Hieu Doan',
      description = 'GitHub Profile',
      repository = 'hieudoanm/hieudoanm',
    },
    setState,
  ] = useState<{
    name: string;
    description: string;
    repository: string;
  }>({
    name: 'Hieu Doan',
    description: 'GitHub Profile',
    repository: 'hieudoanm/hieudoanm',
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <Divider />
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <input
              id="name"
              name="Name"
              placeholder="Name"
              className="input"
              value={name}
              onChange={(event) => {
                setState((previous) => ({
                  ...previous,
                  name: event.target.value,
                }));
              }}
            />
            <input
              id="description"
              name="Description"
              placeholder="description"
              className="input"
              value={description}
              onChange={(event) => {
                setState((previous) => ({
                  ...previous,
                  description: event.target.value,
                }));
              }}
            />
            <input
              id="repository"
              name="Repository"
              placeholder="repository"
              className="input"
              value={repository}
              onChange={(event) => {
                setState((previous) => ({
                  ...previous,
                  repository: event.target.value,
                }));
              }}
            />
          </div>
          <GitHubSocialPreview
            name={name}
            repository={repository}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
