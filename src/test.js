function rearrange(arr) {
    arr = [1,2,3,4];
    const ascArr = arr.sort((a,b)=> a-b);
    const descArr = arr.sort((a,b)=> b-a);
    const newArr = [];
    let count = 0;
    return descArr.map((ele, index)=>{
        if(index === 0 || index ===1 )  {
            return ele
        } else if(index%2 === 0) {
            return ascArr[count];
            count++;
        } else {
            return ele
        }
        
    })
}

function calc (arr) {
    console.log('array is ', arr);
    const newArr = arr.map((ele, index) => {
        if(index === 0 || index === 1 ){
            return ele
        } else if(index%2 === 0 ) {
            return 1/+ele
        } else {
            return ele
        }
    })
    return newArr.reduce((res, curr)=> {
        return +res * +curr;
    })
}

console.log('result----',calc(rearrange()))