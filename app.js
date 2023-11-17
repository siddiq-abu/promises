// fetch ("https://jsonplaceholder.typicode.com/users/1")

const emailRef = document.querySelector(".email");
const statusRef = document.querySelector(".status");

// 1.Then
// fetch ("https://jsonplaceholder.typicode.com/users/1")
// .then ((response)=>{
// return response.json();
// })
// .then ((data)=>{
//     console.log(data);
//     emailRef.innerHTML = data.email
// })

// 2.async/await
async function mail() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await response.json()
    console.log(data);
    emailRef.innerHTML = data.phone
}

mail()

// HOW TO CREATE A PROMISE

// function gitSubscriptionStatus() {
//   return new Promise((resolve, reject) => {
//     resolve("VIP");
//   });
// }

// console.log(gitSubscriptionStatus());

// UNLOCKING THE PROMISE 

function gitSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");
        }, 2000);
     
    });
  }

//   .Then
//   gitSubscriptionStatus().then(response => console.log(response))

//   await
async function main() {
   const status = (await gitSubscriptionStatus());
    statusRef.innerHTML = status
}

main()