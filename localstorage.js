(function(){
    if(!window.localStorage) {
        console.log('浏览器不支持localStorage');
    }
    var size = 0;
    for(item in window.localStorage) {
        if(window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length;
        }
    }
    console.log('当前localStorage剩余容量为' + (size / 1024).toFixed(2) + 'KB');
})()
(function() {
   if(!window.localStorage) {
   console.log('当前浏览器不支持localStorage!')
   }    var test = '0123456789';
   var add = function(num) {
     num += num;
     if(num.length == 10240) {
       test = num;
       return;
     }
     add(num);
   }
   add(test);
   var sum = test;
   var show = setInterval(function(){
      sum += test;
      try {
       window.localStorage.removeItem('test');
       window.localStorage.setItem('test', sum);
       console.log(sum.length / 1024 + 'KB');
      } catch(e) {
       console.log(sum.length / 1024 + 'KB超出最大限制');
       clearInterval(show);
      }
   }, 0.1)
 })()
 function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var dataURL = canvas.toDataURL("image/png");
			canvas = null;
            return dataURL // return dataURL.replace("data:image/png;base64,", "");
        } 
        function main() { 
            var img = document.createElement('img'); 
            img.src = './img/48/start_event_empty.png'; 
            img.onload =function() { 
                var data = getBase64Image(img); 
                console.log(data); 
            } 
            document.body.appendChild(img); 
        }
        main();
/**********************************************/
/***start ************************************/
function pdf(){
		var d = window.document,
		    ct = d.body,
		    data="data:image/svg+xml," +d.getElementById("myflow").innerHTML,
			img,
			canvas,
			context,
			width,
			height,
			imgData,
			doc;
			
		img = new Image();  
		img.src = data;  
		ct.appendChild(img); 
		img.onload=function(){
			canvas = d.createElement('canvas');  //准备空画布  
			canvas.width = width = img.width;  
			canvas.height = height = img.height;  
			context = canvas.getContext('2d');  //取得画布的2d绘图上下文  
			context.drawImage(img, 0, 0,width,height);
			imgData = canvas.toDataURL('png'); 
			//ct.removeChild(img); 
			setTimeout(function(){
				doc = new jsPDF('landscape','pt',[width,height])

				// 将图片转化为dataUrl

				doc.addImage(imgData, 'PNG', 0, 0, width, height);
				doc.save('a4.pdf');
			},0);
		}
		
		
	}
	function getBase64Image(img) {
		var canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, img.width, img.height);
		var dataURL = canvas.toDataURL("image/png");
		canvas = null;
		return dataURL // return dataURL.replace("data:image/png;base64,", "");
	} 
	function toHTML(){
		var d = window.document,
			ct = d.getElementById("myflow"),
			svgHtml = ct.innerHTML,
			html =['<title>测试内容</title>',svgHtml].join(''), 
			win = window.open('demo.html');
	    win.document.write(html);
	}
	//加法函数，用来得到精确的加法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1,arg2){
  var r1,r2,m;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2))
  return (arg1*m+arg2*m)/m
}
//给Number类型增加一个add方法，调用起来更加方便。
Number.prototype.add = function (arg){
  return accAdd(arg,this);
}
 
//减法函数，用来得到精确的减法结果
//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。
//调用：accSub(arg1,arg2)
//返回值：arg1减去arg2的精确结果
function accSub(arg1,arg2){
  var r1,r2,m,n;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  //last modify by deeka
  //动态控制精度长度
  n=(r1>=r2)?r1:r2;
  return ((arg1*m-arg2*m)/m).toFixed(n);
}
 
//除法函数，用来得到精确的除法结果
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function accDiv(arg1,arg2){
  var t1=0,t2=0,r1,r2;
  try{t1=arg1.toString().split(".")[1].length}catch(e){}
  try{t2=arg2.toString().split(".")[1].length}catch(e){}
  with(Math){
    r1=Number(arg1.toString().replace(".",""))
    r2=Number(arg2.toString().replace(".",""))
    return (r1/r2)*pow(10,t2-t1);
  }
}
//给Number类型增加一个div方法，调用起来更加方便。
Number.prototype.div = function (arg){
  return accDiv(this, arg);
}
 
//乘法函数，用来得到精确的乘法结果
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function accMul(arg1,arg2) {
  var m=0,s1=arg1.toString(),s2=arg2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return  Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
//给Number类型增加一个mul方法，调用起来更加方便。
Number.prototype.mul = function (arg){
  return accMul(arg, this);
}
<br>//验证一下：
console.log(accAdd(1.79, 0.12));  //1.91
console.log(accSub(2.01, 0.12));  //1.89
console.log(accDiv(0.69, 10));    //0.069<br>console.log(accMul(1.01, 1.3));   //1.313　　