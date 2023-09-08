function fibonacci(n) {
// your code here
	let n1 = 0;
	let n2 = 1;
	if(n==1) return 0;
	else if(n==2) return 1;

	let sum = 0;

	for(let i=2; i<=n; i++) {
		sum = n1 + n2;
		n1 = n2;
		n2 = sum;
	}

	return sum;
}

module.exports = fibonacci;
