<script src="https://code.jquery.com/jquery-3.6.0.js" type="text/javascript"></script>
    
function enviarDados() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var endereco = document.getElementById("endereco").value;
    var numeroTelefone = document.getElementById("numeroTelefone").value;

    verificaCampos();
    
    function verificaCampos() {
        if (verificaNome(nome)) {
            if(verificaSobrenome(sobrenome)){
                if(verificaEndereco(endereco)){
                    if(verificaTelefone(numeroTelefone)){
                        alert("deu tudo certo! fica em paz")
                    }
                }
            }
        }
    }
    
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function verificaNome(nome) {
        if (!(nome == null || nome == "" || isNumber(nome))) {
            return true;
        }
        else {
            alert("Digite seu nome corretamente");
            return false;
        }
    }

    function verificaSobrenome(sobrenome) {
        if (!sobrenome == "") {
            return true;
        }
        else {
            alert("Digite seu sobrenome")
            return false;
        }
    }

    function verificaEndereco(endereco) {
        if (!endereco == "") {
            return true;
        }
        else {
            alert("Digite seu endereço")
            return false;
        }
    }

    function verificaTelefone(telefone) {
        if (!(numeroTelefone == "" || !isNumber(numeroTelefone))) {
            return true;
        }
        else {
            alert("Digite seu número de telefone corretamente")
            return false;
        }
    }

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "formulario.php",
        data: {
            nome: $("#tnome"),
            sobrenome:
            endereco:
            numeroTelefone:

        }

    })
}