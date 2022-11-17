// src/instances/sequelize.ts

import { Sequelize} from 'sequelize';


const db = new Sequelize("Blog","root","",{
  dialect:"mysql",
  logging:false,

})


export default db;





