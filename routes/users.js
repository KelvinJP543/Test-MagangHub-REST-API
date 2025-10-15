const express = require('express');
const { body, param, validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const users = [
    { id: uuidv4(), name: 'Kelvin', email: 'kelvin1@gmail.com', age: 22 },
    { id: uuidv4(), name: 'Andi', email: 'andi2@gmail.com', age: 23 },
    { id: uuidv4(), name: 'Selena', email: 'selena3@gmail.com', age: 21 },
];

function handleErrors(res, errors) {
    const mapped = errors.mapped();
    const formatted = {};
    for (const field in mapped) {
        formatted[field] = mapped[field].msg;
    }
    return res.status(400).json({
        success: false,
        errors: formatted
    });
}

// Menampilkan daftar pengguna
router.get('/', (req, res) => {
    res.json({ success: true, data: users });
});

// Menampilkan detail pengguna berdasarkan id pengguna
router.get('/:id', param('id').isUUID().withMessage('Invalid ID format'), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return handleErrors(res, errors);
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ success: false, error: 'User not found' });
    res.json({ success: true, data: user });
});

// Tambah data pengguna baru
router.post('/',
    body('name').notEmpty().withMessage('Name is required').bail().isLength({ min: 2 }).withMessage('Name must have at least 2 characters'),
    body('email').notEmpty().withMessage('Email is required').bail().isEmail().withMessage('Email must be valid'),
    body('age').notEmpty().withMessage('Age is required').bail().isInt({ min: 0 }).withMessage('Age must be a number'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return handleErrors(res, errors);
        const { email, name, age } = req.body;
        const emailExists = users.some(user => user.email === email);
        if (emailExists) {
            return res.status(409).json({
                success: false,
                errors: { email: 'Email already in use by another user' }
            });
        }
        const newUser = {
            id: uuidv4(),
            name: name,
            email: email,
            age: parseInt(age, 10)
        };
        users.push(newUser);
        res.status(201).json({ success: true, data: newUser });
    }
);

// Mengubah data pengguna berdasarkan id pengguna
router.put('/:id',
    param('id').isUUID().withMessage('Invalid ID format'),
    body('name').optional().isLength({ min: 2 }).withMessage('Name must have at least 2 characters'),
    body('email').optional().isEmail().withMessage('Email must be valid'),
    body('age').optional().isInt({ min: 0 }).withMessage('Age must be a number'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return handleErrors(res, errors);

        const userId = req.params.id;
        const { email, name, age } = req.body;

        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const emailExists = users.some(user => user.email === email && user.id !== userId);
        if (emailExists) {
            return res.status(409).json({
                success: false,
                errors: { email: 'Email already in use by another user' }
            });
        }

        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].age = parseInt(age, 10);

        res.json({ success: true, data: users[userIndex] });
    }
);

// Menghapus data pengguna berdasarkan id pengguna
router.delete('/:id', param('id').isUUID().withMessage('Invalid ID format'), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return handleErrors(res, errors);

    const userId = req.params.id;
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }

    users.splice(userIndex, 1);

    res.json({ success: true, message: 'User deleted successfully' });
});

module.exports = router;