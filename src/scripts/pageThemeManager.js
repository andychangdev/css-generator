const themes = {
	light: {
		"theme-50": "#f7fbff",
        "theme-100": "#f0f6ff",
		"theme-200": "#e0eeff",
		"theme-300": "#d1e5ff",
		"theme-400": "#c2dcff",
		"theme-500": "#b3d4ff",
		"theme-600": "#6babff",
		"theme-700": "#2483ff",
		"theme-800": "#005fdb",
		"theme-900": "#004094",
		"theme-950": "#003170"
	},
	dark: {
		"theme-50": "#e5ebf4",
		"theme-100": "#cbd8e9",
		"theme-200": "#97b1d2",
		"theme-300": "#6389bc",
		"theme-400": "#406495",
		"theme-500": "#294160",
		"theme-600": "#263b58",
		"theme-700": "#22364f",
		"theme-800": "#1e3047",
		"theme-900": "#1b2a3e",
		"theme-950": "#19273a"
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