//ajax调数据
	new Promise(function(resolve,reject){
		
		ajax({
				type:"get",
				url:"../json/list.json",
				data:{},
				success:function(data){
					var data =JSON.parse(data);
					resolve(data);

					}
				})
		   
	}).then(function(data){

		var len = Math.ceil(data.length/9);
		var obtnList = document.querySelector(".btnList");;
		var oMain = document.getElementById("main");
		var oLast = document.querySelector(".last");
		var ofirst = document.querySelector(".first");
		var iNow = 1;
		for(var i=0;i<len;i++){
			var a = document.createElement("a");
			a.className = "page";
			a.innerText = (i+1);
			obtnList.insertBefore(a,oLast);
		}
        
		var aA = document.querySelectorAll(".page");
		aA[0].className = "code1";
		pageNum(iNow);
		function pageNum(n){
			str = `
				 <div id="main_id">
				    <a href="../index.html">首页</a>
				 	<span> &gt; </span>
				 	<i>女装精品</i>
				 </div>
				 `
			for(var i = (n-1)*9;i<n*9;i++){

				if(i % 9 ==0){
					str +=`
	 				<ul class="top_Li">
	 					<li><a href="#">新品上新</a></li>
	 					<li><a href="#">羊绒针织</a></li>
	 					<li><a href="#">外搭精选</a></li>
	 					<li><a href="#">保暖配饰</a></li>
	 				</ul><ul class="img_Li">
			`
				}
				 str += `
				 <li>

	 	           <div class="box" data-id=${data[i].id}>
	 	               <img src="${data[i].src}">		            
	 	               <p class="mainTitle">${data[i].title}</p>
	 	             			           
	 	           </div>
	 	       </li>`
			}
			str = str+"</ul>";
		    oMain.innerHTML = str;
		}



		oLast.onclick = function(){
			if(iNow == len){
				iNow = len;
			}else{
				iNow++;
			}

			pageNum(iNow)
			toggle(iNow)	
		}

		ofirst.onclick = function(){
			if(iNow == 1){
				iNow = 1;
			}else{
				iNow--;
			}
			pageNum(iNow)
			toggle(iNow)
		}


		function toggle(iNow){
			for(var j=0;j<aA.length;j++){
				aA[j].className = "";
			}
			aA[iNow-1].className = "code1"
		}
		
		for(var i=0;i<aA.length;i++){
			aA[i].index = i;
			aA[i].onclick = function(){
				for(var j=0;j<aA.length;j++){
					aA[j].className = "";
				}

				this.className = "code1";
				iNow = (this.index+1);
				pageNum(iNow)
			}
		}
		//获取商品所在div
		var odiv = document.getElementById("main");
		var oul = document.querySelector(".img_Li");
		var adiv = oul.querySelectorAll(".img_Li>li>div");		
		for(var i=0;i<adiv.length;i++){

			adiv[i].onmouseover = function(){
                    
                    this.children[0].style.left = "5px";
					this.children[0].style.width = "359px";
					this.children[0].style.border = "5px solid #d5b083"
					this.children[0].style.height = "359px";
					//this.style.overflow = "hidden";
		
			}
			adiv[i].onmouseout = function(){
                    
                   
					this.children[0].style.width = "369px";
					this.children[0].style.height = "369px";
					this.children[0].style.border = "none";
		
			}

			odiv.onclick = function(e){
					var e = e||event;
					var target = e.target || e.srcElement;
					if(target.tagName =="IMG"){
						var goodsId = target.parentNode.getAttribute("data-id");
						//
								    //定义一个空的对象
				        var goods = {}
				       

				       /*
				        获取当前的cookie如果当前cookie中存在值的话那么我将这个值转换成对象保存在arr中

				        如果当前cookie中没有值的话  那么我就声明一个数组

				        */
				       if(getCookie("info")){
				          removeCookie("id","goodsId");
				          var goods = {}
				          goods.id = goodsId;
				       }
			      			
				       else{
				            goods.id = goodsId;
				       				          
				       }
						      

				      //将数组转换为字符串存入cookie
				       setCookie("info",JSON.stringify(goods),7);
				      



						//url？后面的东西是不会被解析的
						location.href="details.html?id="+goodsId;
				    
					}
			}

		}
		var oMain = document.getElementById("main");
		var top_Ul = document.getElementsByClassName("top_Li")[0];
		var atop_Li = top_Ul.children;
		for(var i=0;i<atop_Li.length;i++){
		        
			  atop_Li[i].onmouseover = function(){
			  	  var _this = this;
			  	  for(var j=0;j<atop_Li.length;j++){
			  	  			_this.className="";
			  	  }
			  	  this.className = "actli";
			  }
			  atop_Li[i].onmouseout = function(){
			  	  
			  	  this.className = "";
			  }
		}

		
})




