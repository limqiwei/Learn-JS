// Exercise - Create Key Objects from Array

/*

After the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
*/

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

let usersById = groupById(users);
console.log(usersById);

function groupById() {
    return users.reduce((grouped, currUser) => {
        grouped[currUser.id] = currUser;
        return grouped;
    }, {})
}