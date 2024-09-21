const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("Users", EmployeeSchema)

module.exports = EmployeeModel