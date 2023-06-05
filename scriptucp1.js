function updateDateTime() {
    var now = new Date();
    var days = ['Minggu', 'Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    var day = days[now.getDay()];
    var date = now.getDate();
    var month = now.toLocaleString('default', {month: 'long'});
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    //Format Jam Menit Detik
    var time = hours.toString().padStart(2,'0')+':'+
    minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0');

    //Format Hari Bulan Tahun
    var currentDate = day + ',' + date.toString().padStart(2,'0')+' ' + month.toString().padStart(2,'0')+
    ' ' + year;

    //Display DateTime
    document.getElementById('datetime').textContent = currentDate;
    document.getElementById('time').textContent = time;

    //Updateing time 
    setTimeout(updateDateTime, 1000);
}

//calling the update time
updateDateTime();