import pool from '@src/db'

export const userQuery = {
  async getAllUsers(){
    const query = 'SELECT * From users';
    try {
      const result = await new Promise((resolve, reject) => {
        pool.query(query, (err, result) => {
          if(err) {
            console.error('Erro ao executar a consulta: ', err)
            reject(err);
            return;
          }
      })   
    })
    return result;
    } catch (error) {
      console.error('Erro ao executar a consulta: ', error);
      //throw error;      
    }
  },
  async createUser(userData){

  },
  async createAdmInformations(AdmData){

  }
}