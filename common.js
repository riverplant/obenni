  function contains(arr, obj) {  
		    var i = arr.length;  
		    while (i--) {  
		        if (arr[i] ==obj) {  
		            return true;  
		        }  
		    }  
		    return false;  
		}  
var commurl="http://127.0.0.1:8080";

/*******************************************************************/
var driverIds=[];
var driverNames = [];
	 $.ajax({
	    	url:commurl+'/observice/diction/getListFromDic.do',
	        async:false,
	         success : function(msg) { 
	                 var result=msg.rows;
	               //  console.log(result);
	                 if(result && result.length>0){
	                	 for(var i = 0;i<result.length; i++) {
		                	 var obj=new Object();
		                	 obj.id=result[i].id;
		                	 obj.name=result[i].text;
		                	 driverIds.push(result[i].id);
		                	 driverNames.push(result[i].text);
		                 } 
	                 }
	                
	        } 
	    }); 

	  