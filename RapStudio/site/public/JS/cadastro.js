var nomeVar
    var emailVar
    var senhaVar

    function alterarTela(){
        nomeVar = inputNome.value
        emailVar = inputEmail.value
        senhaVar = inputSenha.value

        if (emailVar.indexOf('@') < 0 || emailVar.length > 250) {
            respErro.style.display = "block"
            respErro.innerHTML = "Email inválido";

            return false;
        }
        else if (senhaVar.indexOf('@') == -1 && senhaVar.indexOf('*') == -1 && senhaVar.indexOf('%') == -1 && senhaVar.indexOf('?') == -1 && senhaVar.indexOf('#') == -1 ) {
            respErro.style.display = "block"
            respErro.innerHTML = "Senha inválida, min. 1 caracter especial";

            return false;
        } else if (senhaVar.length < 8) {
            respErro.style.display = "block"
            respErro.innerHTML = "Min. de 8 caracteres";

            return false;
        }

        div_cadastro.innerHTML = ` 
        <p class="titulo">Cadastrar</p>
            <div class="inputs">
                <label>
                    <p>
                        Data Nascimento
                    </p>
                    <input type="date" id="inputData">
                </label>
                <label>
                    <p>
                        UF:
                        <select id="selectEstado">
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </p>
                </label>
                <label>
                    <p>
                        Cidade:
                    </p>
                    <input type="text" id="inputCidade" placeholder="Ex: Osasco">
                </label>
                <p id="respErro">

                </p>
                <div class="custom-loader" id="loading"></div>
            </div>
            <div class="centralizar">
                <button class="botaoAcao" onclick="cadastrar()">
                    Cadastrar-se
                </button>
                <a href="login.html">
                    <p>Entrar</p>
                </a>
                <a href="index.html">
                    <p>Voltar para a Home</p>
                </a>
            </div>`

    }
    function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var estadoVar = selectEstado.value;
    var dataNascVar = inputData.value;
    var cidadeVar = inputCidade.value
    if (
      estadoVar == "" || estadoVar.trim() == "" ||
      cidadeVar == "" || cidadeVar.trim() == "" ||
      dataNascVar == "" || dataNascVar.trim() == "" 
    ) {
        respErro.style.display = "block";
        respErro.innerHTML =
            "Preencha todos os campos";

      return false;
    } 
    respErro.style.display = "none"
    loading.style.display = "block"

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        estadoServer: estadoVar,
        cidadeServer: cidadeVar, 
        dataNascServer: dataNascVar 
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          setTimeout(() => {
            window.location = "login.html";
          }, "1000");
        
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
          loading.style.display = "none"
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        loading.style.display = "none"
      });

    return false;
  }

