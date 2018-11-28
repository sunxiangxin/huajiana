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
	var str = "";
    var oList = document.getElementById("list");

   if(getCookie("info2")){
	    var  arr = JSON.parse(getCookie("info2"));
	    var str1 = "";
        for(var i=0;i<arr.length;i++){
	        for(var j=0;j<data.length;j++){  
	         if(data[j].id == arr[i].id){
	            str+=`<tr  data-id=${data[j].id}>
		            <td><img src="${data[j].src}" class="smallPic"></td>
		            <td>${data[j].price}</td>
		            <td>
		                <button class="reduce">-</button>
		                <input type="text" value="1" class="num">
		                <button class="add">+</button>
		            </td>
		            <td>${data[j].price}</td>
		            <td class="del">删除</td>
		        </tr>`
		     
		        }
		    }
		}

       str1 += str;     
       var str2 = `<tr id="car_foot"><td></td><td></td><td></td><td id="num">总计：</td><td id="sum">结算：</td></tr>`;
       oList.innerHTML += str1+str2;
      
   }
   //商品减
		var aReduce = document.querySelectorAll(".reduce");

		for(var i=0;i<aReduce.length;i++){
			aReduce[i].onclick = function(){
				var num = Number(this.nextElementSibling.value);
				if(num>1){
					num--
				}else{
					num=1;
				}
				
				this.nextElementSibling.value = num;
              
				var price = Number(this.parentNode.parentNode.children[1].innerText.slice(1));

				this.parentNode.nextElementSibling.innerText = "￥"+(price*num);
             
				var tr_id = this.parentNode.parentNode.getAttribute("data-id")

                for(var j =0;j<arr.length;j++){
                	     if(arr[j].id==tr_id){
                	     	arr[j].num = this.nextElementSibling.value;
                	     }
                	
                }
          //商品变化，更新cookie值
				setCookie("info2",JSON.stringify(arr),7);

			}
		}
//商品加
		var aAdd = document.querySelectorAll(".add");

		for(var i=0;i<aAdd.length;i++){
			aAdd[i].onclick = function(){
				var num = Number(this.previousElementSibling.value);
				num++
				this.previousElementSibling.value = num;
              
				var price = Number(this.parentNode.parentNode.children[1].innerText.slice(1));

				this.parentNode.nextElementSibling.innerText = "￥"+(price*num);
             
				var tr_id = this.parentNode.parentNode.getAttribute("data-id")

                for(var j =0;j<arr.length;j++){
                	     if(arr[j].id==tr_id){
                	     	arr[j].num = this.previousElementSibling.value;
                	     }
                	
                }
          //商品变化，更新cookie值
				setCookie("info2",JSON.stringify(arr),7);

			}
		}
//商品删
        
		var aDel = document.querySelectorAll(".del");
		for(var i=0;i<aDel.length;i++){
				aDel[i].onclick = function(){
						var del_Arr = [];
						var id = this.parentNode.getAttribute("data-id");
					  	for(var j =0;j<arr.length;j++){
	                	     if(arr[j].id!=id){
	                	     	 del_Arr.push(arr[j]);	                	     	
	                	     }
					 	 //removeCookie("info2",arr[j]);
						}
					setCookie("info2",JSON.stringify(del_Arr),7);
					this.parentNode.remove();
				}
		}
		
	})

   



