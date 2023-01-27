


function max(array) {
  let map = new Map()
  let res = 0
  let flag = true
  
  for(let char of array) {
    if(map[char]) {
      map[char]++
    }else {
      map[char] = 1
    }
  }
  
  for(let key in map) {
    if(map[key]%2 === 0) {
      res += map[key]
    }else {
      res += map[key]-1
      flag = false
    }
  }
  if(!flag) res = res+1
  
  return res
}


  console.log(max(["a","a","a","b","b","c","c"]));

  let arr = [2,1,2]
  arr.length = 1
  console.log(arr)
