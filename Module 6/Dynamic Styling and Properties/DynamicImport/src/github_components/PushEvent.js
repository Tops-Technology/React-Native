import React from "react";
import shortid from 'shortid';

const PushEvent = ({ created_at: eventDate, repo, org, actor, payload }) => {
  const { display_login: login, url: actorURL } = actor;
  const { commits } = payload;
  const { name: repoName, url: repoURL } = repo;

  return (
    <div>
      <h3>Push - (<small>{eventDate}</small>)</h3>
      <div>
        <a href={actorURL}>{login}</a> has pushed to{" "}
        <a href={repoURL}>{repoName}</a>
        <Commits commits={commits} />
      </div>
    </div>
  );
};

const Commits = ({commits}) => {
  return (
    <ul>
    {commits.map(commit => (
      <li key={shortid.generate()}>{commit.author.name} has commited with message "{commit.message}"</li>
    ))}
    </ul>
  );
};

export default PushEvent;
