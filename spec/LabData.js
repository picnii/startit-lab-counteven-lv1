var labdata = {
	name:"Function : Animation ",
	steps:[
		{
			name:"Timer Animation", 
			content:"ฝึกทดลองสร้าง Animation โดยใช้ Timer เข้ามาช่วย " ,
			code:"http://learn.picnii.me/contents/31",
			class:"in"
		},

		{
			name:"ขอ input 3 ปุ่ม", 
			content:"สำหรับให้ทำงาน 3 การกระทำ โดย ปุ่ม A คือ Animate ปุ่ม B หยุด ปุ่ม C ทำภาพแปปนึงแล้วหาย " ,
			code:"showInput('button', 4);",	
		},
		
		{
			name:"เริ่มต้นรูปหมาหลับ",
			code:"img/dog4.jpg",			 
		},

		{
			name:"function doMove() ", 
			content:"การเรียกใช้ ใน แต่ละครั้งจะทำการเปลี่ยนรูปหมา เป็น dog1 เรียกอีกที เป็น dog2 เรียกอีกที dog3 แล้วก็กลับมา dog1,dog2,dog3 แบบนี้เรื่อยๆ" ,
			code:"doMove() --> dog1.jpg\ndoMove() --> dog2.jpg\ndoMove() --> dog3.jpg\ndoMove() --> dog1.jpg\ndoMove() --> dog2.jpg",
		},

		{
			name:"doAnimate()", 
			content:"เรียกใช้ doMove() ทุก 1/10 วิ " ,
			code:"setInterval(), 1/10 ==  100 ms",
		},

		{
			name:"stopAnimate()", 
			content:"สร้าง function ที่เมื่อใช้งานแล้วจะทำให้ animation หยุด" ,
			code:"clearInterval()",
		},

		{
			name:"oneTimeOut()", 
			content:"ถ้าเรียกใช้ จะแสดงภาพ dog2.jpg ครึ่งวินาที แล้ว เปลี่ยน กลับเป็นภาพเดิม" ,
			code:"setTimeout()",
		},

		{
			name:"bind กับปุ่มต่างๆ", 
			content:"เรียกใช้ให้ปุ่ม A เรียก doAnimate(), B เรียก stopAnimate() และทำให้กลับมารูปหมาหลับ, C เรียก oneTimeOut()" ,
			code:"onSubmitA(), onSubmitB(), onSubmitC()",
		},

	],
	type:"lab",


}