			var timt1=new Image();
			var timt2=new Image();
			var timt3=new Image();
			var timt4=new Image();
			var timt5=new Image();
			var timt6=new Image();
			timt1.src="timt1.jpg";
			timt2.src="timt2.jpg";
			timt3.src="timt3.jpg";
			timt4.src="timt4.jpg";
			timt5.src="timt5.jpg";
			timt6.src="timt6.jpg";
			var step=1;
					function aa()
					{
						if(!document.images)
						return;
						document.images.slide.src=eval("timt"+step+".src");
						if(step<6)
						{
							step++;
						}
						else
						{
							step=1;
						}
						setTimeout("aa()",4000);
					}
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