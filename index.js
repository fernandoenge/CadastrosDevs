const Dev = [];

const cadastrarDev = document.getElementById("adicionarTecnologia");

cadastrarDev.addEventListener("click", criar);

function criar() {
  const form = document.getElementById("formularioDev");

  const h3 = document.createElement("h3");
  h3.innerText = "Adicionar Experiencia ";

  const tecnologia = document.createElement("label");
  tecnologia.id = "Tecnologia";
  tecnologia.innerText = "Tecnologia: ";

  const input = document.createElement("input");
  input.name = "Tecnologia";
  input.type = "text";
  input.id = "Tecnologia";
  const hr = document.createElement("hr");

  const input1 = document.createElement("input");
  input1.type = "radio";
  input1.id = "tempo1";
  input1.innerHTML = "<label for = 'tempo1'>0-2 anos</label>";

  const tempo2 = document.createElement("label");
  tempo2.innerText = "3-5 anos";
  tempo2.id = "tempo2";

  const input2 = document.createElement("input");
  input2.type = "radio";
  input2.id = "tempo2";

  const tempo3 = document.createElement("label");
  tempo3.innerText = "10 anos  - ";
  tempo3.id = "tempo3";

  const input3 = document.createElement("input");
  input3.type = "radio";
  input3.id = "tempo3";

  const buttonExcluir = document.createElement("button");
  buttonExcluir.name = "Excluir";
  buttonExcluir.innerText = "Excluir";
  buttonExcluir.id = "Excluir";

  tecnologia.appendChild(input);
  tecnologia.appendChild(input1);

  tecnologia.appendChild(input2);
  tecnologia.appendChild(tempo2);
  tecnologia.appendChild(input3);
  tecnologia.appendChild(tempo3);
  tecnologia.appendChild(buttonExcluir);
  tecnologia.appendChild(hr);
  form.appendChild(h3);
  form.append(tecnologia);

  console.log(form);
}

const buttonCadastrar = document.getElementById("cadastrarDev");

buttonCadastrar.addEventListener("click", cadastrar);

function cadastrar() {
  const form = document.getElementById("form");

  Dev.nome = document.querySelector("input[name='name']").value;

  const formC = document.getElementById("formularioDev");

  Dev.tecnologia = document.querySelector("input[name='Tecnologia']").value;

  Dev.experiencia = document.getElementById("tempo1").value;

  console.log(Dev);
}
