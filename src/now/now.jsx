import ThemeToggle from "../theme-toggle/ThemeToggle";

function Now() {

    return (
        <div className="now">
            <ThemeToggle />
            <a className="nameTitle" href="../"> ◁ Bilal ÖZLÜ</a>
            <h2>Now</h2>
            <p>{'\u2022'} Working as a software engineer at ASELSAN, in Ankara </p>
            <p>{'\u2022'} Pursuing a master's degree in Computer Engineering at Hacettepe University  </p>
            <p>{'\u2022'} Striving to get Meta front-end developer professional certificate </p>
            <p>{'\u2022'} Trying to figure out how to use AI agents most effectively in a safe manner </p>
            <p>{'\u2022'} Also, trying to figure out how will be the software development in the future </p>
            <p className="footerText">
                <i>Inspired by Derek Siver's <a href="https://nownownow.com/about" style={{color: '#ff4d5a'}}>now</a> page movement. Last updated: October 2026.</i>
            </p>
        </div>
    );
}

export default Now;
