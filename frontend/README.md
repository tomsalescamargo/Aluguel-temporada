# Projeto de Acomodações - React e Flask

Este é um projeto que conecta uma aplicação front-end em React com um back-end em Flask para exibir acomodações disponíveis.

## 🛠️ Tecnologias Utilizadas
- **React** para o front-end
- **Flask** para o back-end
- **Docker** para facilitar a execução

## 🏁 Como Rodar o Projeto

### Com Docker (Recomendado)

1. Instale o Docker e Docker Compose, se ainda não tiver.
2. No terminal, navegue até a pasta raiz do projeto.
3. Execute o comando:

```
docker-compose up --build
```

4. Acesse o front-end em: [http://localhost:3000](http://localhost:3000)
5. O back-end estará em: [http://localhost:5000](http://localhost:5000)

### Sem Docker (Alternativa)

Caso o Docker não funcione, você pode rodar os serviços manualmente:

1. **Backend**

- Navegue até a pasta `backend`:

```
cd backend
```

- Instale as dependências:

```
pip install -r requirements.txt
```

- Rode o servidor Flask:

```
python app.py
```

2. **Frontend**

- Navegue até a pasta `frontend`:

```
cd frontend
```

- Instale as dependências:

```
npm install
```

- Inicie a aplicação React:

```
npm start
```

## 📌 Observações

Optei por focar mais no consumo da API e na interação com o React, priorizando a lógica de funcionamento, do que na estilização da aplicação. A estilização pode ser aprimorada futuramente.

Se houver qualquer problema ou dúvida, estou à disposição para esclarecer e ajustar! 🚀

