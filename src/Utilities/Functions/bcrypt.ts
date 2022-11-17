import bcrypt = require("bcrypt");

const hashes= (password:string)=> {
    const hashed  = bcrypt.hash(password, 10, (err, hash) => {
        const hashed = hash;

    })
    return hashed;

}

export { hashes};
