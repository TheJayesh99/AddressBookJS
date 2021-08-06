console.log("Welcome to address book");
class Contact{
    //constructor
    constructor(...params)
    {
        this.firstName = params[0]
        this.lastName = params[1]
        this.address = params[2]
        this.city = params[3]
        this.state = params[4]
        this.zip = params[5]
        this.phoneNumber = params[6]
        this.email = params[7]
    }

    toString(){
        return `Name: ${this.firstName} ${this.lastName} Address: ${this.address} ${this.city} ${this.state} ${this.zip} phone number: ${this.phoneNumber} email: ${this.email}`
    }
}

let contact = new Contact("Max","Well","Panvel","Mumbai","Maharashtra",123432,987654321,"max@well")
console.log(contact.toString());