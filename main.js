
function runUpdate() {
    clearTable();
    calculateCompound(parseInt(document.getElementById("inputAtm").value, 10), parseInt(document.getElementById("inputDuration").value), 10);
}


function clearTable() {
    var table = document.getElementById("dataTable");
    if (table.rows.length > 1) {
        for (var i = table.rows.length-1; i > 0; i--) {
            table.deleteRow(i);
        }
    }
    else {
        return;
    }
    
}

// Calculates the number of gems obtained daily by x number of atms
function calculateDaily(numAtms) {
    var dailyGems = Math.round(numAtms * 10.9);
    return dailyGems;
}


function calculateCompound(numAtms, duration) {
    var cumulativeGems = 0;
    var currentAtms = numAtms;

    for (var i = 1; i <= duration; i++) {
        var dailyGems = calculateDaily(currentAtms);
        cumulativeGems += dailyGems;
        console.log("Atms: " + currentAtms + "\nGems: " + dailyGems);

        addToTable(i, currentAtms, dailyGems, cumulativeGems);

        // Adds atms to next days total & gems by buying city packs
        if (dailyGems > 8000) {
            currentAtms = currentAtms + Math.floor(dailyGems / 8000);
        }
        
    }
}


function addToTable(day, atms, dGems, cGems) {
    var table = document.getElementById("dataTable");
    // create and add a row to the end of the table
    var row = table.insertRow(-1);

    // create and add cells to the previously created row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Define the information put within each cell
    cell1.innerHTML = day;
    cell2.innerHTML = atms;
    cell3.innerHTML = dGems;
    cell4.innerHTML = cGems;

}