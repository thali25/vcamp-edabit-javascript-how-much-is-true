function countTrue(arr) {
	// utilizei uma variável como contador 
	let count = 0;
	
	// percorri os elementos da array passada como argumento da função
	// verifiquei quais elementos são "true"
	// somo mais um no contador
	for(let element of arr) if(element===true) count++;
	
	//retorno o valor final do contador
	return count;
}