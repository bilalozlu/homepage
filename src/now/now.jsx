import ThemeToggle from "../theme-toggle/ThemeToggle";

function Now() {

    return (
        <div className="now">
            <ThemeToggle />
            <a className="nameTitle" href="../"> ◁ Bilal ÖZLÜ</a>
            <h2>Now</h2>
            <p>{'\u2022'} Working as a front-end software engineer at TÜBİTAK, in Ankara</p>
            <p>{'\u2022'} Rediscovering the World with my 2 year old daughter</p>
            <p>{'\u2022'} Reading 'You Don't Know JS Yet' series</p>
            <p>{'\u2022'} Striving to maintain a daily GitHub commit streak</p>
            <p className="footerText">
                <i>Inspired by Derek Siver's <a href="https://nownownow.com/about" style={{color: '#ff4d5a'}}>now</a> page movement. Last updated: July 2025.</i>
            </p>
        </div>
    );
}

export default Now;
