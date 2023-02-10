// ข้อ4.1
function getAllUser() {
  //TODO
  // 1. ให้ใช้ Try Catch
  // 2. เรียกใช้ฟังก์ชัน ApiDelay()
  // 3. หากเรียกฟังก์ชันสำเร็จให้ (status: 200) ให้นำ message แสดงในกล่องข้อความ
  // 4. หากเรียกฟังก์ชันไม่สำเร็จ (message: "SERVER ERROR") ให้นำ message แสดงในกล่องข้อความ

  const fetchUser = async () => {
    try {
      const res = await ApiDelay();
      if (res.status === 200) {
        document.getElementById("TA").textContent = res.message;
      }
    } catch (error) {
      document.getElementById("TA").textContent = error.message;
    }
  };

  fetchUser();
}

// ข้อ 4.2
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    if (password === "In4matioN") {
      resolve(true);
    } else {
      reject();
    }
  });
}

async function fetchData(password) {
  try {
    await checkAuth(password);
    alert("รหัสผ่านถูกต้อง");
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    document.getElementById("cat").src = data[0].url;
  } catch (error) {
    alert("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
    console.error("Invalid Password");
  }
}

/* 
    Function สำหรับ TA กับ อาจารย์
    นักศึกษากรุณา อย่าแก้ไข
*/

async function ApiDelay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(_fakeAPI()), 2000);
  });
}

async function _fakeAPI() {
  const user = ["Bank", "Mac", "Takai", "Fluke"];

  if (Math.floor(Math.random() * 3) === 1) {
    throw new Error("SERVER ERROR");
  }

  return {
    status: 200,
    message: user[Math.floor(Math.random() * 4)],
  };
}
