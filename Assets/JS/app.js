function todaySDate(){

    // Captura a data (year, month, day, hours, minutes, seconds).  
    const date = new Date();

    // Dia da semana, dia do mês, mês, horário e ano.
    // >> EX: Segunda-feira, 18 de junho, às 22:22 de 2023. 
    function fullDate(weekDay = 'Segunda-feira', monthDay = '1', month = 'Janeiro', time = '06:30:20', year = '1970'){
        return `${weekDay}, ${monthDay} ${month} às ${time} de ${year}` 
    }
    console.log(fullDate(dayOfTheWeek(), date.getDate(), dayOfMonth(), todaySTime(), date.getFullYear()))


    // Retorna o dia da semana
    function dayOfTheWeek(){
        const weekDay = date.getDay()
        const sundayToSaturday = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sábado'
        ]
        return sundayToSaturday[0];
    }

    // Retorna o mês
    function dayOfMonth(){
        const monthDay = date.getMonth();
        const JanuaryToDecember = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho', 
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro', 
            'Dezembro'
        ]; 
        return JanuaryToDecember[monthDay]
    }

    // Retorna o horário 
    function todaySTime(){
        const formattedHour = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
        const formattedMinutes = date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes();
        const formattedSeconds = date.getSeconds() < 10? `0${date.getSeconds()}` : date.getSeconds();
        return `${formattedHour}:${formattedMinutes}:${formattedSeconds}`
    }
} todaySDate();




