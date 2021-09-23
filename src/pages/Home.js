import { Link } from "react-router-dom";
import { ROUTES } from "../consts";
import { useEffect, useState } from "react";

const Home = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`https://dagdisco.herokuapp.com/teams`)
      .then(response => response.json())
      .then(data => setTeams(data.reverse()))
  }, [])

  teams.sort(function (a, b) {
    var textA = parseInt(a.beers);
    var textB = parseInt(b.beers);
    return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
  });
  console.log(teams);

  return (
    <div className="home">
      <section className="section">
        <div className="landing">
          <h1 className="dagdisco">Dag - <br></br> disco</h1>
          <p className="emoji">🕺</p>
          <p className="sub">/ Scouts Tielt</p>

        </div>
      </section>

      <section className="section">
        <div className="action">
          <p className="going_once">Going once</p>
          <p className="going_twice">Going twice...</p>


          <div className="news-banner">
            <div className="scroll-left">
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
              <span className="spacing">——</span>
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
              <span className="spacing">——</span>
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
              <span className="spacing">——</span>
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
              <span className="spacing">——</span>
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
              <span className="spacing">——</span>
              <span className="spacing">15 pinten = 10 EURO 🍺🍺</span>
            </div>
          </div>
          <div className="timer_container">
            <p className="timer_text">New action in</p>
            <p className="timer_timer">14:23</p>
          </div>
        </div>
      </section>

      <section className="section section_board">
        <div className="scoreboard">
          {/* <svg className="scoreboard_drag" xmlns="http://www.w3.org/2000/svg" width="97.081" height="22.92" viewBox="0 0 97.081 22.92">
            <g id="Group_9" data-name="Group 9" transform="translate(-165.459 -594.08)">
              <path id="Line_1" data-name="Line 1" d="M97.081,1.5H0v-3H97.081Z" transform="translate(165.459 608.32)" fill="#3c3c3c" />
              <path id="Line_2" data-name="Line 2" d="M97.081,1.5H0v-3H97.081Z" transform="translate(165.459 615.5)" fill="#3c3c3c" />
              <path id="Polygon_1" data-name="Polygon 1" d="M15.5,0,31,9H0Z" transform="translate(199 594.08)" fill="#3c3c3c" />
            </g>
          </svg> */}



          <h2 className="scoreboard_title">zuipbeker</h2>
          <Link className="scoreboard_join" to={ROUTES.ABOUT}>Deelnemen!</Link>
          <ol className="scoreboard_list">

            {teams.map((team, index) =>
              <li key={index} className={`scoreboard_list_item scoreboard_list_item_${index + 1}`}><div className={`scoreboard_list_item_dec scoreboard_list_item_de scoreboard_list_item_dec scoreboard_list_item_dec_${index + 1}`}><span>{index + 1}</span></div>{team.team_name}<span className="scoreboard_list_item_beers">{team.beers}</span></li>
            )}


          </ol>
        </div>
      </section>

      {/* <Link className="link" to={ROUTES.ABOUT}>Deelnemen</Link> */}
    </div>
  );
}

export default Home;