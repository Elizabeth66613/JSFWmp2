// Import mongoose to define the schema and model
import mongoose from 'mongoose';






const lipstickSchema = new mongoose.Schema({
    brand: {type: String,
    required: true,
    },
    price: {type: Number},
    color: {type: String},
    format: {type: String},
    country: {type: String}
})

const Lipstick = mongoose.model('Lipstick', lipstickSchema);

// Export the Employee model so that it can be used in other files (in routes/controllers)
export default Lipstick;