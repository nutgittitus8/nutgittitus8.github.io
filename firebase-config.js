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
  apiKey:            "PASTE_API_KEY_HERE",
  authDomain:        "PASTE_PROJECT.firebaseapp.com",
  databaseURL:       "https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId:         "PASTE_PROJECT",
  storageBucket:     "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId:             "PASTE_APP_ID"
};

/* รหัสผ่านเข้าหน้าครัว — กันลูกค้าเปิดหน้าครัวเล่น (เปลี่ยนเป็นเลขของร้าน) */
window.KITCHEN_PASSCODE = "1234";

/* ชื่อร้าน (โชว์บนหัวข้อหน้าครัว) */
window.SHOP_NAME = "Modern Frame";
