# Features


# Recuperação de Senha

**RF - Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuario deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF - Requisitos Não Funcionais**

- Utilizar MAILTRAP para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envio em produção;
- O envio de e-mail deve acontecer em segundo plano - background job;

**RN - Regras de Negócio**

- O link para resetar senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF - Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF - Requisitos Não Funcionais**

**RN - Regras de Negócio**

- O usuário não pode alterar seu e-mail já utilizado por outro usuário;
- Para atualizar a sua senha, o usuário deverá informar a senha antiga;
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF - Requisitos Funcionais**

- O usuario deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisitos Não Funcionais**

- OS agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN - Regras de Negócio**

- A notificação deve ter um status de "lida" ou "não lida" para que o prestador possa controlar

# Agendamento de serviços

**RF - Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF - Requisitos Não Funcionais**

- A listagem de prestadores deve ser armazenada e cache;

**RN - Regras de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamento devem estar disponíveus entre 8h às 18h (Primeiro às 8h, último às 18h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;


