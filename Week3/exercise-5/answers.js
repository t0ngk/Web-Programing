function plus(input){
    // TODO: สร้าง function ที่นำ input จำนวน 2 ตัวมาบวกกัน
    function plus(var_a, var_b){
        return var_a + var_b;
    }
    return plus(input[0], input[1]);
}

function varLetConst() {
    // TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
    // *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***
    const k = 5
    var j = 30
    let i = 0
    for (let  j = 0; j <= 5; j++) {
        i++
    }
    for (let  j = 0; j <= 5; j++) {
        j++
    }
    console.log(j)
    console.log(i)
    console.log(k)
    console.log(j + k + i)
    return j + k + i
}

function chainfunction(input){
    // TODO: จงใช้ String method และการ chain function ให้ผลลัพธ์ตรงตามโจทย์

    //เขียนต่อจาก Return ได้เลยครับ
    return input.trim().toLowerCase().split(" ").map((word, i) => i ? word.toLowerCase() : word.toUpperCase()).join(" ");
}
