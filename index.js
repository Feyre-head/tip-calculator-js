
function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
 

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    let billEachPerson = tipPercent / split
    
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'; 
    document.getElementById('tipValue').innerHTML = '$ ' + tipValue;
    document.getElementById('billEach').innerHTML = '$ ' + billEach
    document.getElementById('tipValueEach').innerHTML = '$ ' + billEachPerson
     

    if(split == 1){
        document.getElementById('splitValue').innerHTML = split + " Person"
    } else {
        document.getElementById('splitValue').innerHTML =  split + " People"}

    
}

