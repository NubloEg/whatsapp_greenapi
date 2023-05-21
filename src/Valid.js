export const numberValid=(number)=>{

    let numb;
    if (typeof(number)==='number') {
        numb=toString(number).split('')
    }else{
        numb=number.split('')
    }
   
    if (numb[0]==='+') {
        if (number.length>12) {
            alert('Номер введен не верный')
            return false
        }else{
           
            return numb.join('').slice(1)
        }
    }else if(numb[0]==='8'){
        
        if (number.length>11) {
            alert('Номер введен не верный')
            return false
        }else{
            
            return `7${numb.join('').slice(1)}`
        }
    }else if (numb[0]==='7') {
        if(numb.length===11){
            return numb.join('')
        }else{
            alert('Номер введен не верный')
            return false
        }
        
    }
}