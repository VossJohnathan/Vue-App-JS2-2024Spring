// This will be used as <item-table> in the html.
app.component('itemTable', {
    props: {
        itemNumber: {
            type : String,
            default: '#'
        },
        itemName: {
            type : String,
            default: 'Item Name'
        },
        quantity: {
            type : String,
            default: "Quantity"
        },
        quantityType: {
            type : String,
            default: 'Qty Type'
        },
        favorite: {
            type: String,
            default: 'Favorite'
        }

    },

    template: `
      <table class="table table-striped" id="freezerContent">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Qty Type</th>
          <th scope="col">Favorite</th>
        </tr>
        </thead>
      </table>
    `
});