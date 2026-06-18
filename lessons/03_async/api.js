function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: 'Sofia' });
      } else {
        reject(new Error('User not found'));
      }
    }, 50);
  });
}

module.exports = { fetchUserData };
