# Projeto Help Health

## Comandos do Github / Termninal

### Para `clonar e conectar o repositório do Github na pasta do seu PC`, provavelmente irá usar apenas uma vez
```shell
git clone "https://github.com/MathLuz/Help-Health.git"
```

### Para puxar e `atualizar sua pasta` pelo que está no Github, faça isso sempre antes de atualizar o projeto
```shell
git pull
```

### Para `atualizar o repositório` do Github
```shell
git add -A
```
```shell
git commit -m "informação das alterações"
```
```shell
git push
```

>Caso envie o repositório quando alguém tiver atualizado, vai ter conflito,
irá aparecer uma mensagem dizendo para arrumar os problemas de conflito
olhe e compare os dois, por isso é interessante avisar em quais arquivos vai mexer,
se não mexerem nos mesmos arquivos, o Github atualizara do jeito certo.

### Para `atualizar a Page` / a branche nomeada "gh-pages"
```shell
npm run deploy
```

#### Link para criar do 0 um projeto em react e hospedar no Github pages
[`https://github.com/gitname/react-gh-pages`](https://github.com/gitname/react-gh-pages)


#### `Bonus:` Comandos do Terminal para acessar / voltar pastas

```shell
cd nome-da-pasta
```
```shell
cd ..
```
