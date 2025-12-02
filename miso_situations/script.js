let list = [{firstname:"Aymane",lastname:"elhassouni",email:"aymane.elhassouni3@gmail.com"},
    {firstname:"Amine",lastname:"tazi",email:"amintazi@gmail.com"},
    {firstname:"Achraf",lastname:"simo",email:"achrafsimo@gmail.com"}]


const contant = document.getElementById("contant");
console.log(contant);



function runder(person){
    contant.innerHTML += `<tr>
          <th scope="row">1</th>
          <td>${person.firstname}</td>
          <td>${person.lastname}</td>
          <td>${person.email}</td>
        </tr>`
}


function aficheList(){
    list.forEach(person =>{
        runder(person)
    })
}

aficheList();

let inputlastname = document.getElementById("lastname");
let inputfirstname = document.getElementById("firstname");
let inputemail = document.getElementById("email");
const submitData = document.getElementById("submitData");

submitData.addEventListener("click", event =>{
    event.preventDefault();
    inputemail.value
    console.log(inputemail.value);
    
    console.log(inputfirstname.value);
    
    console.log(inputlastname.value);
    
    inputfirstname.value
    inputlastname.value

    list.push({firstname: inputfirstname.value,lastname: inputlastname.value,email: inputemail.value})
    console.log(list);
    aficheList();
    
})