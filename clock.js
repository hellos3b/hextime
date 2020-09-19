((hyper) => {
  const root = document.getElementById("root");
  const renderRoot = hyper.bind(root);
  
  const render = hex => {
    root.style.backgroundColor = hex;
    renderRoot`
      <section>
          <h1 id="clock">${hex}</h1>
      </section>
      <footer>
          <p>Created by <a href="/" target="_blank" aria-label="View Jamel Hammoud's portfolio website">Jamel Hammoud</a>, edited by s3bby. See source on <a href="https://github.com/JamelHammoud/hextime" aria-label="View on Github" rel="noreferrer">GitHub</a>.</p>
      </footer>
    `
  }

  streams.hex$.subscribe(render);

})(hyperHTML)