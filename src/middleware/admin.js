

const adminMiddleware = (request, response, next) => {
  const isUserAdmin = request.userIsAdmin;

  if (!isUserAdmin) {
    return response.status(401).json({ error: 'Unauthorized: Admin role required' });
  }

  return next(); // envia ppro controller
};

export default adminMiddleware;
