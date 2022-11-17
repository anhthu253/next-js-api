import {getUsersByName} from '../../../services/userService';
export default async function handler(request, response) {
  const {name} = request.query;
  if (request.method === 'GET') {
    const data = await getUsersByName(name);
    if (data === undefined)
      return response.status(404).json({message: 'user not found'});
    return response.status(200).json(data);
  }
  response.status(403).json({message: 'Error: request method not allowed.'});
}
