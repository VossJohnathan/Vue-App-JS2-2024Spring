// This should be used as <info-table>
app.component('infoTable', {
    props: {
        itemNumber: {
            type : String,
            default: '#'
        },
        itemName: {
            type : String,
            default: 'Item Name'
        },
        buyDate: {
            type : String,
            default: "Buy Date"
        },
        expirationDate: {
            type : String,
            default: 'Expiration Date'
        }

    },

    template: `
      <table class="table table-striped" id="itemInfoTable">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item Name</th>
          <th scope="col">Buy Date</th>
          <th scope="col">Expiration Date</th>
        </tr>
        </thead>
      </table>
    `
});