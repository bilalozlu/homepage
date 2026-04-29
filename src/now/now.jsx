import ThemeToggle from "../theme-toggle/ThemeToggle";

function Now() {

    return (
        <div className="now">
            <ThemeToggle />
            <a className="nameTitle" href="../"> ◁ Bilal ÖZLÜ</a>
            <h2>Now</h2>
            <p>{'\u2022'} Working as a full-stack software engineer at TÜBİTAK, in Ankara </p>
            <p>{'\u2022'} Rediscovering the World with my 3 year old daughter </p>
            <p>{'\u2022'} Reading 'Effective Java' </p>
            <p>{'\u2022'} Striving to get Meta front-end developer professional certificate </p>
            <p>{'\u2022'} Trying to figure out how to use AI agents most effectively in a safe manner </p>
            <p>{'\u2022'} Also, trying to figure out how will be the software development in the future </p>
            <p className="footerText">
                <i>Inspired by Derek Siver's <a href="https://nownownow.com/about" style={{color: '#ff4d5a'}}>now</a> page movement. Last updated: April 2026.</i>
            </p>
        </div>
    );
}

export default Now;
