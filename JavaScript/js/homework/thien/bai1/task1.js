document.getElementById("btn-salary").addEventListener('click', function (event){
    event.preventDefault();

    var workingDays = parseFloat( document.getElementById("workingDays").value )
    var oneDayIncome = 100.000

    document.getElementById("showSalary").innerHTML = workingDays * oneDayIncome 
})