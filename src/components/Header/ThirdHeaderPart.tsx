import Button from "../Button/Button"

export default function ThirdHeaderPart(): JSX.Element {
  return (
    <div className="other">
      <div className="login">
        <p>Kirjaudu</p>
        <img src="/photo/login.png" alt="img" />
      </div>
      <div className="search">
        <p>Hae</p>
        <img className="search__img" src="/photo/lataus.png" alt="img" />
      </div>
      <Button className="hamburger" onClick={() => console.log('click')}>
        <img src="/photo/latau.webp.webp" alt="img" />
      </Button>
    </div>
  )
}
