
    const numbers =
    [
        "12",
        "03",
        "05",
        "01",
        "06",
        "04",
        "07"
    ]
    
function asc(numbers){
    // numbers.sort(function(a, b){return b-a});
    // console.log(numbers)
    for (i = 0 ; i < numbers.length  ; i ++){
        for (j = 0 ; j < numbers.length ; j++){
            if (numbers[i] < numbers[j]){
               temp = numbers[i]
               numbers[i] = numbers[j]
               numbers[j] = temp
            }
        } 
    } return numbers
    
}console.log(asc(numbers))

function des(numbers){
    // numbers.sort(function(a, b){return a-b});
    // console.log(numbers)
    for (i = 0 ; i < numbers.length  ; i ++){
        for (j = 0 ; j < numbers.length ; j++){
            if (numbers[i] > numbers[j]){
               temp = numbers[i]
               numbers[i] = numbers[j]
               numbers[j] = temp
            }
        } 
    } return numbers
    
}console.log(des(numbers))