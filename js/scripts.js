var a, b, value;
a = prompt('Input value for a');
b = prompt('Input value for b');

value = (a * a) + (2 * a * b) - (b * b);

if(value >= 0){
	console.log('wynik dodatni');
	alert('wynik dodatni');
} else {
	console.log('wynik ujemny');
	alert('wynik ujemny');
}