const o1 = {
    o2: {
        name: "Sourav",
        contacts: {
            emails: ["sourav@example.com", "sourav.work@example.com"],
            phone: "123-456-7890"
        }
    }
};

function printNested(obj) {
    
    if (typeof obj === 'object') {
        for (let key in obj) {
            printNested(obj[key]);
        }
    } else {
        console.log(obj);
    }
}

printNested(o1);

/*
    การทำงาน printNested(obj)
    1. ตรวจสอบว่า obj เป็น object หรือไม่
    2. ถ้า obj เป็น object ให้วนลูป key ใน obj  
    3. ให้เรียกฟังก์ชัน printNested(obj[key])
    4. ทำซ้ำจนกว่าจะไม่เจอ object อีกต่อไป
    5. เมื่อเจอ obj ที่ไม่ใช่ object ให้แสดงค่า obj นั้นออกมา

    First Call: printNested(o1)

    obj is { o2: { ... } } (object that has a key o2 with a value of 2 properties
    - name: "Sourav"
    - contacts: { ... } (object with 2 properties)
    The function identifies obj as an object and iterates over its keys.
    It finds the key is o2 (o2 = { name: "Sourav", contacts: { ... } })
    and calls printNested(o1.o2).({o2: { ... }}.{ name: "Sourav", contacts: { ... } })
    so o1.o2 = { name: "Sourav", contacts: { ... } }  

    Second call: printNested(o1.o2)
    - obj is { name: "Sourav", contacts: { ... } } (object with 2 properties)
    The function identifies obj as an object and iterates over its keys.
    It finds the key is name and calls printNested(o1.o2.name) (o1.o2= { name: "Sourav", contacts: { ... } }"
    name = "Sourav").
    so o1.o2.name = "Sourav"

    Third call: printNested(o1.o2.name)
    - obj is "Sourav" (string)
    The function identifies obj as a string and prints it out.
    this is the end of the function call stack for this branch 
    and this call return to the previous call (second call).

    Back to the second call: printNested(o1.o2) and iterate to next keys of Second call.
    The key of second call is contacts and calls the Second call of next key(Fourth call) (printNested(o1.o2.contacts) 
    (o1.o2= { name: "Sourav", contacts: { ... } }"
    contacts = { email: ...},phone:.....).
    so o1.o2.contacts = {emails: ["sourav@example.com","sourav.work@example.com"]
                        ,phone: "123-456-7890"}

    Fourth call: printNested(o1.o2.contacts)
    - obj is {emails: ["sourav@example.com","sourav.work@example.com"]
             ,phone: "123-456-7890"}
    The function identifies obj as an object and iterates over its keys.\
    It finds the key is emails and calls the Fourth call of next key(Fifth call) (printNested(o1.o2.contacts.emails)
    (o1.o2.contacts.emails = ["sourav@example.com","sourav.work@example.com"]

    Fifth call: printNested(o1.o2.contacts.emails)
    - obj is ["sourav@example.com","sourav.work@example.com"]
    The function identifies obj as an array and iterates over its elements.
    It finds the key is 0 and calls the Fifth call of next key(Sixth call) (printNested(o1.o2.contacts.emails[0])
    (o1.o2.contacts.emails[0] = "sourav@example.com") 
        Note   Array in javascript is Object and index of array is key object of array
    
    Sixth call: printNested(o1.o2.contacts.emails[0])
    - obj is "sourav@example.com"
    The function identifies obj as a string and prints it out.
    this is the end of the function call stack for this branch
    and this call return to the previous call (Fifth call).

    Back to the Fifth call: printNested(o1.o2.contacts.emails) and iterate to next keys of Fifth call.
    The key of Fifth call is 1 and calls the Fifth call of next key(Seventh call) (printNested(o1.o2.contacts.emails[1])
    (o1.o2.contacts.emails[1] = "sourav.work@example.com")

    Seventh call: printNested(o1.o2.contacts.emails[1])
    - obj is "sourav.work@example.com"
    The function identifies obj as a string and prints it out.
    this is the end of the function call stack for this branch
    and this call return to the previous call (Fifth call).

    Back to the Fifth call: printNested(o1.o2.contacts.emails) and iterate to next keys of Fifth call.
    But no key left in the array so this call return to the previous call (Fourth call).

    Back to the Fourth call: printNested(o1.o2.contacts) and iterate to next keys of Fourth call.
    The key of Fourth call is phone and calls the Fourth call of next key(Eighth call) (printNested(o1.o2.contacts.phone)
    (o1.o2.contacts.phone = "123-456-7890")

    Eighth call: printNested(o1.o2.contacts.phone)
    - obj is "123-456-7890"
    The function identifies obj as a string and prints it out.
    this is the end of the function call stack for this branch
    and this call return to the previous call (Fourth call).

    Back to the Fourth call: printNested(o1.o2.contacts) and iterate to next keys of Fourth call.
    But no key left in the object so this call return to the previous call (Second call).

    Back to the Second call: printNested(o1.o2) and iterate to next keys of Second call.
    But no key left in the object so this call return to the previous call (First call).

    Back to the First call: printNested(o1) and iterate to next keys of First call.
    But no key left in the object so this call return to the previous call (Main call).

    Main call: printNested(o1) and iterate to next keys of Main call.
    But no key left in the object so this call return to the end of the function.

    
*/
