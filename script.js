function volume_sphere() {
    //Write your code here
	let form= document.getElementById("MyForm");
	let r=form.radius.value;
	// console.log(r);
	form.volume.value= ((4/3)*Math.PI* (r*r*r)).toFixed(4);
	 event.preventDefault();
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
