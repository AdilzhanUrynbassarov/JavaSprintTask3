

    function change() {

        let inputValue1 = document.getElementById('title').value;
            input(inputValue1);

    }

    function input(num) {
        if (currency.value == 1) {
            let kztToDollar = num / 431;
            let kztToEuro =  num / 509;

            document.getElementById("kzt").value = "-";
            document.getElementById("dollar").value = kztToDollar.toFixed(2);
            document.getElementById("euro").value = kztToEuro.toFixed(2);


        }
        if (currency.value == 2) {
            let dollarToKzt = num * 429;
            let dollarToEuro = num / 1.186;

            document.getElementById("kzt").value = dollarToKzt.toFixed(2);
            document.getElementById("dollar").value = "-";
            document.getElementById("euro").value = dollarToEuro.toFixed(2);
        }
        if (currency.value == 3) {
            let euroToKzt = num * 507;
            let dollarToEuro = num / 0.85;
            document.getElementById("kzt").value = euroToKzt.toFixed(2);
            document.getElementById("dollar").value = dollarToEuro.toFixed(2);
            document.getElementById("euro").value = "-";
        }


    }






