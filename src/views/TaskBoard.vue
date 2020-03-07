<style scoped>
table {
  border-collapse: collapse;
}
td,
th {
  padding: 3px;
  border: solid 1px;
  width: 200px;
  height: 50px;
}
td {
  vertical-align: top;
}

.not-available {
  background: black;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
  <div>
    <div>
      <table title="Stow">
        <caption>
          <h1>Stow Path</h1>
        </caption>
        <tr>
          <th>Stow</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>G</th>
          <th>H</th>
          <th>J</th>
        </tr>
        <tr>
          <th>1-2</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>3-4</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>5-6</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>7-8</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>9-10</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Divert</th>
          <td class="placeable"></td>
          <td class="not-available"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable">
            <caption>floor</caption>
          </td>
          <td class="placeable">
            <caption>dock</caption>
          </td>
          <td class="not-available"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Stage</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Stage</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
      </table>

      <table>
        <caption>
          <h1>Dock</h1>
        </caption>
        <tr>
          <th></th>
          <th>Belt 1</th>
          <th>Belt 2</th>
          <th>Belt 3</th>
          <th>Belt 4</th>
          <th>Belt 5</th>
        </tr>
        <tr>
          <th>Unload</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Induct</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Divert</th>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
          <td class="placeable"></td>
        </tr>
        <tr>
          <th>Water Spider</th>
          <td colspan="5"></td>
        </tr>
      </table>
    </div>
    <div>
      <h1>AA's</h1>
      <div class="flex-container placeable" ref="cardBank">
        <Card
          v-bind:associate="{
						name: 'Hello World',
						login: 'helwor',
						workdays: 'Mon-Fri'
					}"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Card from "../components/Card";
var CardClass = Vue.extend(Card);
const axios = require("axios").default;
export default {
  name: "task-board",
  components: {
    Card
  },
  data() {
    return {
      associate: {
        name: "Hello World",
        login: "helworl",
        workdays: "mon-fri"
      },
      laneslots: ["1-2", "3-4", "5-6", "7-8", "9-10"]
    };
  },
  created() {
    this.getAssociateData();
  },
  methods: {
    getAssociateData() {
      axios.get("http://localhost:8000/associates").then(res => {
        var associates = res.data;
        for (var x = 0; x < associates.length; x++) {
          var newAssociate = new CardClass({
            propsData: { associate: associates[x] }
          });
          newAssociate.$mount();
          this.$refs.cardBank.appendChild(newAssociate.$el);
        }
      });
    }
  }
};
</script>
