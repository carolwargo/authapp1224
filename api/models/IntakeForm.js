const mongoose = require("mongoose");

const IntakeFormSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    twitter: { type: String, match: /^@?(\w){1,15}$/ },  
    facebook: String,
    instagram: String,  
    dob: { type: Date, required: true },  
    highschool: { type: String, required: true },
    hsLocation: String,   
    gradYear: { type: String, match: /^\d{4}$/, required: true },
    sport: String,
    testScores: String,
    gpa: { type: Number, min: 0, max: 4.0 },
    ncaaId: String,   
    hsLevel: String,  
    primaryPosition: String,  
    secondaryPosition: String,    
    height: { type: Number }, // Store in inches or centimeters consistently
    weight: { type: Number }, // Store in pounds or kilograms consistently
    handedness: { type: String, enum: ["Right", "Left", "Both"], default: "Right" },
    athleticExtra: { type: String, default: "" },
    academicExtra: { type: String, default: "" },  
    platformConsent: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model("IntakeForm", IntakeFormSchema);
