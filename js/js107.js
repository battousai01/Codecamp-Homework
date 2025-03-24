const Role = prompt("If you are admin type admin:");

function Admin(role){
    alert("Access Granted")
}

function NoAdmin(role){
    alert("Access Denied")
}

function checkPermission(role){
    
    if(role.toUpperCase() === "ADMIN") Admin();
    else NoAdmin();
} 
checkPermission(Role)
