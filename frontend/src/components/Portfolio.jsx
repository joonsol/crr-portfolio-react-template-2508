import { usePortfolio } from "../context/PortfolioContext"
import '../styles/Portfolio.scss'
const Portfolio = (params) => {
  const portfolioItems = usePortfolio();

  return (
    <section className="portfolio-section">
      <div className="in">
        <h1>Portfolio</h1>
        {portfolioItems.map((item, index) => (
          <div className="text-box" key={index}>
            <div className="left">

              <strong className="title">
                {item.title.split("<br>").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>{line}</span>
                ))}
              </strong>
              <p className="desc">{item.desc}</p>
              <p className="hash">
                {item.hashtags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </p>
            </div>
            <div
              className="img_box"
              style={{ backgroundImage: `url(${item.image})` }} // 템플릿 리터럴 사용
            ></div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Portfolio;
