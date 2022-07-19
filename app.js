const button = document.querySelector('button')
//funkcja sprawdzająca poprawność numeru PESEL
function sprawdzeniePESEL() {
    const result = document.getElementById('result')
    //Pobranie wartości z formularza, ze zmianą na typ String
    const numberPesel = String(document.getElementById('pesel').value)
    let arrayPESEL = []
    //pobranie elementów podanych w inpucie do tablicy arrayPESEL
    arrayPESEL = numberPesel.split('')
    //Pierwsza weryfikacja wartości podanych w formularzu - długość podanego numeru
    if(arrayPESEL.length == 11) {
        //wykorzystanie poszczególnych elementów tablicy z wykorzystaniem algorytmu obliczania poprawności PESEL
        let verify1 = arrayPESEL[0] * 1
        let verify2 = arrayPESEL[1] * 3
        let verify3 = arrayPESEL[2] * 7
        let verify4 = arrayPESEL[3] * 9
        let verify5 = arrayPESEL[4] * 1
        let verify6 = arrayPESEL[5] * 3
        let verify7 = arrayPESEL[6] * 7
        let verify8 = arrayPESEL[7] * 9
        let verify9 = arrayPESEL[8] * 1
        let verify10 = arrayPESEL[9] * 3
        let verify11 = arrayPESEL[10] * 1
        let sumaSprawdzen = verify1+verify2+verify3+verify4+verify5+verify6+verify7+verify8+verify9+verify10
        //Druga weryfikacja wartości podanej w formularzu - sprawdzenie czy ostatni znak jest cyfrą
        if(!isNaN(verify11)){
            if(!isNaN(sumaSprawdzen)){
            sumaSprawdzen
            //zamiana uzyskanej sumy sprawdzeń na element typu String a następnie pobranie elementow uzyskanego Stringa do tablicy arrayVeryfied
            let sumaSprawdzenString = String(sumaSprawdzen)
            let arrayVeryfied = []
            arrayVeryfied = sumaSprawdzenString.split('')
            //sprawdzenie sumy kontrolnej
            let sumaKontrolna = 10 - parseInt(arrayVeryfied[2])
            //Spradzenie czy spełniony jest warunek, w celu ustalenia poprawności numeru PESEL 
            if(sumaKontrolna == arrayPESEL[10]){
                result.classList.remove('fail')
                result.classList.add('success')
                //wyświetlenie informacji o poprawnym numerze PESEL
                let message = 'Podany numer PESEL: ' + numberPesel + ' jest poprawny - poprawna suma kontrolna'
                result.innerHTML = message
            }
            //Wyświetlenie informacji w przypadku gdyby podany numer PESEL był nieprawidłowy
            else {
                result.classList.add('fail')
                let message = 'Podany numer PESEL: ' + numberPesel + ' jest niepoprawny - błędna suma kontrolna'
                result.innerHTML = message
            }}
        else {
            //wyświetlenie informacji w przypadku gdyby podany numer PESEL  w miejscu ostatniej cyfry miał wpisany inny znaki niż cyfra
            result.classList.add('fail')
            let message = "Błąd! Podany numer PESEL: " + numberPesel + " zawiera inne znaki niż liczby. Wpisz poprawny PESEL"
            result.innerHTML = message
        }        
        }
        //wyświetlenie informacji w przypadku gdyby podany numer PESEL miał wpisane inny znaki niż cyfry
        else {
            result.classList.add('fail')
            let message = "Błąd! Podany numer PESEL: " + numberPesel + " zawiera inne znaki niż liczby. Wpisz poprawny PESEL"
            result.innerHTML = message
        }

    }
    //wyświetlenie informacji w przypadku zbyt krótkiego numeru PESEL
    else {
        result.classList.add('fail')
        let message = 'BŁĄD! Podany PESEL: ' + numberPesel + ' jest za krótki. Wpisz poprawny PESEL - 11 cyfr'
        result.innerHTML = message
    }
}
button.addEventListener('click', sprawdzeniePESEL)