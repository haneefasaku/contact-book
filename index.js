//1.form submission
const form = document.getElementById("form")
const contactForm = document.getElementById("contactForm")
form.addEventListener("submit", contactList)

function contactList(event){
    event.preventDefault()
    
//2.get picture name and phone from the input field

    const pictureInput = form["Picture"]
    const Picture = pictureInput.value

    const nameInput = form["Name"]
    const name = nameInput.value

    const phoneInput = form["Phone"]
    const phone = phoneInput.value

//3.form validation

if(!Picture){
    console.log("Picture is required")
    return
}
else if(!name){
    console.log("name must be required")
    return
}
else if(!phone){
    console.log("phone is required")
    return
}

//name must be less than 20 charecter
 if(name.lehgth > 20){
    console.log("name must be less than 20 charecters")
    return
}

//  if(phone.length !== 10){
//     console.log("phone number must be 10 digit long")
//     return
// }

const regex =  /^(?:\+?(\d{1,3}))?[-. (]*(\d{2,4})[-. )]*(\d{3,4})[-. ]*(\d{4})$/;
if(!regex.test(phone)){
    console.log("phone number invalid")
    return
}

//4.create contact

const li = document.createElement("li")
const img = document.createElement("img")
img.src = Picture
li.appendChild(img)

const division = document.createElement("div")
li.appendChild(division)

const h3 = document.createElement("h3")
h3.innerHTML = name
division.appendChild(h3)

const span = document.createElement("span")
span.innerHTML = phone
division.appendChild(span)                                                                                                                                                                                          


//5.display contact on webpage
contactForm.appendChild(li)

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           