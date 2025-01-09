import bcrypt from "bcryptjs";

const plainPassword = "password"; 
bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hash Password:", hash);
});
