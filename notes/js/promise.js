

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200)
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200)
  }, 1000);
});

 function get() {
  return Promise.all([p1, p2])
    .then((code) => {
      console.log('code', code);
      return code;
    })
    .catch(code => code);
}

async function get2() {
 let data = await get();
 console.log('data', data);
}


get2();