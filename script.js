const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function searchHandler(){
	let result = [];	
	 let userInput = input.value;
	if (userInput.length){ 
		result = fruit.filter((fruitType) => {
		return fruitType.toLowerCase().includes(userInput.toLowerCase());
		
	});
}

showSuggestions(result);

if (!result.length){
	suggestions.innerHTML = '';
}

}

function showSuggestions(result) {
		const content = result.map((val) => {
		return "<li>" + val + "</li>";
		});
		
	suggestions.innerHTML = "<ul>" + content + "</ul>";
}

function useSuggestion(e) {
	suggestions.innerHTML = '';
	console.log(e.target.innerText);
	return input.value = e.target.innerText;
	
}

input.addEventListener('keyup',searchHandler, showSuggestions);
suggestions.addEventListener('click', useSuggestion);
