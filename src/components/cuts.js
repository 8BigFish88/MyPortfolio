<div className="row work">
  <div className="three columns header-col">
    <h1>
      <span>Work</span>
    </h1>
  </div>

  <div className="nine columns main-col">
    {resumeData.work &&
      resumeData.work.map((item) => {
        return (
          <div className="row item">
            <div className="twelve columns">
              <h3>{item.CompanyName}</h3>
              <p className="info">
                {item.specialization}
                <span>&bull;</span>{" "}
                <em className="date">
                  {item.MonthOfLeaving} {item.YearOfLeaving}
                </em>
              </p>
              <p>{item.Achievements}</p>
            </div>
          </div>
        );
      })}
  </div>
</div>;
