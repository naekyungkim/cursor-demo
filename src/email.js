const { isValidEmail } = require('./validator.js');

// 사용자 배열에서 이메일만 추출하는 함수
function extractEmails(users) {
    if (!Array.isArray(users)) {
        return [];
    }
    return users.map(user => user.email);
}

function getValidEmails(users) {
    return extractEmails(users).filter(isValidEmail);
}

module.exports = { extractEmails, isValidEmail, getValidEmails };
