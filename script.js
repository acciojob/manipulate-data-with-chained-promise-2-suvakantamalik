//your JS code here. If required.
function manupulateData(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 1000);
	})
}

manupulateData()
	.then((data) => {
		let evenNumbers = data.filter(num => num%2 === 0);
		document.getElementById("output").innerText = `Even numbers: ${evenNumbers}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(evenNumbers);
			}, 2000);
		});
	})
	.then((evenNumbers) => {
		let multipliedEvenNumbers = evenNumbers.map(num => num * 2);
		document.getElementById("output").textContent = `Multiplied even numbers: ${multipliedEvenNumbers}`
	});