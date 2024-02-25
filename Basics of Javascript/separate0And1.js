function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
function separate(arr){
    let i = 0;
    let j = arr.length -1;
    while(i <= j){
        if(arr[i] == 1) {
            swap(arr, i, j);
            j--;
        }
        else {
            i++;
        }
    }
}
// function separate(arr) {
//     if (arr.length === 0) {
//       return;
//     }
  
//     let i = 0;
//     let j = 0;
//     while (j < arr.length) {
//       if (arr[j] === 0) {
//         // Move 0 to the beginning of the array
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//       }
//       j++;
//     }
//   }

let arr = [1,1,0,1,0,1,0,1,0,1,0,1,0];
separate(arr);
console.log(arr);