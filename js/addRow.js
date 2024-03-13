function addRow() {
    //Grabbing the table ID that we're using
    var table = document.getElementById("freezerContent");

    //Creating new row. -1 means at the end of the table.
    var row = table.insertRow(-1);

    //Creating content cells
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    var c3 = row.insertCell(2);
    var c4 = row.insertCell(3);
    var c5 = row.insertCell(4);

    //Automatically add Table numbers
    var tableNum = document.getElementById("freezerContent");
    for (var i = 0, rowNum; rowNum = tableNum.rows[i]; i++)

    //Getting Item Name
    //var itemName = document.getElementById("newItemName").value;
    var itemName = document.getElementById('newItemNameInput').value;


    //Getting Item Quantity
    var itemQuantity= document.getElementById("newItemQuantityInput").value;

    //Getting Quantity Type
    var itemQuantityType = document.getElementById("newItemQuantityTypeInput").value;

    //Getting Favorite
    var itemFavorite = ' '
    if (document.getElementById('addToFavorite').checked) {
        itemFavorite = 'Favorite!'
    }

    // Adding data via user input
    c1.innerText = (i-1)
    c2.innerText = itemName
    c3.innerText = itemQuantity
    c4.innerText = itemQuantityType
    c5.innerText = itemFavorite

}