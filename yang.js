// --- JSYang lib -----
// mie_686@yahoo.com
// 7:15 PM 8/30/2009

var y={
	

	// --- basic -----
	w: function(a){document.write(a);},
	o: function(a){return document.getElementById(a)},


	// --- matrix operations -----
	m: {
		add: function(a,b){ var c=a; for(var i in c) c[i]+=b[i]; return c; },
		sub: function(a,b){ var c=a; for(var i in c) c[i]-=b[i]; return c; },

		ANDmask: function(a,b,empty){
			var c=a;
			for(var i in c){
				c[i]=(b[i])?c[i]:empty;
				if(!c[i]) c[i]=empty;
			}
			return c;
		}	
	},
	
	// --- async JS ---
	async: {
		newASync:function(){
			if (window.ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
			else return new XMLHttpRequest();
		}
	},

	// --- cookie handling ---
	cookie: {
		get:function(c_name){
			if (!document.cookie.length) return "";
			c_start=document.cookie.indexOf(c_name + "=");
			if (c_start!=-1){
				c_start=c_start + c_name.length+1;
				c_end=document.cookie.indexOf(";",c_start);
				if (c_end==-1) c_end=document.cookie.length;
				return unescape(document.cookie.substring(c_start,c_end));
			}
			return "";
		},

		set:function(c_name,value,expiredays){
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		}
	}
};
