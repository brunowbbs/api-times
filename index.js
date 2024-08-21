const express = require("express");
var cors = require("cors");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.use(express.json());

server.get("/", (req, res) => res.send("ok"));

server.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (email === "user@email.com" && password === "123456") {
    return res.json({
      email: "user@email.com",
      name: "John Doe",
      token: "dab937bc-a3ca-4534-ba13-85713bd9f3e7",
    });
  } else {
    return res.status(400).json({
      message: "E-mail e/ou senha invalido(s)",
    });
  }
});

server.get("/times", (req, res) => {
  const token = req.headers.authorization;

  if (token !== "dab937bc-a3ca-4534-ba13-85713bd9f3e7") {
    return res.status(401).json({
      message: "Usuário sem permissão",
    });
  } else {
    return res.json([
      {
        id: 1,
        nome: "Flamengo",
        img: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/819.png",
      },
      {
        id: 2,
        nome: "Cruzeiro",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/768px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
      },
      {
        id: 3,
        nome: "Palmeiras",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
      },
      {
        id: 4,
        nome: "Red Bull Bragantino",
        img: "https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png",
      },
      {
        id: 5,
        nome: "Red Bull Bragantino",
        img: "https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png",
      },
    ]);
  }
});

server.get("/times/:id", (req, res) => {
  const token = req.headers.authorization;

  if (token !== "dab937bc-a3ca-4534-ba13-85713bd9f3e7") {
    return res.status(401).json({
      message: "Usuário sem permissão",
    });
  } else {
    const { id } = req.params;

    if (id == 2) {
      return res.json([
        {
          id: 1,
          preco: 399.0,
          nome: "Camisa Cruzeiro II 24/25 Branca - Adidas Masculino Torcedor",
          img: "https://acdn.mitiendanube.com/stores/002/523/902/products/camisa-reserva-do-cruzeiro-2024-2025-adidas-7-0398efe8fdbb94f7bf17144052010482-640-0.png",
        },
        {
          id: 1,
          preco: 399.0,
          nome: "Camisa Cruzeiro I 24/25 Azul - Adidas Masculino Torcedor",
          img: "https://www.cruzeiropedia.org/images/thumb/1/1c/Camisa2024_1-frente.png/300px-Camisa2024_1-frente.png",
        },
        {
          preco: 69.9,
          id: 3,
          nome: "Caneca Porcelana Cruzeiro Urban 300 ml",
          img: "https://cdn.vnda.com.br/1500x/grandestorcidas/2023/04/10/12_4_4_473_10821canecaporcelanaurban360mlcruzeiro23d.png?v=1681140541",
        },
      ]);
    } else {
      return res.json([]);
    }
  }
});

server.listen(PORT, () =>
  console.log("Servidor iniciado em http://localhost:" + PORT)
);
