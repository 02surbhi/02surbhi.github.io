var database=[
	{
		username:"surbhi",
		password:"partner"
	},
	{
		username:"partner",
		password:"surbhi"
	},
	{
		username:"shilpi",
		password:"123"
	},
	{
		username:"jenesha",
		password:"jeho"
	},
	{
		username:"harika",
		password:"microsoft"
	},
];

var username=document.getElementById("user");
var password=document.getElementById("pwd");
var submit=document.getElementById("submit");
var flag=0;
var out;

function result(f){
	if(1)
	{
		alert("hello,welcome to RBT"); 
	}
	else if(0)
	{
		alert("you need to sign-in to enter!");
	}
}


function signIn(user,pass)
{
	for(i=0;i<database.length;i++)
	{
		if(database[i].username===user && database[i].password===pass){
			return 1;
		}
		else{
			flag=0;
		}
	}
	return 0;
}

function validateUserNameOnKeyPress(event){
	if(username.value.length > 0 && event.which===13){
		out=signIn(username.value,password.value);
		result(out);
	}
}

function validatePasswordOnKeyPress(event){
	if(password.value.length > 0 && event.which===13){
		out=signIn(username.value,password.value);
		result(out);
	}
}

submit.addEventListener("click",function(){
	out=signIn(username.value,password.value);
	result(out);
})

username.addEventListener("keypress",validateUserNameOnKeyPress(event));

password.addEventListener("keypress",validatePasswordOnKeyPress(event));



