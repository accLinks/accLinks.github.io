
var userAdmin = createUser("admin", "codeStudioVisual", "adminRank");
var userGuest = createUser("guest", "guest12Password", "guestRank");
var userList = [userAdmin, userGuest];//list of users
//document.getElementById('logInPageId').classList.toggle('hidden');
function logInFunction(){
    
    const userInputUsername = document.getElementById('usernameHome').value;//username input box
    const userInputPassword = document.getElementById('passwordHome').value;//password input box
    if(userInputUsername.length > 0 || userInputPassword.length > 0){
        for(let i = 0; i < userList.length; i++){//array that goes through user list
        //userList[i].username == userInputUsername && userList[i].password == userInputPassword
            if(userList[i].username == userInputUsername && userList[i].password == userInputPassword){
                document.getElementById('logInPageId').classList.toggle('hidden');
                document.getElementById('loggedOnPageId').classList.toggle('hidden');
                document.getElementById('loggedOnPageWelcome').textContent = `Welcome ${userList[i].username}, feel free to look around.`;  
            }  
        }
    }else if(document.getElementById('loggedOnPageWelcome').textContent != "Error 0"){
        document.getElementById('loggedOnPageId').classList.toggle('hidden');
        document.getElementById('loggedOnPageWelcome').textContent = "Error 0";
    }
    
}
function createUser(username, password, userRank){
    return {username, password, userRank};
}

  
  