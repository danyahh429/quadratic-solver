function getID(i){
	return document.getElementById(i);
}
function getVal(i){
	return getID(i).value;
}
/*whenever user would press the #submit button, we want to do execute some function solve().  */
function solve(){
  var a = parseInt( getVal("a") ),
    b = parseInt( getVal("b") ),
    c = parseInt( getVal("c") );
	/*Last 3 lines with if ( isNaN(x) ) { x = ... } ensure that we don't have a NaN type inside a, b, or c. */
  if ( isNaN(a) ) { a = 1; }
  if ( isNaN(b) ) { b = 0; }
  if ( isNaN(c) ) { c = 0; }
	/*calculate the discriminant */
	var D= (b*b) - (4 * a * c);
	// variable declaration and intialization
	var dis = getID("DIS"),
  	nos = getID("NOS"),
    s1  = getID("S1"),
    s2  = getID("S2");
  nos.style.display = "none";
  s1.innerHTML = ""; // solutions are empty
  s2.innerHTML = "";
  dis.innerHTML = 'Discriminant = <span id="D"></span>';
  var d = getID("D");
	// test for possible solutions -amount of
	d.innerHTML = D.toString();
	if (D < 0) {
    // no real roots
    nos.style.display = "block";// display #NOS
  } 
  else if (D == 0) {
    // one solution
    // S = -b / (2a)
		S = -b / (2 * a);
		s1.innerHTML = S.toString();
	
  } 
  else {
    // two roots 
	  // S1 = (-b + √D) / (2a)
    // S2 = (-b - √D) / (2a)
		var S1 = ( -b + Math.sqrt(D) ) / (2 * a),
      S2 = ( -b - Math.sqrt(D) ) / (2 * a);
    s1.innerHTML = S1.toString();
    s2.innerHTML = S2.toString();
  }
}




var submitButton = document.getElementById("submit");
submitButton.onclick = function() {
	solve();
};