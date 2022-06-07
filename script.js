//Inserindo pessoa no Array sem callback

let pessoas = [];

function inserirPessoa(nome){
    pessoas.push(nome);
}

function listarPessoas(){
    console.log(pessoas);
}

inserirPessoa("Marcos");
listarPessoas();

//Inserindo pessoas no Array com Callback

let usuarios = [];

function inserirUsuario(nome,callback){
    usuarios.push(nome);
    callback();
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Jonathan",listarUsuarios);