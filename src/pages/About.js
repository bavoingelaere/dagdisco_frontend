// import { Link } from "react-router-dom";
// import { ROUTES } from "../consts";

import { useHistory } from "react-router";

const About = () => {

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const teamName = e.target.name.value.toLowerCase();
    const finalTeamName = teamName.charAt(0).toUpperCase() + teamName.slice(1);

    const data = {
      team_name: finalTeamName,
    };
    e.target.reset();
    onSubmit(data);
  };


  const onSubmit = async (train) => {
    console.log(train);
    const response = await fetch(
      `http://localhost:1337/teams/`,
      {
        method: "POST",
        body: JSON.stringify(train),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log('joepie');
      history.push("/");
    }
  };


  return (
    <>
      <div className="join">
        {/* <Link className="link" to={ROUTES.HOME}>Score board</Link> */}
        <form className="join_form" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="join_form_title">Voor wie mogen we pintjes tappen?</h1>
          <input className="join_form_name"  type="text" name="name" required placeholder="naam van je team"/>
          <p className="join_form_submit_container"><input className="join_form_submit" type="submit" value="JOIN"></input><span className="join_form_submit_beers">🍻</span></p>
        </form>
      </div>
    </>
    
  );
};

export default About;