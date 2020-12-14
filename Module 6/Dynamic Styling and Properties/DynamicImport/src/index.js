import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GitHubEventApp from "./GitHubEventApp";
import registerServiceWorker from "./registerServiceWorker";

fetch(`https://api.github.com/users/dance2die/events/public`)
  .then(response => response.json())
  .then(events => {
    console.log("index.js events", events);

    ReactDOM.render(
      <GitHubEventApp events={events} />,
      document.getElementById("root")
    );
  });

registerServiceWorker();
