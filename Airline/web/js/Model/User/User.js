
function User(username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular) {
    this.User(username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular);
}

User.prototype = {
    User: function (username, password, name, lastname1, lastname2, email, birthdate, address, phone, celular) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.lastname1 = lastname1;
        this.lastname2 = lastname2;
        this.email = email;
        this.birthdate = birthdate;
        this.address = address;
        this.phone = phone;
        this.celular = celular;
    }
}