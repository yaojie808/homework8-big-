function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt((getStyle(obj,attr)*100));
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed
			if(attr == 'opacity'){
				box.style.opacity = current/100 + "px";
			}else{
				box.style[attr]= current + "px";
			}
			
			if(json[attr] !== current){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
		}
	},60)
}

	//匀速运动
			// setInterval(function(){
			// 	var now = parseInt(getStyle(box,'left'));
			// 	if(now == 300){
			// 		clearInterval(timer)
			// 	}else{
			// 		box.style.left = now + 1 + "px";
			// 	}
			// },50)

			//变速运动
			// setInterval(function(){
			// 	var now = parseInt(getStyle(box,'left'));
			// 	var speed = (0 - now)/6;
			// 	speed = speed>0?Math.ceil(speed):Math.floor(speed);
			// 	if(now == 0){
			// 		clearInterval(timer)
			// 	}else{
			// 		box.style.left = now + speed + "px";
			// 	}
			// },50)

			//
		// }

		// function getStyle(obj,attr){
		// 	if(obj.currentStyle){
		// 		return obj.currentStyle[attr];
		// 	}else{
		// 		return getComputedStyle(obj,null)[attr];
		// 	}