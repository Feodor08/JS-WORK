let students = []
loadFromSite()

function loadFromSite() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload= function() {
		students = JSON.parse(this.responseText)['response']
	}
	xhttp.open("GET", "http://217.71.129.139:4035/students.php", true);
	xhttp.send();
}

function loadStudents() {
let table=document.getElementById('tbl_all')

	for ( let i=0; i < students.length; i++) {
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')
		let td4 = document.createElement('td')
		let btn = document.createElement('botton')
		btn.textContent ='Подробно'
		btn.onclick = function () {
			show_info(i)
		}

		td1.textContent = students[i].id
		td2.textContent = students[i].name
		td3.textContent = students[i].surname


		td4.appendChild(btn)
		tr.appendChild(td1)
		tr.appendChild(td2)
		tr.appendChild(td3)
		tr.appendChild(td4)

		table.appendChild(tr)
	}
	document.getElementById('btn').disabled = true
}
function show_info(id) {
let div= document.getElementById('pod')

let header= document.createElement('h1')
header.textContent = 'Информация о студенте № ' +id

let name = document.createElement('h3')
name.textContent = students[id].name + ' ' + students[id].surname

let img = document.createElement('img')
img.src = 'http://217.71.129.139:4035/' +students[id].logo

div.innerHTML= ''

div.appendChild(header)
div.appendChild(name)
div.appendChild(img)

}