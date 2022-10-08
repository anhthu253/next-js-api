import {getUserById, deleteUser} from '../../../services/userService';
export default async function handler(request, response) {
  const {id} = request.query;
  if (request.method === 'GET') {
    const data = await getUserById(id);
    if (data === undefined)
      return response.status(404).json({message: 'user not found'});
    return response.status(200).json(data);
  } else if (request.method === 'DELETE') {
    const {deletedUser} = await deleteUser(id);
    if (deletedUser === undefined)
      return response.status(404).json({message: 'user not found'});
    return response.status(200).json({
      message: `user with the id ${deletedUser._id} successfully deleted`,
    });
  }
  response.status(403).json({message: 'Error: request method not allowed.'});
}
