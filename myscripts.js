			var timt1=new Image();
			var timt2=new Image();
			var timt3=new Image();
			var timt4=new Image();
			var timt5=new Image();
			var timt6=new Image();
			timt1.src="images/timt1.jpg";
			timt2.src="images/timt2.jpg";
			timt3.src="images/timt3.jpg";
			timt4.src="images/timt4.jpg";
			timt5.src="images/timt5.jpg";
			timt6.src="images/timt6.jpg";
			function bb()
			{
				var error="";
				document.getElementById("Depart").style.border="";
				document.getElementById("Semester").style.border="";
				document.getElementById("Subjects").style.border="";
				var x=document.getElementById("Depart").value;
				var y=document.getElementById("Semester").value;
				var z=document.getElementById("Subjects").value;	
				if(x=="")
				{
					error+="Please select your department\n";
					document.getElementById("Depart").style.border="5px solid blue";
				}
				if(y=="")
				{
					error+="Please select your semester\n";
					document.getElementById("Semester").style.border="5px solid blue";
				}
				if(z=="")
				{
					error+="Please select your subject\n";
					document.getElementById("Subjects").style.border="5px solid blue";
				}
				if(error!="")
				{
					alert(error);
				}
			}