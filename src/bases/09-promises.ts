const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(100);
    reject(`Mi amigo se perdió con la plata`);
  }, 2000);
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("Seguiré con mi vida");
  });
