import {userQuery} from '../queries/useQuery.mjs'

export const userController = {
  getAllUsers(req, res) {
    try {
      const users = userQuery.getAllUsers();

      return res
    } catch (error) {
      return error;
    }
  },
  createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = userQuery.createUser();
    } catch (error) {
    }
  },
  createAdmInformation(req, res) {
    try {
      const AdmData = req.body;
      const newAdm = userQuery.createAdmInformations();
    } catch (error) {
    }
  }
}