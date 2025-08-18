# 🚀 Projeto de Estudos: Testes de Frontend com React & TypeScript

Este projeto é um laboratório prático para aprofundar o conhecimento em testes de frontend. O objetivo é dominar as principais ferramentas e conceitos de teste em um projeto React, utilizando TypeScript, Jest e React Testing Library.

A jornada de aprendizado é guiada por uma ementa completa, que aborda desde os conceitos mais básicos até cenários avançados e complexos, como mocks de API e testes de roteamento.

## 🛠️ Tecnologias Utilizadas

- **Vite**: Ambiente de desenvolvimento rápido.
- **React**: Biblioteca de UI.
- **TypeScript**: Para tipagem estática e segurança.
- **Jest**: O "runner" de testes.
- **React Testing Library**: Para testar componentes da perspectiva do usuário.
- **Babel**: Compilador para que o Jest entenda o código moderno.
- **MSW (Mock Service Worker)**: Para mockar requisições de API (futuramente).
- **React Router**: Para testes de navegação (futuramente).

## 🗺️ Roteiro de Aprendizagem

O estudo está dividido em três módulos, construindo o conhecimento de forma progressiva.

### **Módulo 1: O Essencial (Básico)**

✅ **Fundamentos e Configuração:** O projeto foi configurado com todas as ferramentas necessárias para iniciar a escrita de testes, com suporte a TypeScript.

✅ **Primeiro Teste de Componente:** Criamos um componente de contador e escrevemos testes para verificar sua renderização inicial e sua interação básica.

✅ **Testes de Interação:** Usamos `user-event` para simular cliques e garantimos que o componente de contador se comportava como esperado, incluindo múltiplos botões.

### **Módulo 2: Indo Além (Intermediário)**

✅ **Testando com Props e State:** Criamos um componente de saudação e aprendemos a testar seu comportamento com e sem a passagem de propriedades.

✅ **Testando Eventos e Callbacks:** Com um componente de botão e um componente pai, aprendemos a testar a comunicação entre eles, usando `jest.fn()` para mockar e verificar callbacks.

✅ **Mocks e Isolamento de Componentes:** Exploramos o poder de mockar dependências.
_ **`jest.mock()`**: Aprendemos a substituir um módulo inteiro (como uma API simulada) para garantir que os testes sejam rápidos e isolados.
_ **`jest.spyOn()`**: Aprendemos a "espiar" um método específico de um objeto, controlando seu retorno temporariamente e verificando sua chamada, sem substituir a implementação original.

### **Módulo 3: Cenários Complexos (Avançado)**

A partir de agora, nosso foco será em cenários mais realistas e desafiadores, preparando o projeto para ser escalável e robusto.

- **Testes de Roteamento:** Iremos testar componentes que usam o React Router. Aprenderemos a simular navegação e a fazer mock do roteador para testar componentes isoladamente.
- **Mocks de Requisições de API com MSW:** Usaremos o Mock Service Worker para interceptar chamadas de rede e simular respostas de APIs, o que é fundamental para testes de integração de componentes com dados remotos.
- **Testando Custom Hooks:** Aprenderemos a testar a lógica de hooks personalizados de forma isolada, garantindo que eles funcionam como esperado.
- **Relatórios e Cobertura de Código:** Finalizaremos o estudo configurando relatórios de cobertura para medir a qualidade dos nossos testes e garantir que o código está bem coberto.

## 🚀 Como Executar os Testes

Para rodar todos os testes do projeto, execute o seguinte comando no terminal:

```bash
yarn test
```
