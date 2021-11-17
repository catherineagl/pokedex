import loading from '../assets/oval.svg';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const loadingAnimation = () => {
	const $main = document.querySelector('main');
	$main.innerHTML = `<img class="loader" src="${loading}" alt="Loading...">`;
};

const showError = (err) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: `${err}`,
	});
};
export { loadingAnimation, showError };
