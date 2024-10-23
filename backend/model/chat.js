const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    mensagens: {type: Schema.Types.ObjectId, ref: 'Message', default: null}
    
});

module.exports = mongoose.model('Chat', schema);