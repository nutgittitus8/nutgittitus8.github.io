/* ============================================================
   Modern Frame — การตั้งค่า Firebase (แก้ไฟล์นี้ไฟล์เดียว)
   ============================================================
   ใช้ร่วมกันทั้งหน้าลูกค้า (index.html) และหน้าครัว (kitchen.html)

   วิธีเอาค่ามาวาง (ทำครั้งเดียว ~5 นาที):
   1) เข้า https://console.firebase.google.com แล้วสร้างโปรเจกต์ใหม่
   2) เมนูซ้าย Build > Realtime Database > Create Database
        - เลือกโซน (เช่น Singapore) แล้วเริ่มแบบ "test mode" ไปก่อนได้
   3) ไปที่ Project settings (เฟือง) > General > เลื่อนลงหา "Your apps"
        - กดไอคอน </> (Web) ตั้งชื่อแอป แล้วระบบจะโชว์ก้อน firebaseConfig
   4) คัดลอกค่าจากก้อนนั้นมาวางทับด้านล่างนี้ให้ครบทุกบรรทัด
   5) วาง "กฎความปลอดภัย" (Rules) ตามที่เขียนไว้ใน README.md
   ------------------------------------------------------------ */

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCweNdgw3L9WrQTaf2HnyF1bfj8hujP6Zg",
  authDomain:        "modern-fream.firebaseapp.com",
  databaseURL:       "https://modern-fream-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "modern-fream",
  storageBucket:     "modern-fream.firebasestorage.app",
  messagingSenderId: "32633652730",
  appId:             "1:32633652730:web:85f1fc2b61921b238c1043",
  measurementId:     "G-YFKP9L3R7X"
};

/* รหัสผ่านเข้าหน้าครัว — กันลูกค้าเปิดหน้าครัวเล่น (เปลี่ยนเป็นเลขของร้าน) */
window.KITCHEN_PASSCODE = "1234";

/* ชื่อร้าน (โชว์บนหัวข้อหน้าครัว) */
window.SHOP_NAME = "Modern Frame";
