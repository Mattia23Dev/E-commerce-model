import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, 'bf608eead18e03646cfd12a338bb592d78a7bcfcd205a5441eac23f3565b934b19033aaa8d92dedb25c6f9b74b0774b4f077180383249d829588c654b1cd888f', {
    expiresIn: "30d",
  });
};

export default generateToken;
