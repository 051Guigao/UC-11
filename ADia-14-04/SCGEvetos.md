# Atividade de testes: Sistema de Cadastro e Gestão de Eventos

---

## Testes!

| ID       | Requisito     | Descrição       |  Entrada          | Resultado Esperado      |
|----------|---------------|-----------------|-------------------|-------------------------|
| **CT01** | `RF01`        |  Cadastrar usuário com dados válidos    | Nome, email válido, senha válida, DN       | Usuário cadastrado com sucesso!                   |
| **CT02** | `RF01`        |  Cadastrar usuário com senha inválida   | Nome, email válido, senha inválida, DN     | Erro: Senha não tem os requisitos esperados!      |
| **CT03** | `RF01`        |  Cadastrar usuário com email duplicado  | Nome, email já registrado, senha válida, Dn| Erro: Email já registrado no sistema!             |   
| **CT04** | `RF01`        |  Cadastrar usuário com campos vazios    | Deixar todos vazios, e depois testar com apenas um vazio **(DE CADA!)** | Erro: Campo obrigatório não preenchido! |
| **CT05** | `RF02`        |  Login com dados válidos                | Email válido, senha válida                 | Sucesso no login!                                 |
| **CT06** | `RF02`        |  Login com email não registrado         | Email não registrado, senha válida         | Erro: Email não registrado no sistema!            |
| **CT07** | `RF02`        |  Login com senha errada                 | Email registrado, senha errada             | Erro: Senha errada!                               |
| **CT09** | `RF02`        |  Login com campos vazios                | Deixar todos vazios, e depois testar com apenas um vazio **(DE CADA!)**  | Erro: Campo obrigatório não preenchido! |
| **CT10** | `RF03`        |  Registrar evento com dados inválidos   | Nome, Desc., Data, Num.Part                | Sucesso no registro!                              |
| **CT11** | `RF03`        |  Registrar evento sem nome              | Desc., Data, Num.Part                      | Erro: Evento sem nome!                            |
| **CT12** | `RF03`        |  Registrar evento sem descrição         | Nome, Data, Num.Part                       | Erro: Evento sem descrição                        |
| **CT13** | `RF03`        |  Registrar evento sem data              | Nome, Desc., Num.Part                      | Erro: Evento sem data!                            |
| **CT14** | `RF03`        |  Registrar evento sem num.part          | Nome, Desc., Data                          | Erro: Evento sem número de participantes!         |
| **CT15** | `RF03`        |  Registrar com campos vazios            | Deixar todos vazios, e depois testar com apenas um vazio **(DE CADA!)**   | Erro: Campo obrigatório não preenchido! |
| **CT16** | `RF04`        |    |    |           |
| **CT17** | ``        |    |    |           |
| **CT18** | ``        |    |    |           |
---