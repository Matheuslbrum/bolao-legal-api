import {pool} from '../db/index.mjs'

export const userQuery = {
  async getAllUsers(){
    const query = 'SELECT * From users';
    try {
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      throw error;      
    }
  },
  async createUser(userData){

  },
  async createAdmInformations(AdmData){

  }
}