function removeRow() {

    //Getting the user input
    var rowToDelete = document.getElementById("rowRemoveInput").value;

    //delete from table
    document.getElementById("freezerContent").deleteRow(rowToDelete);

    //Delete from info table on other tab too.
    //document.getElementById("itemInfoTable").deleteRow(rowToDelete);
}