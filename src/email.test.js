const { test } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail, getValidEmails } = require('./email');

test('extractEmails returns emails from user objects', () => {
    const users = [
        { email: 'alice@example.com' },
        { email: 'bob@example.com' },
    ];
    assert.deepEqual(extractEmails(users), ['alice@example.com', 'bob@example.com']);
});

test('extractEmails returns empty array for non-array input', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails(undefined), []);
});

test('isValidEmail accepts valid addresses', () => {
    assert.equal(isValidEmail('alice@example.com'), true);
});

test('isValidEmail rejects invalid addresses', () => {
    assert.equal(isValidEmail('not-an-email'), false);
    assert.equal(isValidEmail(''), false);
    assert.equal(isValidEmail(null), false);
});

test('getValidEmails returns only valid emails', () => {
    const users = [
        { email: 'alice@example.com' },
        { email: 'invalid' },
        { email: 'bob@example.com' },
        { name: 'no email' },
    ];
    assert.deepEqual(getValidEmails(users), ['alice@example.com', 'bob@example.com']);
});
