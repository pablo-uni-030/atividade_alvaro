import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Usuário fixo
const EMAIL = "lula@gmail.com";
const PASSWORD = "feijaopuro";

// Endpoint POST de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
        .status(400)
        .json({ message: "Usuário e senha são obrigatórios" });
  }

  if (email === EMAIL && password === PASSWORD) {
    return res.status(200).json({ authorization: "authorized", message: "Login realizado com sucesso!" });
  }

  return res.status(401).json({ authorization: "unauthorized" });
});

export default app;