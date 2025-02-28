App web de Compartilhamento e Streaming de Músicas
Protótipo de inpiração: https://www.figma.com/proto/WSClrXzL7zq7nDdZ7ejlch/PlaayShare---spotifake?node-id=1-314&t=SUa6S8peouK9sJGR-1

Objetivo:
Você foi contratado como técnico de desenvolvimento de sistemas em uma startup de tecnologia que deseja criar um aplicativo web de compartilhamento e streaming de músicas, semelhante ao Spotify. O aplicativo permitirá que usuários ouçam, compartilhem e descubram músicas. Ele também fornecerá recomendações personalizadas, permitirá a criação de playlists e facilitará a busca por artistas e álbuns. Embora você não precise construir a aplicação completa, sua equipe é responsável por criar a base lógica e estrutural para o funcionamento do app.
Desafio: 
Seu objetivo é planejar e desenhar a lógica e a estrutura do sistema, organizando dados e fluxos de operações típicas do aplicativo. Você e sua equipe irão detalhar como os usuários irão interagir com o sistema, quais dados serão necessários e como as funcionalidades serão desenvolvidas em termos de lógica.
Escopo do Projeto:
O projeto será dividido em várias funcionalidades essenciais que devem ser estruturadas:
Cadastro e Login de Usuários
Busca por Músicas, Artistas e Álbuns
Criação e Gerenciamento de Playlists
Reprodução de Músicas
Recomendações Personalizadas
Compartilhamento de Músicas e Playlists com Outros Usuários
Cada uma dessas funcionalidades precisará de uma base lógica sólida, detalhando os dados envolvidos e os algoritmos que irão garantir o seu funcionamento.
Estruturação do Projeto:
1. Cadastro e Login de Usuários
O sistema deve permitir que os usuários criem uma conta e faça login para acessar suas playlists e músicas. O sistema precisa autenticar os usuários e manter suas informações seguras.
Dados Envolvidos:
Tabela de Usuários:
id: Identificador único do usuário
nome: Nome do usuário
email: Email do usuário (único)
senha: Senha encriptada
playlists: Referências para playlists do usuário

Lógica do Cadastro:
Quando um novo usuário tenta se cadastrar, o sistema verifica se o email já está registrado.
Se não estiver, uma nova entrada é criada na tabela de usuários com os dados fornecidos e a senha encriptada.
Lógica de Login:
Quando o usuário tenta fazer login, o sistema verifica se o email e a senha fornecidos correspondem aos dados armazenados.
Se os dados estiverem corretos, o sistema inicia a sessão e fornece acesso às playlists e músicas do usuário.
2. Busca por Músicas
Os usuários devem ser capazes de buscar por musicas com base em palavras-chave. A lógica de busca precisa ser eficiente para lidar com um grande volume de dados.
Dados Envolvidos:
Tabela de Músicas:
id: Identificador único do musica
título: Nome do musica
gênero: Gênero do musica
duração: Duração do musica
link: Link para reprodução do musica
Lógica da Busca:
Quando o usuário digita uma palavra-chave (ex.: nome do musica), o sistema deve percorrer a tabela de musicas e buscar correspondências nas colunas de generos.
O resultado é uma lista de musicas que correspondem à pesquisa do usuário.



3. Criação e Gerenciamento de Playlists
Os usuários podem criar, editar e gerenciar suas playlists, que consistem em listas de músicas que eles selecionam.
Dados Envolvidos:
Tabela de Playlists:
id: Identificador único da playlist
nome: Nome da playlist
proprietário: Usuário que criou a playlist (referência para a tabela de usuários)
músicas: Lista de músicas associadas à playlist (referências para a tabela de músicas)
Lógica de Criação de Playlists:
Quando o usuário cria uma nova playlist, o sistema registra o nome da playlist e o identifica como proprietário.
O usuário pode adicionar músicas à playlist buscando no banco de dados e selecionando as que deseja incluir.
Lógica de Gerenciamento:
O usuário pode remover músicas da playlist ou renomeá-la.
Quando o usuário deseja excluir uma playlist, o sistema remove o registro da tabela de playlists.
4. Reprodução de Músicas
Os usuários devem ser capazes de reproduzir músicas diretamente no aplicativo.
Dados Envolvidos:
Player de Música:
música_atual: Música atual em reprodução
tempo_reprodução: Tempo atual de reprodução
status: Indica se a música está em reprodução ou pausada
Lógica de Reprodução:
Quando o usuário seleciona uma música, o sistema carrega o link da música e inicia a reprodução.
O usuário pode pausar, avançar ou retroceder a música.
O sistema deve monitorar o tempo de reprodução para controlar os controles de progresso da música.

5. Recomendações Personalizadas
Baseado no histórico do usuário (músicas mais ouvidas, playlists mais acessadas), o sistema deve sugerir novas músicas ou playlists.
Dados Envolvidos:
Histórico de Reprodução:
usuário: Referência para o usuário
música: Referência para a música reproduzida
data_reprodução: Data e hora da reprodução

Lógica de Recomendações:
O sistema analisa o histórico de reprodução do usuário para identificar os gêneros e artistas mais reproduzidos.
Com base nesse padrão, o sistema sugere músicas ou álbuns que o usuário ainda não ouviu, mas que são semelhantes aos de seu interesse.
6. Compartilhamento de Músicas e Playlists com Outros Usuários
Os usuários podem compartilhar músicas ou playlists com seus amigos ou publicamente.
Dados Envolvidos:
Tabela de Compartilhamento:
id: Identificador único do compartilhamento
usuário: Referência para o usuário que compartilhou
playlist_música: Referência para a playlist ou música compartilhada
destinatário: Referência para o usuário destinatário ou link público
Lógica de Compartilhamento:
Quando o usuário deseja compartilhar uma música ou playlist, o sistema gera um link único.
Esse link pode ser enviado para outros usuários registrados ou compartilhado publicamente em redes sociais.







