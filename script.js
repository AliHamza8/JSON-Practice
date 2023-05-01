// let person = {
//     name : "Ali",
//     Address : "Vehari",
//     Age : 23,
//     address: {
//         street: "5 main G-5",
//         city: "Vehari"
//     },
//     children: ['Ali' , "Hamza"]
// }

// let family = [
//     {
//         name: "John",
//         age: 20
//     },

//     {
//         name: "Doe",
//         age: 25
//     },

//     {
//         name: "Brad",
//         age: 45
//     }
// ]
// let ppl = document.querySelector(".people")
// var output = ''
// for (let i = 0; i < family.length; i++) {
//     // console.log("Name:" + family[i].name + " Age:" + family[i].age)
//     output += '<li>' +family[i].name+ '</li>'
// }
// ppl.innerHTML = output

// // person = JSON.stringify(person)
// // person = JSON.parse(person)



let people = document.querySelector(".people")

let xhr = new XMLHttpRequest
xhr.onreadystatechange = function() {
    if((this.readyState == 4 && this.status == 200)) {
        let response = JSON.parse(xhr.responseText)
        let family = response.family

        var output = ''
        for (let i = 0; i < family.length; i++) {
            output += '<li>' +"Name:" + family[i].name + " Age:" + family[i].age + '</li>'
        }
        people.innerHTML = output
    }
}

xhr.open('GET', 'family.json', true)
xhr.send()