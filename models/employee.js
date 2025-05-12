const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  phoneNumber: { 
    type: String,
    required: true 
},
  role: { 
    type: String 
},
  departmentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Department" }, 
}, 
{ timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);
