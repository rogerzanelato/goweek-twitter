# Projeto Twitter - GoWeek
Projeto ministrado pela RocketSeat na GoWeek com o objetivo de criar um sistema de Tweets como do Twitter, simplificado. Consistindo de uma API, interface Web e Mobile.

O projeto utiliza as tecnologias **MongoDB** para armazenamento de dados, **React** para interface Web, **React Native **para Mobile e **NodeJS** para o Backend da API.

## Execução
##### API:
Abra a pasta Backend no terminal e execute:
```shell
yarn install
yarn start
```

##### Web:
Abra a pasta Web no terminal e execute:
```shell
yarn install
yarn start
```

##### Mobile:
Altere a URL com o IP do computador e porta na qual a API estará executando, no arquivo `mobile/src/config/index.js`.
Abra a pasta Mobile no terminal e execute:
```shell
yarn install
react-native run-android
# ou
react native run-ios
```

## Observações

##### Express
Biblioteca para facilitar a criação de rotas.
- express.json(): Indica que será usado JSON para todas as rotas

##### Mongoose
ORM para o MongoDB.

##### Nodemon
O serviço do Nodemon irá "escutar" alterações em nossos arquivos JS e irá atualizar automaticamente o servidor caso façamos alterações. Dessa forma, não precisamos ficar ficar reiniciando o servidor a cada alteração.
Obs: npm install -D para baixar como dependência de desenvolvimento apenas.

##### Banco de Dados
Hospedado em MLab, disponibiliza 500mb gratuíto. Criação muito rápida e intuítiva.

##### Module.exports
Em vários arquivos há a definição module.exports, esse comando define o que será retornado quando um outro arquivo importá-lo.

##### Socket.IO
Pacote utilizado para criar um websocket e assim fazer atualizações e tempo real.
- `yarn add socket.io`

## Links:
- Curso: https://rocketseat.com.br/goweek-4#day-05
- mLab: https://mlab.com/login/
- React-Native Docs: https://facebook.github.io/react-native/
- Instalando Watchman no Ubuntu: https://askubuntu.com/questions/1040612/how-to-install-watchman-on-ubuntu-18-04-for-react-native-error-in-make-command
- React Native Navigation: https://github.com/react-navigation/react-navigation
- React Native Vector Icons: https://github.com/oblador/react-native-vector-icons
- Socket.IO: https://socket.io/docs/