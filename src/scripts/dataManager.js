// Declare JS data that we want to store 
let cssThemes = [

];

let pageTheme = 'dark';



/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser localstorage.
 * @author andychangdev
 *
 * @returns Array of objects. 
 */
function getStoredCssThemes(){
	// Update the cssTheme array
	let rawJsonStringCssThemes = localStorage.getItem('cssThemes');
	cssThemes = JSON.parse(rawJsonStringCssThemes);
	// Return the updated data 
	return cssThemes;
}


/**
 * Retrieve, assign, and return the latest stored page theme from the browser localstorage.
 * @author andychangdev
 *
 * @returns String. Should be 'light' or 'dark'.
 */
function getStoredPageTheme(){
	pageTheme = localStorage.getItem('pageTheme');
	return pageTheme;
}


// Create/Update localstorage
function setCssThemesToStorage(){
	let dataAsJsonString = JSON.stringify(cssThemes);
	localStorage.setItem('cssThemes', dataAsJsonString);
}


// Delete localstorage 