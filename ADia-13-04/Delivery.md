# Software Delivery

* Requisitos Funcionais 
                                                                      
>Nome Completo,                                                                   
Email,                                                                            
CPF,                                                                              
Localização,                                                                    
Forma De Pagamento,                                                              
Frete,                                                                            

* Requisitos Não Funcionais

>Segurança de dados,                                                              
Interface de fácil entendimento,                                                  
Modo escuro e claro,                                                              


# **Teste do cadastro de usuário**:

1. Teste Válido:                                                            
Entrar na tela de login                                                           
Colocar Login(CPF) válido                                                         
Colocar Senha válida                                                              
Logar 

**Resultado Esperado: Sucesso no login e usuário acessa o sistema.**

2. Teste com campo (CPF) inválido:                                              
Entrar na tela de login                                                                                                            
Colocar Login(CPF)                                                  
inválido                                                                       
Colocar
Senha válida                                                                   
Logar                                                                                                                              
**Resultado Esperado: Erro no login.**

3. Teste com campo (Senha) inválido:                                            
Entrar na tela de login                                                         
Colocar Login(CPF) válido                                                                         
Colocar senha inválida                                                            
Logar

**Resultado Esperado: Erro no login.**

4. Com ambos campos inválidos:                                          
Entrar na tela de login                                                     
Colocar login(CPF) inválido                                                     
Colocar senha inválida                                                      
Logar

**Resultado Esperado: Erro no login.**

5. Com campos em branco:                                                        
Entrar na tela de login                                                         
Deixar campos vazios                                                            
Logar                                

**Resultado Esperado: Erro no login.**

# **Teste do movimento de entrega**:

1. Verificar se endereço de entrega foi resgistrado                             
2. Verificar forma de pagamento                                             
3. Verificar se motoboy foi acionado                                                            
 