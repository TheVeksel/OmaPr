
export default function HeaderAsideElement({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <div className="aside__list-element">
        <div className="news-header">
          <p className="time-ago">10min</p>
          <span className="decoration"></span>
        </div>
        <h3 className="main__text">{children}</h3>
      </div>
    </div>
  )
}