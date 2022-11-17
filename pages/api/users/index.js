import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = await getAllUsers();
    return response.status(200).json(data);
  } else if (request.method === 'POST') {
    const {name, gender, email} = JSON.parse(request.body);
    const newUser = await createUser(name, gender, email);
    return response.status(201).json({
      message: `new user with the id ${newUser.newUser._id} created`,
    });
  }

  response.status(403).json({message: 'Error: request method not allowed.'});
}
