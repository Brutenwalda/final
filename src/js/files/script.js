// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// Header
	if (targetElement.closest('.search-header__icon')) {
		document.documentElement.classList.add('search-open');
		e.preventDefault();
	} else if (!targetElement.closest('.search-header')) {
		document.documentElement.classList.remove('search-open');
	}
	// Filter
	if (targetElement.closest('.checkbox') && targetElement.closest('.filter__block') && targetElement.tagName !== 'INPUT') {
		filterClearShow(targetElement);
	}
	if (targetElement.closest('.filter__clear')) {
		const clearButton = targetElement.closest('.filter__clear');
		filterBlockClear(clearButton);
	}
});

function filterClearShow(targetElement) {
	const filterBlock = targetElement.closest('.filter__block');
	const filterClear = filterBlock.querySelector('.filter__clear');
	setTimeout(() => {
		const checkedElements = filterBlock.querySelectorAll('.checkbox__input:checked');
		checkedElements.length ? filterClear.classList.add('_active') : filterClear.classList.remove('_active');
	}, 0);
}
function filterBlockClear(clearButton) {
	const filterBlock = clearButton.closest('.filter__block');
	const checkedElements = filterBlock.querySelectorAll('.checkbox__input:checked');
	checkedElements.forEach(checkedElement => {
		checkedElement.checked = false;
	});
	clearButton.classList.remove('_active');
}




