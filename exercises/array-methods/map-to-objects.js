// Exercise - Map to Objects

let jim = { name: "Jim", surname: "Smith", id: 1 };
let perry = { name: "Perry", surname: "Hunt", id: 2 };
let marcy = { name: "Marcy", surname: "Key", id: 3 };

let usersToMapObjects = [ jim, perry, marcy ];

let usersObjectMapped = usersToMapObjects.map((user) => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
}))

for (let user of usersObjectMapped) {
    console.log(user)
}
