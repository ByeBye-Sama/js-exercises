function setInformation() {
    let user = {
        name: '',
        lastname: '',
        age: '',
        career: '',
        friends: []
    }

    user.name = prompt("Please enter your name:");
    user.lastname = prompt("Please enter your lastname:");
    user.age = prompt("Please enter your age:");
    user.career = prompt("Please enter your career:");
    let friendsNumber = prompt("How many friends you have:");

    
    for (let i = 0; i < friendsNumber; i++) {
       user.friends.push(prompt("Enter the name of your friends:")); 
    }

    alert(`Hello, ${user.name} ${user.lastname}`)
    alert(`Your age is ${user.age} and your are a/an ${user.career}`)
    alert(`You have ${friendsNumber} friends: ${user.friends.join(', ')}`)
}

setInformation()