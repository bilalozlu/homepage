import ThemeToggle from "../theme-toggle/ThemeToggle";

function Now() {

    return (
        <div className="now">
            <ThemeToggle />
            <a className="nameTitle" href="../"> ◁ Bilal ÖZLÜ</a>
            <h2>Now</h2>
            <p>{'\u2022'}asd</p>
            <p>{'\u2022'}qwe</p>
            <p>{'\u2022'}zxc</p>
            <p className="footerText"><i>Inspired by Derek Siver's nonnownow. Last updated July 2025.</i></p>
        </div>
    );
}

export default Now;
