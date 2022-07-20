/* задел на анимацию переключения цвета продукта на прайс карточках*/
document.body.onclick = function(event){
	event = event || window.event;
	console.log(event);
	if (event.target.classList.contains('img_min')) {
		var allDivs = document.querySelectorAll('.wrapper__price_slider div');
		for (var i = 0; i < allDivs.length; i++) {
			allDivs[i].classList.remove('active-img');
		}
		document.getElementById('img_max').src = event.target.src;
		var parentDiv = event.target.parentElement;
		parentDiv.classList.add('active-img');
	}
	
}