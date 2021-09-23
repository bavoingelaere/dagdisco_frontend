// import { Link } from "react-router-dom";
// import { ROUTES } from "../consts";

import { useEffect, useState } from "react";

const Team = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`https://dagdisco.herokuapp.com/teams`)
        .then(response => response.json())
        .then(data => setTeams(data.reverse()))
    }, [])

    teams.sort(function (a, b) {
        var textA = a.team_name.toUpperCase();
        var textB = b.team_name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(teams);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target.team.value;
        const team = teams.filter(team => parseInt(team.id) === parseInt(id));

        const data = {
            beers: parseInt(e.target.amount.value) + parseInt(team[0].beers)
        };

        e.target.reset();
        onSubmit(data, id);
    };


    const onSubmit = async (data, id) => {
        console.log(data);
        console.log(`https://dagdisco.herokuapp.com/teams/${id}`);

        const response = await fetch(
            `https://dagdisco.herokuapp.com/teams/${id}`,
            {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            console.log('joepie');
        }
    };


    return (
        <>
            <div className="team">
                {/* <Link className="link" to={ROUTES.HOME}>Score board</Link> */}
                <form className="team_form" onSubmit={(e) => handleSubmit(e)}>
                    <h1 className="team_form_title">Welk team?</h1>
                    <div className="options">

                        {teams.map((team, index) => <div className="teamdiv" key={index}>
                        <input required id={team.id} type="radio" className="radio" name="team" value={team.id}></input>
                            <label className="option" htmlFor={team.id}>{team.team_name}</label>
                        </div>)}

                        {/* <input required id="poesduikers" type="radio" className="radio" name="team" value="poesduikers"></input>
                        <label className="option" htmlFor="poesduikers">poesduikers</label>
                        <input required id="test1" type="radio" className="radio" name="team" value="test1"></input>
                        <label className="option" htmlFor="test1">test1</label>
                        <input required id="test2" type="radio" className="radio" name="team" value="test2"></input>
                        <label className="option" htmlFor="test2">test2</label>
                        <input required id="test3" type="radio" className="radio" name="team" value="test3"></input>
                        <label className="option" htmlFor="test3">test3</label>
                        <input required id="test4" type="radio" className="radio" name="team" value="test4"></input>
                        <label className="option" htmlFor="test4">test4</label>
                        <input required id="test5" type="radio" className="radio" name="team" value="test5"></input>
                        <label className="option" htmlFor="test5">test5</label>
                        <input required id="test6" type="radio" className="radio" name="team" value="test6"></input>
                        <label className="option" htmlFor="test6">test6</label>
                        <input required id="test7" type="radio" className="radio" name="team" value="test7"></input>
                        <label className="option" htmlFor="test7">test7</label>
                        <input required id="test8" type="radio" className="radio" name="team" value="test8"></input>
                        <label className="option" htmlFor="test8">test8</label>
                        <input required id="test9" type="radio" className="radio" name="team" value="test9"></input>
                        <label className="option" htmlFor="test9">test9</label>
                        <input required id="test0" type="radio" className="radio" name="team" value="test0"></input>
                        <label className="option" htmlFor="test0">test0</label> */}
                        
                    </div>
                    <div className="number_container">
                        <input className="amount" type="number" name="amount" required></input>
                        <div className="team_form_submit_container">
                        <input className="team_form_submit" type="submit" value="SAVE"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>

    );
};

export default Team;