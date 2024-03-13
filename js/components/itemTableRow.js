// This should read as <item-table-row> in the html.

app.component('itemTableRow', {

    data: function() {
        return {
            //Now how to I go adding this to a table?
            freezerContent: [
                {number: 1, name: 'Dino Nuggets', quantity: 12, quantityType: 'Bags', favorite: 'Favorite!'},
                {number: 2, name: 'Hot Pocket', quantity: 3, quantityType: 'Boxes', favorite: ' '},
                {number: 3, name: 'Ice Cream', quantity: 2, quantityType: 'Tubs', favorite: 'Favorite!'},
            ],
        }
    },

    props: {
        number: {
            type : Number,
            default: 1
        },
        name: {
            type : String,
            default: 'TestName'
        },
        quantity: {
            type : Number,
            default: 123
        },
        quantityType: {
            type : String,
            default: 'testBoxes'
        },
        favorite: {
            type : String,
            default: 'Favorite!'
        }
    },

    template: `
      <table class="table table-striped">
        <thead>
        <tr v-for="row in freezerContent" :key="row.number" >
          <td>{{ row.number}}</td>
          <td>{{ row.name}}</td>
          <td>{{ row.quantity}}</td>
          <td>{{ row.quantityType}}</td>
          <td>{{ row.favorite}}</td>
        </tr>
        </thead>
      </table>
     
     
       
   `
});