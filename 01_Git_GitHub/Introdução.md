# Introdução ao Git/GitHub

Esse documento apresenta conceitos básicos sobre o Git e o GitHub para pessoas que desejam começar a utilizá-los. Um ponto importante é que o doc tem foco para usuários Linux Ubuntu.

## Instalação no Linux Ubuntu

Para instalar o Git em sua última versão abra o terminal e digite:

``` linux
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

Para ver qual versão foi instalada é só digitar:

```linux
git --version
```

## Chave SSH

A chave SSH serve como um meio de autenticação mais rápida e segura. Para configurá-la, primeiro é necessário criá-la em sua máquina. Então, continuando no terminal digite:

```linux
ssh-keygen -t ed25519 -C seuemail@gmail.com
```

Isso cria um par de chaves pública e privada e mostra onde elas se encontram, um exemplo de caminho para chegar até elas é (/home/larissa/.ssh/id_ed25519). Portanto para ver o seu conteúdo basta executar os seguintes comandos:

```linux
cd /home/larissa/.ssh/id_ed25519
ls
id_ed25519  id_ed25519.pub  #chaves listadas pelo comando ls
cat id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICDmqJAjA1/7rMxeD5oRJxl6fe13/
Hya3E+MSDPem4Hz matoslarissa31@gmail.com  #chave pública
```

Copie a chave pública que foi criada e cole no seu GitHub, caso não saiba siga o seguinte caminho: settings <SSH and GPG keys <new SSH key. Depois desse processo é necessário inicializar o agent que irá lidar com as chaves, para isso digite no terminal:

```linux
eval $(ssh-agent -s)
ssh-add id_ed25519  
```

Vale salientar que o agent sempre trabalha com as chaves privadas. Depois de todo esse processo é só clonar o que deseja!

```linux
git clone git@github.com:larissamato/Teste.git
```

## Criando um commit

Antes de criar qualquer commit é importante realizar algumas configurações que são: adicionar um user name e o seu e-mail, uma observação importante é que de preferência ambos devem ser do seu cadastro no GitHub. Então no seu terminal digite os seguintes comandos:

```linux
git config --global user.name larissamato
git config --global "seuemail@gmail.com"
```

Utilizando o git init há uma inicialização de um conceito do git chamado repositório. Ou seja ao usar o comando estamos criando um repositório do git dentro do diretório.

```linux
/workspace/teste$   git init
```

Utilizando o git add ele tira o repositório de untracked para Staged, ou seja, faz com que o Git reconheça a existência dele e entra em um estado de espera para fazer parte de um commit, ou então quando um repositório já reconhecido pelo Git é modificado e entra nesse estado de Staged com o comando.

```linux
/workspace/teste$   git add *
```

Utilizando o git commit há uma envelopação de todas as modificações feitas, juntamente com outras informações como o tamanho, data, autor, uma mensagem e o sha1 da tree e do parent (commit anterior). Depois isso entra para o estado de não modificado fazendo parte do seu repositório local.

```linux
/workspace/teste$   git commit -m "commit inicial"
```

Para visualizar o estado do repositório de trabalho basta digitar:

```linux
/workspace/teste$   git status
```

## GitHub

Para fazer essa conexão do Git da máquina local para o GitHub é nessário criar um repositório no seu GitHub e "empurrar" o que foi feito na sua máquina local até ele. Lembrando que estou dentro do meu diretório de teste.

```linux
git remote add origin https://github.com/larissamato/Teste.git   #origem de envio
git remote -v #lista os repositórios remotos cadastrados
git push origin master #envio do repositório local para o remoto
```

Para resolver os conflitos de merge, que são ocorridos com versões que tem diferença na mesma linha de código, é necessário puxar a versão mais recente fazer as alterações, juntar as duas versões e empurrar para o GitHub. Portanto segue o seguinte comando:

```linux
git pull origin master #puxa a versão mais recente
git pull origin master --allow-unrelated-histories
```

Abra o repositório puxado, faça as alterações necessárias e commita ele novamente. Depois disso é só empurrar sua versão mais recente para o GitHub.

## Conhecimentos adicionais

```linux
git config --list  #mostra as configurações já feitas
git config --global --unset user.email #retira a configuração
git config --global --unset user.name #retira a configuração
```

