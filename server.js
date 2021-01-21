const express = require("express");
const faker = require("faker");
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

class Users {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        }
    }
}

app.get("/api/users/new", (req, res) => {
    const user = new Users();
    res.json(user);
});
app.get("/api/companies/new", (req, res) => {
    const company = new Company();
    res.json(company);
});
app.get("/api/user/company", (req, res) => {
    const user = new Users();
    const company = new Company();
    const both = [user,company]
    res.json(both);
})

const server = app.listen(port, () => 
console.log(`Server is on port: ${port}`));