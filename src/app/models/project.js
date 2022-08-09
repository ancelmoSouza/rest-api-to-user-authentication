const mongoose = require('../../database');
const bcryptjs = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    task: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    ceatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Project = mongoose.model('Project', UserSchema);

module.exports = Project;