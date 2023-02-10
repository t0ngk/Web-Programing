// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  let dogImg = document.getElementById("dogImg");
  let dogTime = document.getElementById("dogTime");
  dogTime.textContent = 10;
  const timer = new Promise((resolve, reject) => {
    let time = dogTime.textContent;
    let interval = setInterval(() => {
      dogTime.textContent = time--;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      resolve();
    }, (Number(time) + 1) * 1000);
  });

  timer.then(() => {
    getAPI(
      "https://dog.ceo/api/breeds/image/random",
      (res) => {
        dogImg.src = res.message;
      },
      (err) => {
        console.error(err);
      }
    );
  });

  // setTimeout(() => {
  //   getAPI("https://dog.ceo/api/breeds/image/random", (res) => {
  //     dogImg.src = res.message
  //   }, (err) => {
  //     console.error(err)
  //   })
  // }, 10000);
}

// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow");
  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    console.log("STATE 1");
    let result = getResult();
    rainbow.classList =
      result.status === "success" ? "has-text-primary" : "has-text-danger";
    rainbow.textContent = result.status === "success" ? result.text : "state 1";
    setTimeout(() => {
      // STATE 2 color = 'has-text-success'
      console.log("STATE 2");
      result = getResult();
      rainbow.classList =
        result.status === "success" ? "has-text-success" : "has-text-danger";
      rainbow.textContent = result.status === "success" ? result.text : "state 2";
      setTimeout(() => {
        // STATE 3 color = 'has-text-success'
        console.log("STATE 3");
        result = getResult();
        rainbow.classList =
          result.status === "success" ? "has-text-success" : "has-text-danger";
        rainbow.textContent = result.status === "success" ? result.text : "state 3";
      }, 2000);
    }, 2000);
  }, 2000);
}

function getResult() {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num > 5) {
    return {
      status: "success",
      text: num,
    };
  } else {
    return {
      status: "error",
      text: num,
    };
  }
}

// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
  let result = document.getElementById("result");

  const promise = new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });

  promise
    .then((res) => {
      result.textContent = `success : ${res} is an even number`;
    })
    .catch((err) => {
      result.textContent = `Error : ${err} is not an even number`;
    });
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 500) {
        resolve({
          id,
          delay,
        });
      } else {
        reject({
          id,
          delay,
        });
      }
    }, delay);
  });
  // return promise
}

function tester() {
  task(1)
    .then((res) => {
      console.log(`task [${res.id}]: [${res.delay}]ms ... PASS!`);
    })
    .catch((err) => {
      console.log(`task [${err.id}]: [${err.delay}]ms ... NOTPASS!`);
    });
  task(2)
    .then((res) => {
      console.log(`task [${res.id}]: [${res.delay}]ms ... PASS!`);
    })
    .catch((err) => {
      console.log(`task [${err.id}]: [${err.delay}]ms ... NOTPASS!`);
    });
  task(3)
    .then((res) => {
      console.log(`task [${res.id}]: [${res.delay}]ms ... PASS!`);
    })
    .catch((err) => {
      console.log(`task [${err.id}]: [${err.delay}]ms ... NOTPASS!`);
    });
  task(4)
    .then((res) => {
      console.log(`task [${res.id}]: [${res.delay}]ms ... PASS!`);
    })
    .catch((err) => {
      console.log(`task [${err.id}]: [${err.delay}]ms ... NOTPASS!`);
    });
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    if (password === "Cisco") {
      resolve();
    } else {
      reject();
    }
  });
}

function fetchData(password) {
  let cat = document.getElementById("cat");
  checkAuth(password)
    .then((res) => {
      alert("รหัสผ่านถูกต้อง");
      getAPI(
        "https://api.thecatapi.com/v1/images/search",
        (res) => {
          cat.src = res[0].url;
        },
        (err) => {
          console.error(err);
        }
      );
    })
    .catch((err) => {
      alert("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
    });
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
