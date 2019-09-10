import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="App">
        <section className="Intro">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-5">
              <figure className="LogoMark"></figure>
              <h1>
                Unwind with incredibly delicious plant-based chocolates.
              </h1>
            </div>

            <aside className="HomePhoto HomePhoto--mobile"></aside>
          </div>
        </section>

        <section className="Newsletter">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <h3>🔥 Get on the Hot Drop newsletter</h3>
              <p>
                We release new chocolates in limited quantities
                to keep production quality high with our tiny team.
              </p>

              <form
                action="https://circleofmana.us4.list-manage.com/subscribe/post?u=a3debcba484884720338e35cf&amp;id=8b92537473"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <input className="TextInput" type="email" name="EMAIL" id="mce-EMAIL" placeholder="Your email" />
                <button className="Button">Sign me up &rarr;</button>
              </form>

            </div>
          </div>
        </section>

        <footer className="Footer">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-5">
              <p>
                <a href="#">About</a>
                <a href="https://journal.circleofmana.com">Journal</a>
                <a href="https://www.instagram.com/circleofmana">Instagram</a>
              </p>
            </div>
          </div>
        </footer>

        <aside className="HomePhoto HomePhoto--desktop"></aside>
      </main>
    )
  }
}
