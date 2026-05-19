# 🐶 Cachorro Aleatório - React Native

Aplicativo mobile desenvolvido em React Native utilizando Expo, com consumo de API pública para exibição de imagens aleatórias de cachorros.

---

## 🚀 Sobre o projeto

Este projeto foi desenvolvido como parte do desafio individual de consumo de API utilizando React Native.

A aplicação consome uma API pública para buscar imagens aleatórias de cachorros e exibi-las em uma interface mobile responsiva.

---

## ✨ Funcionalidades

- 🐶 Exibir imagem aleatória de cachorro
- 🔄 Atualizar imagem ao clicar no botão
- 📱 Interface mobile responsiva
- 📳 Vibração do dispositivo ao gerar nova imagem
- ⚡ Loading durante carregamento da API

---

## 🛠 Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- API REST

---

## 🔌 API utilizada

Dog CEO API

https://dog.ceo/dog-api/

A API fornece imagens aleatórias de cachorros em formato JSON.

---

## 📂 Estrutura do projeto

```bash
Desafio_Individual_ReactNative_API
│
├── assets
├── .gitignore
├── App.js
├── README.md
├── app.json
├── index.js
├── package.json
└── package-lock.json
```

---

## 📳 Uso de hardware

O aplicativo utiliza o recurso de vibração do dispositivo através da API:

```javascript
Vibration.vibrate(120);
```

---

## ▶️ Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Executar o projeto

```bash
npx expo start
```

Depois basta escanear o QR Code utilizando o aplicativo Expo Go.

---

## 💻 Repositório

🔗 https://github.com/LNayaraSilva/Desafio_Individual_ReactNative_API

---

## 👩‍💻 Autora

Laís Nayara  
Estudante de Análise e Desenvolvimento de Sistemas

---

## 📌 Considerações finais

Este projeto demonstra na prática:

- Consumo de API
- React Native
- Manipulação de estados
- Requisições assíncronas
- Desenvolvimento mobile
- Uso de hardware do dispositivo
