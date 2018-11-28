


//banner跳转图片
function banner(){
	
	this.oBanner = document.getElementById("banner");
	this.oUl = document.querySelector("#banner>ul");
	this.aLi = this.oUl.getElementsByTagName("li");
	this.oDir = document.getElementById("dir");
	this.aA = this.oDir.getElementsByTagName("a");
	this.iNow = 0;
	this.next = 0;
	this.timer = null;
}
banner.prototype.init = function(){
	this.autoPlay();
	this.toImg();
	this.over();
	this.out();
	this.aleft();
	this.aright();
}

banner.prototype.autoPlay = function(){
	var _this = this;
	this.timer=setInterval(function(){
		if(_this.next == _this.aLi.length-1){
				_this.next = 0;
		}
		else{
 			_this.next++;
		}
        _this.toImg();
	},3000)
}
banner.prototype.toImg = function(){
    
	move(this.aLi[this.iNow],{opacity:0});
	move(this.aLi[this.next],{opacity:100});
	this.iNow = this.next;
}
banner.prototype.over = function(){
	   var _this = this;
	   this.oBanner.onmouseover = function(){
	   clearInterval(_this.timer);
	}
}

banner.prototype.out = function(){
	   var _this = this;
		this.oBanner.onmouseout = function(){
		_this.autoPlay();
	}

}

banner.prototype.aleft = function(){
	  
	   var _this = this;
		this.aA[0].onclick = function(){
	     if(next == 0){
	     	 _this.next = _this.aLi.length-1;
	     }
	     else{
	     	_this.next--;
	     }
	     _this.toImg();
	}

}

banner.prototype.aright = function(){
	   var _this = this;
		this.aA[1].onclick = function(){
		if(_this.next == _this.aLi.length-1){
			_this.next = 0;
		
		}
		else{
			 _this.next++;		
		}
		_this.toImg();
	}

}

var Banner = new banner();
Banner.init();




//box换图
/*function oBox(){
	this.oBox = document.getElementById("box");
	this.oBox_aA = this.box.getElementsByTagName("A");
}
oBox.prototype.over = function(){
		
	for(var i =0;i<oBox_aA.length;i++){
		oBox_aA[i].index = i;
		oBox_aA[i].onmouseover = function(){
			 
			 this.children[0].src = "image/"+(this.index+4)+".png";
		}
			oBox_aA[i].onmouseout = function(){
			 
			 this.children[0].src = "image/"+(this.index+7)+".png";
		}
	}

}
*/


var oBox = document.getElementById("box");
var oBox_aA = box.getElementsByTagName("A");
for(var i =0;i<oBox_aA.length;i++){
	oBox_aA[i].index = i;
	oBox_aA[i].onmouseover = function(){
		 
		 this.children[0].src = "image/"+(this.index+4)+".png";
	}
		oBox_aA[i].onmouseout = function(){
		 
		 this.children[0].src = "image/"+(this.index+7)+".png";
	}
}


//无缝轮播
function slideshow(){
	 this.oSlideshow = document.getElementById("slideshow");
	 this.oslideshow_Ul = document.querySelector("#slideshow>ul");
	 this.aslideshow_Li = this.oslideshow_Ul.getElementsByTagName("li");
	 this.iNow2 = 0;	
	 this.timer2 = null;
	 this.slideshowiWidth = this.aslideshow_Li[0].offsetWidth+20;
	 this.aDrag = this.oslideshow_Ul.getElementsByTagName("p");
} 

slideshow.prototype.init = function(){
	
	var li1 = this.aslideshow_Li[0].cloneNode(true);
	this.oslideshow_Ul.appendChild(li1);
	var li2 = this.aslideshow_Li[1].cloneNode(true);
	this.oslideshow_Ul.appendChild(li2);
	var li3 = this.aslideshow_Li[2].cloneNode(true);
	this.oslideshow_Ul.appendChild(li3);

	this.oslideshow_Ul.style.width = this.slideshowiWidth * this.aslideshow_Li.length+"px";

	this.autoPlay2();
	this.toImg2();
	this.over();
	this.out();
}
slideshow.prototype.autoPlay2 = function(){
    var _this = this;
	this.timer2 = setInterval(function(){
			if(_this.iNow2 == _this.aslideshow_Li.length-3){
				_this.iNow2 = 1;
				_this.oslideshow_Ul.style.left = 0;
			}else{
				_this.iNow2++;
			}

			_this.toImg2();
		},2000)
}

slideshow.prototype.toImg2 = function(){
	 move(this.oslideshow_Ul,{left:-this.iNow2*this.slideshowiWidth});

}
slideshow.prototype.over = function(){

	var _this=this;
	this.oslideshow_Ul.onmouseover = function(){
		clearInterval(_this.timer2);
	}

}
slideshow.prototype.out = function(){
	var _this=this;
	this.oslideshow_Ul.onmouseout = function(){
		_this.autoPlay2()
	}
}
var slideshow = new slideshow();
slideshow.init();









//无缝轮播
/*var oSlideshow = document.getElementById("slideshow");
var oslideshow_Ul = document.querySelector("#slideshow>ul");
var aslideshow_Li = oslideshow_Ul.getElementsByTagName("li");
var slideshowiWidth = aslideshow_Li[0].offsetWidth+20;
var slideshowli = aslideshow_Li[0].cloneNode(true);
oslideshow_Ul.appendChild(slideshowli);
var slideshowli2 = aslideshow_Li[1].cloneNode(true);
oslideshow_Ul.appendChild(slideshowli2);
var slideshowli3 = aslideshow_Li[2].cloneNode(true);
oslideshow_Ul.appendChild(slideshowli3);

oslideshow_Ul.style.width = slideshowiWidth * aslideshow_Li.length+"px";
var iNow2 = 0;
var timer2 = null;

	autoPlay2();
	function autoPlay2(){
		timer2 = setInterval(function(){
			if(iNow2 == aslideshow_Li.length-3){
				iNow2 = 1;
				oslideshow_Ul.style.left = 0;
			}else{
				iNow2++;
			}

			toImg2();
		},3000)
	}

	oSlideshow.onmouseover = function(){
		clearInterval(timer2)
	}

	oSlideshow.onmouseout = function(){
		autoPlay2()
	}


	//轮播的原理
	function toImg2 = function(){
		move(oslideshow_Ul,{left:-iNow2*slideshowiWidth})

		// for(var i=0;i<aBtn.length;i++){
		// 	aBtn[i].className = "";
		// }

		// aBtn[iNow2==aslideshow_Li.length-1?0:iNow2].className = "active";
	}
//拖拽区
// var aDrag = oslideshow_Ul.getElementsByTagName("p");
	oslideshow_Ul.onmousedown = function(e){
		var disX = e.offsetX;
		var  ul_long = oslideshow_Ul.offsetWidth;
			console.log(e);
		console.log(disX);
		document.onmousemove = function(e){
			e.preventDefault?e.preventDefault():e.returnValue = false;
			var l = -disX ;
			

			oslideshow_Ul.style.left = l +"px";
			
		   
		}

		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
	}
	
*/





//content2 a
var oImg_03_oA = document.getElementById("img_03_all_a");
oImg_03_oA.onmouseover = function(){
	 
	 this.className = "ashadow";
	
}
oImg_03_oA.onmouseout = function(){
	 
	 this.className = "";
	
}



//list渲染

// var str = "";
// var oList = document.getElementById("list");
// oList.innerHTML = str;

// oList.onclick = function(e){
// 	var e = e||event;
// 	var target = e.target || e.srcElement;
// 	if(target.tagName =="IMG"){
// 		var id = target.parentNode.getAttribute("data-id");



// 		//url？后面的东西是不会被解析的
// 		location.href="details.html?id="+id;
    
// 	}
// }


// var urlId = location.href.split("?")[1].split("=")[1];
// var str,str1="",str2;
// for(var i=0;i<obj.length;i++){
// 	if(obj[i].id == urlId){
// 		str=`<div id="box">
// 		  	<div id="filter"></div>
// 			<img src="${obj[i].src}" class="middle" width="400" height="400">
// 		  </div>`
		 
// 		for(var j=0;j<obj[i].maxImg.length;j++){
// 			console.log(obj[i].maxImg[j])
// 			str1+=`<img src=${obj[i].maxImg[j]}>`
// 		}

// 		str2 = `${str}<div id="minImg">${str1}</div>`;
// 		break;
// 	}
// }

// content.innerHTML = str2;



//   <div id="main_id">
// 		    <a href="../index.html">首页</a>
// 			<span> &lt; </span>
// 			<i></i>
// 		</div> -->
// 			 <!-- <div id="box">
// 		  	<div id="filter"></div>
// 			<img src="imgs/1-large.jpg" class="middle" width="400" height="400">
// 		  </div>
// 		<div id="minImg"></div> 















