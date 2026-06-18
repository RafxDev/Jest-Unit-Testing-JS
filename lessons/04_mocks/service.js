// Un servicio de notificaciones ficticio
function sendNotification(userId, message, mailerService) {
  if (!userId) {
    return false;
  }
  const email = `user${userId}@example.com`;
  const status = mailerService.send(email, message);
  return status;
}

module.exports = { sendNotification };
