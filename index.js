// Add your code here
function submitData(name,email){
    const details = {
        name: name,
        email: email
    }

    const configObj = {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(details)
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
      const id = data.id
      const newElement = document.createElement('p')
      newElement.innerHTML = id
      document.body.appendChild(newElement)
    })
    .catch(error => {
      const newElement = document.createElement('p')
      newElement.innerHTML = error.message
      document.body.appendChild(newElement)
    })


}
submitData("riro","rirochacha.gmail.com")
//const configurationObject = {
  //  method: "POST",
    //headers: {
    //"Content-Type": "application/json",
    //Accept: "application/json",
   //},
   // body: JSON.stringify({
   //   dogName: "Byron",
  //    dogBreed: "Poodle",
  //  }),
 // };
  
 // fetch("http://localhost:3000/dogs", configurationObject);

 // fetch("http://localhost:3000/dogs", configurationObject)
 // .then(function (response) {
  //  return response.json();
//})
 // .then(function (object) {
 //   console.log(object);
    
 // })
 // .catch(function (error) {
 //   alert("Bad things! Ragnarők!");
 //   console.log(error.message);
 // });