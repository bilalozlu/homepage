import ThemeToggle from "../theme-toggle/ThemeToggle";

function Solutions() {
  const solutionsList = [
    {
      problem: "Couldn't call a function by storage event",
      solution: "solution will be here soon",
      links: ["https://stackoverflow.com/questions/35865481/storage-event-not-firing"],
      tags: "#javascript #localStorage #event",
      date: "24.07.2025"
    },
  ]
  return (
    <div className="solutions">
      <ThemeToggle />
      <a className="nameTitle" href="../"> ◁ Bilal ÖZLÜ</a>
      <h2>Solutions</h2>
      {solutionsList.map((data) =>
        <div className='solutionsList'>
          <p>
            <b>Problem definition:</b> {data.problem}
          </p>
          <p>
            <b>Solution:</b> {data.solution}
          </p>
          {
            data.links.map((link, idx) =>
              <span>
                <b>Source{idx+1}:</b> <a style={{color: '#ff4d5a'}} href={link}>{link}</a>
              </span>
            )
          }
          <p>{data.date}</p>
          <p>{data.tags}</p>
          <hr/>
        </div>
      )}
    </div>
  );
}

export default Solutions;
