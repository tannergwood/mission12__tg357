import React from "react";
import logo from "./logo.svg";
import bball from "./bball.jpg";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

const Teams = data.teams;

class TeamInfo extends React.Component<{
  school: string;
  name: string;
  city: string;
  state: string;
}> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          From: {oneTeam.city}, {oneTeam.state}
        </h3>
        <br />
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {Teams.map((oneTeam) => (
        <TeamInfo {...oneTeam} />
      ))}
    </div>
  );
}

function Ffooter() {
  return (
    <div>
      <p>Made By: Tanner Greenwood</p>
    </div>
  );
}

function Hheader() {
  return (
    <div>
      <h1>March Madness Schools</h1>
      <p>
        This site lists out Schools, their mascots, and their locations that
        have participated in March Madness
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bball} className="App-logo" alt="logo" width="200" />
        <Hheader />
      </header>
      <body className="App-header">
        <TeamList />
      </body>
      <footer className="App-header">
        <Ffooter />
      </footer>
    </div>
  );
}

export default App;
