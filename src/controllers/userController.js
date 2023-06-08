import userQuery from 'queries'

export const userController = {
  async getAllUsers(req, res) {
    try {
      const users = await userQuery.getAllUsers();

      return res.send(200).json(users)
    } catch (error) {
      res.send(500).json(error)
    }
  },
  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = userQuery.createUser();
    } catch (error) {
    }
  },
  async createAdmInformation(req, res) {
    try {
      const AdmData = req.body;
      const newAdm = userQuery.createAdmInformations();
    } catch (error) {
    }
  }
}