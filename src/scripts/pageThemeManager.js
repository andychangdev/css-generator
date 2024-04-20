const themes = {
	light: {
		"50": "#f7fbff",
		"100": "#f0f6ff",
		"200": "#e0eeff",
		"300": "#d1e5ff",
		"400": "#c2dcff",
		"500": "#b3d4ff",
		"600": "#6babff",
		"700": "#2483ff",
		"800": "#005fdb",
		"900": "#004094",
		"950": "#003170"
	},
	dark: {
		"50": "#e5ebf4",
		"100": "#cbd8e9",
		"200": "#97b1d2",
		"300": "#6389bc",
		"400": "#406495",
		"500": "#294160",
		"600": "#263b58",
		"700": "#22364f",
		"800": "#1e3047",
		"900": "#1b2a3e",
		"950": "#19273a"
	}
}


// Update #pageThemeHeading text
function updatePageThemeHeading(){
	let headingToUpdate = document.getElementById('pageThemeHeading');
	headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButton text 
function updatePageThemeButtonText(){
	let buttonToUpdate = document.getElementById('pageThemeButton');

	let textToShow = '';

	if (getStoredPageTheme() == 'dark'){
		textToShow = 'Toggle To Light Mode';
	} else {
		textToShow = 'Toggle to Dark Mode';
	}

	buttonToUpdate.textContent = textToShow;

}

// Add onclick to #pageThemeButton
function togglePageTheme(){
	if (getStoredPageTheme() == 'dark'){
		pageTheme = 'light';
	} else {
		pageTheme = 'dark';
	}
	setPageThemeToStorage();
    updateCssVariables();
	updatePageThemeButtonText();
	updatePageThemeHeading();
}

// Apply theme from localstorage
function applySavedTheme(){
	updatePageThemeButtonText();
	updatePageThemeHeading();
	updateCssVariables();
}


// Update CSS variables based on current theme 
function updateCssVariables(){
	let themeName = getStoredPageTheme();
	// for every CSS variable in themes["light"]
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}


let pageThemeToggleButton = document.getElementById('pageThemeButton');
pageThemeToggleButton.addEventListener('click', togglePageTheme);

applySavedTheme();