function search(ele) {
  document.getElementById('search').onkeydown = function(e){
    if(e.key === 'Enter') {
      term = ele.value;
      //alert(term);  
      z = recursiveFunction(term, 0, 42013)
      //alert(z);
      if(sub[z].POPESTIMATE2020 == term){
        p = 0;
        y = 0;
        while((sub[z + p].POPESTIMATE2020 == term)){
          p++;
        }
        while((z - y > -1) && (sub[z - y].POPESTIMATE2020 == term)){
          y++;
        }
        q = z - y + 1;
        r = z + p;
        m = Math.floor(Math.random() * (r - q) + q);
        z = m;
      }
      if(sub[z].Name === sub[z].STNAME){
        //alert(sub[z].Name + ', ' + sub[z].Country);
        window.open('http://google.com/search?q='+sub[z].Name + ', ' + sub[z].Country);
      } else{
        //alert(sub[z].Name + ', ' + sub[z].STNAME + ', ' + sub[z].Country);
        window.open('http://google.com/search?q='+sub[z].Name + ', ' + sub[z].STNAME + ', ' + sub[z].Country);
      }
    }
  }
}

let recursiveFunction = function (x, start, end) { 
  if(parseInt(sub[end].POPESTIMATE2020) < x){
  
  	return end;
  }
  // Base Condition
  if (start > end){
      if((parseInt(sub[start].POPESTIMATE2020) - x) > parseInt(sub[end].POPESTIMATE2020)-x){
        return start;
      } else{
        return end;
      }
  }
  // Find the middle index
  let mid=Math.floor((start + end)/2);
  
  // Compare mid with given key x
  if (parseInt(sub[mid].POPESTIMATE2020) ==x){ 
    return mid;
  }
       
  // If element at mid is greater than x,
  // search in the left half of mid
  if(parseInt(sub[mid].POPESTIMATE2020) > x){
      return recursiveFunction(x, start, mid-1);
  }
  else{

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(x, mid+1, end);
  }
}
  
