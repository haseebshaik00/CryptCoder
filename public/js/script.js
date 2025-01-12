window.onload = () => {
    let inpCode = document.getElementById('inpCode');
    let inpEncoded = document.getElementById('inpEncoded');
    let btnEncode = document.getElementById('btnEncode');
    let inpEncrypted = document.getElementById('inpEncrypted');
    let btnEncrypt = document.getElementById('btnEncrypt');

    function encrypt(input) {
        let result = '';
        for (let i = 0; i < input.length; i++) {
            let charac = input[i];
            char = charac.charCodeAt(0);
            if(char >= 65 && char <= 90)
                result += charac.toLowerCase();
            else if(char >= 97 && char <= 122)
                result += charac.toUpperCase();
            else result += charac;
        }
        console.log(result);
        return result;
    }

    btnEncode.onclick = (e) => {
        e.preventDefault();
        let data = inpCode.value;
        data = btoa(data);
        inpEncoded.value = data;
    }

    btnEncrypt.onclick = (e) => {
        e.preventDefault();
        let data = inpEncoded.value;
        data = encrypt(data);
        inpEncrypted.value = data;
    }
}
