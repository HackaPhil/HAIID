import axios from 'axios';

var formData = new FormData();
var imagefile = document.querySelector('C:\Users\Aidan\Documents\Uni\ComputerScience\Year 3\HAIID\eflask\plantToPlate\resources\images\iu-7.jpeg');
formData.append("image",imagefile.files[0]);

axios
    .post('192.168.0.11:5000/get_progress', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
    })
    .catch(function (error) {
        // handle error
        alert(error.message);
    })
    .finally(function () {
        // always executed
        console.log(formData)
    });
