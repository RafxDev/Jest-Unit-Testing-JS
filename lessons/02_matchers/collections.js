function getUser() {
  return { id: 1, name: 'Diego', active: true };
}

function getColors() {
  return ['red', 'green', 'blue'];
}

function checkConfig(config) {
  if (!config) {
    throw new Error('Config missing');
  }
  return true;
}

module.exports = { getUser, getColors, checkConfig };
