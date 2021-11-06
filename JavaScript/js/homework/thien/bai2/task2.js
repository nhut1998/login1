document.getElementById('sumAdverage').addEventListener('click', function (event){
    event.preventDefault()

    var first = parseFloat(document.getElementById('firstNumber').value)
    var second = parseFloat(document.getElementById('secondNumber').value )
    var thirt = parseFloat(document.getElementById('thirtNumber').value )
    var fourth = parseFloat(document.getElementById('fourthNumber').value)
    var fifth=  parseFloat(document.getElementById('fifthNumber').value)

    var adverage = (first + second + thirt + fourth + fifth) /5

    document.getElementById('show').innerHTML = adverage
})