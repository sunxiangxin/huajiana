//nav导航
	var aLi = document.querySelectorAll("#nav_ul>li");
	for(var i=0;i<aLi.length;i++){
		 aLi[i].onmouseover = function(){
		 	 var a = this.children[0];
			 a.className ="active";

			 //将二级导航显示
			 var ul = this.children[1];
			 if(ul)
			 	{
					 ul.style.display = "block"; 
					 var aA = ul.children;
					 for(var k = 0;k<aA.length;k++){

					 	aA[k].onmouseover = function(){
					 		this.className = "active2";
					 	}
					 }
			 	}
			 //当移入二级导航的时候给二级导航添加active		
		 }

			//鼠标移出的时候将a标签的颜色移除
			aLi[i].onmouseout = function() {
			//给a标签添加active
			var a = this.children[0];
			a.className ="";       
			//将二级导航隐藏
			var ul = this.children[1];
			if(ul){
			 	ul.style.display = "none";
			 	
			 	//当移入二级导航的时候将颜色去掉
				 var aA = ul.children;
				 for(var k = 0;k<aA.length;k++){
				 	aA[k].className = "";
				 }
			}
			 
		}
	} 



//top按钮
var oTop = document.getElementById("top");

oTop.onclick = function(){
	
	document.documentElement.scrollTop  =  document.body.scrollTop  = 0;
}
//点击对象
// function fun(event){


//           var node = event.childNodes;


//          for(var i=0;i<node.length;i++){


//                 alert("node["+i+"]:"+node[i].innerHTML);


//          }


//     }