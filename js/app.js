const buttonAction = document.querySelector('.action')

buttonAction.addEventListener('click', actionToggle)

function actionToggle () {
	buttonAction.classList.toggle('active')
}