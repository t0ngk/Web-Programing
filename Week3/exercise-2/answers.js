function convertADtoBE(input) {
    // AD คือคริสดศักราย
    // BE คือพุทธศักราช
    //
    // TODO: แปลงปีใน คริสตศักราช เป็น พุทธศักราช เช่น 2000 เป็น "พ.ศ. 2543"
    // โดยให้เติมตัวอักษร พ.ศ. เข้าไปด้านหน้าด้วย
    if (input < 0 || !input || typeof input != "number") {
        return "ไม่ถูกต้อง";
    }
    return "พ.ศ. " + (input + 543);
}

function evenOrOdd(input) {
    // TODO: ให้ตรวจสอบว่าตัวเลข input เป็นเลขคู่หรือเลขคี่
    if (input % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

function getFullName(input) {
    // TODO: ให้นำคำนำหน้าชื่อ ชื่อต้น นามสกุล มาต่อกัน
    let prefix;
    if (input.sex == "male") {
        prefix = "Mr.";
    } else {
        prefix = "Ms.";
    }
    return `${prefix} ${input.firstName} ${input.lastName}`
}

function getFirstName(input) {
    // TODO: ให้ทำการตัดนามสกุลออกโดยใช้ indexOf() และ substring()
    return input.substring(0, input.indexOf(" "));
}
