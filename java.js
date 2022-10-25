var totalAfisare = document.querySelector(".totalAfisare");
var popUpProduse = document.querySelector(".popUpProduse");
var total = 0;

function addToCart(pret, nume){
 total = total+pret;
 console.log(total);
 totalAfisare.innerText = total + "$";
 
 const produsAfisat = document.createElement('div');
 produsAfisat.classList.add("produsAfisat");

 produsAfisat.innerText = pret + " " + nume;
 popUpProduse.appendChild(produsAfisat);
}

function comandaMinima(){
	if(total < 500){
		alert("Minimum value for purchase is 500$!");
	} else{
		alert("Thank you for your purchase!");
		total = 0;
		totalAfisare.innerText = 0 + "$";
		popUpProduse.innerHTML = " ";
	}
}

