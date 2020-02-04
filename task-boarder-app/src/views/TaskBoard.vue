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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>3-4</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>5-6</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>7-8</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>9-10</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Divert</th>
          <td></td>
          <td class="not-available"></td>
          <td></td>
          <td></td>
          <td>
            <caption>floor</caption>
          </td>
          <td>
            <caption>dock</caption>
          </td>
          <td class="not-available"></td>
          <td></td>
        </tr>
        <tr>
          <th>Stage</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Stage</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Induct</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Divert</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Water Spider</th>
          <td colspan="5"></td>
        </tr>
      </table>
    </div>
    <div>
      <h1>AA's</h1>
      <div class="flex-container">
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>

        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>

        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>

        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>

        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
        <Card v-bind:associate="{name:'Hello World', login:'helwor', workdays:'Mon-Fri'}"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
export default {
  name: "task-board",
  components: {
    Card
  },
  data: function() {
    return {
      associate: {
        name: "Hello World",
        login: "helworl",
        workdays: "mon-fri"
      },
      laneslots: ["1-2", "3-4", "5-6", "7-8", "9-10"]
    };
  }
};
</script>
