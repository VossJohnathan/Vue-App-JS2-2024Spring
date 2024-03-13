// This should read as <info-tablerow> in the html.

//This component does not work -- Ask Question about it.
app.component('infoTableRow', {

    data: function() {
        return {
            itemInfo: [
                {number: 1, name: 'Dino Nuggets', buyDate: '3-6-2024', expirationDate: '4-20-2024'},
                {number: 2, name: 'Hot Pocket', buyDate: '2-26-2024', expirationDate: '3-12-2024'},
                //Everlasting Ice Cream cone \o/
                {number: 3, name: 'Ice Cream', buyDate: '3-15-44 B.C.', expirationDate: 'N̴̡̰̠̟̩̱͍͇͕͓̮͔̪̜͊̽̉̏̾̐ͅÈ̵̥̠̗͈̬̯̣̯̯͇̥͇̙͔̘͋̇͠V̶̧̨̧̢̡̧̨̧̠͍̟̺͊̂͠ͅĖ̴̡͍̺͚̼̘̹Ř̵̪̠̪̽̾͋̒͂'},
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
        buyDate: {
            type : String,
            default: '01-01-2024'
        },
        expirationDate: {
            type : String,
            default: '01-01-2024'
        }
    },

    template: `
      <table class="table table-striped">
        <thead>
        <tr v-for="row in itemInfo" :key="row.number" >
          <td>{{ row.number}}</td>
          <td>{{ row.name}}</td>
          <td>{{ row.buyDate}}</td>
          <td>{{ row.expirationDate}}</td>
        </tr>
        </thead>
      </table>
       
   `
});