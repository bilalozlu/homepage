import './solutions.css'

function Solutions() {
    const solutionsList = [
        {
            problem: "hello world",
            solution: "çözüm1",
            links: ["stck.com", "g3.com"],
            tags: ["java", "new project"],
            date: "29.10.1994"
        },
        {
            problem: "deneme",
            solution: "çözüm2",
            links: ["stck.com", "g3.com"],
            tags: ["netlify", "new link"],
            date: "11.11.2022"
        }
    ]
    return (
        <div className="solutions">
            <h2 className='solutionsTitle'>
                The list of problems I encountered during coding and how did I fix them
            </h2>
            <div>
                <p>SEARCH</p>
            </div>
            {solutionsList.map((data) =>
                <div className='solutionsList'>
                    <p>
                        {data.problem}
                    </p>
                    <p>
                        {data.solution}
                    </p>
                    {
                        data.links.map(link =>
                            <p>{link}</p>
                        )
                    }
                    {
                        data.tags.map(tag =>
                            <p>{tag}</p>
                        )
                    }
                </div>
            )}
        </div>
    );
}

export default Solutions;
