let curScene = 0

function changeScene(decision) {
	// очищаем сообщение
	let message =''

	switch (curScene) {
		case 0:
			curScene = 1
			message = 'Ваше путешествие начинается на развилке дорог'
			break
		case 1:
			if (decision == 1) {
				curScene = 2
				message = 'Вы прибыли в милый домик в лесу'
			}
			else {
				curScene = 3
				message = 'Вы стоите на мосту с видом на мирный ручей'
			}
			break
		case 2:
			if (decision == 1) {
				curScene = 4
				message = 'Заглянув в окно, вы видите в доме ведьму'
			}
			else {
				curScene = 5
				message = 'Вы стали обедом Ведьмы'
			}
			break
		case 3:
			if (decision == 1) {
				curScene = 6
				message = 'Иззвините, на той стороне моста живет тролль и вы стали его обедом'
			}
			else {
				curScene = 7
				message = 'На вашем пути стоит тролль'
			}
			break
		case 4:
			if (decision == 1) {
				curScene = 8
				message = 'Продолжение следуте'
			}
			else {
				curScene = 5
				message = 'Извините, вы стали частью обеда ведьмы'
			}
			break
		case 5:
			curScene = 0
			break
		case 6:
			curScene = 0
			break
		case 7:
			if (decision == 1) {
				curScene = 6
				message = 'Извините, вы стали частью обеда тролля'
			}
			else {
				curScene = 9
				message = 'Продолжение следуте'
			}
		case 8:
			break
		case 9:
			break
	}
	document.getElementById('sceneimg').src = 'scene'+curScene+'.png'
	if (message !='') {
	document.getElementById('text').innerHTML = message
	}
}