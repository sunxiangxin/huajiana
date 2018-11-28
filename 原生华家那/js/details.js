//宣染页面
var urlId = location.href.split("?")[1].split("=")[1];
//file:///E:/%E5%A5%BD%E7%A8%8B%E5%BA%8F%E5%91%98-7/day13-javascript-ES6/%E9%9A%8F%E5%A0%82%E6%A1%88%E4%BE%8B/%E8%AF%A6%E6%83%85%E9%A1%B5/details.html?id=2
var ocontent = document.getElementById("content");
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

			var str,str1="",str2;
			for(var i=0;i<data.length;i++){
				if(data[i].id == urlId){
					str=`<div class="box">
					  	<div class="filter"></div>
						<img src="${data[i].src}" class="middle" width="400" height="400">
					  </div>`
					 
					for(var j=0;j<data[i].minImg.length;j++){
					
				        var min_src = data[i].minImg[j];						
						str1+=`<img src=${data[i].minImg[j]} data-url=${min_src}>`
						
					}

					str2 = `${str}<div class="minImg">${str1}</div>
							<div class="max">
								<img src="${data[i].src}" class="bigImg" width="800" height="800">
							</div>
							  <div class="afont">
						   			<h3>${data[i].title}</h3>
									<h4>颜色：<a>${data[i].color}</a></h4>
									<i>价格:${data[i].price}</i>
									<span>尺码：<a>${data[i].size}</a></span>
									<button class="oBtn">加入购物车</button>
									<button class="oReturn" id="oReturn">返回列表</button>
							</div>`
			// 	   for(var k=0;k<data[k].size.length;k++){
			// 	   	     data[k].size.parents.className="act_a";
			// 	   }

					break;
				}
              

			}
			//

      ocontent.innerHTML = str2;
      
		                 

		new Magnifier("#content",{
				minImg:".minImg",
				middle:".middle",
				bigImg:".bigImg",
				filter:".filter",
				box:".box",
				max:".max"
		}).init();
			
       

  // var cart = document.getElementById("fixed_car");
   var oReturn = document.getElementById("oReturn");
	oReturn.onclick = function(){
		location.href="list.html"
	} 




        //获取cookie

		ocontent.onclick = function(e) {
            
		   var e = e||event;
		   var target = e.target||e.srcElement;
		 
		  
		   if(target.tagName == "BUTTON" && target.className == "oBtn"){


			   	if(getCookie("info")){
			          gid = JSON.parse(getCookie("info"));

			    }
		   	
		        var goodsId = gid.id;
		       // console.log(goodsId);
		      /*
		      [{id:01,num:1},{id:02,num:2}]  
		    
		       */
		      //定义一个空的对象
		       var goods = {}
		       

		       /*
		        获取当前的cookie将这个值转换成对象保存在arr中

		        如果没有,声明一个数组

		        */
		       if(getCookie("info2")){
		          arr = JSON.parse(getCookie("info2"));

		       }else{
		          var arr = [];
		       }


		       if(arr.length>0){

		         for(var i=0;i<arr.length;i++){
		            var bStop = false;

		            if(arr[i].id == goodsId){
		                arr[i].num++;
		                bStop = true;
		                break;
		            }
		         }

		         if(!bStop){
		            goods.id = goodsId;
		            goods.num = 1;
		            arr.push(goods)
		         }

		       }
		       else{
		            goods.id = goodsId;
		            goods.num = 1;
		            arr.push(goods);
		       }
		      

		      //将数组转换为字符串存入cookie
		       setCookie("info2",JSON.stringify(arr),7);
		       location.href='../html/car.html';
		   }
		}
		


	})


