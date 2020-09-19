streams = (({timer, operators}) => {
  const {map, share} = operators;

  const pad = (t) => String(t).padStart(2, "0");
  const toHex = (date) => "#" + pad(date.getHours()) + pad(date.getMinutes()) + date.getSeconds();

  const hex$ = timer(0, 1000)
    .pipe(
      map(() => new Date()), 
      map(toHex),
      share()
    )

  return {hex$}
})(rxjs)