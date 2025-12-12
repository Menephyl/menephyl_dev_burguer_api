

const adminMiddleware = (request, response, next) => {
    const isUserAdmin = request.userIsAdmin

if(!isUserAdmin){
    return response.status(401).json({error:'User is not admin'})
}



return next();
}
export default adminMiddleware;