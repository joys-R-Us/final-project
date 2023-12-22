document.addEventListener('DOMContentLoaded', function () {
      
    var form = document.getElementById('form-ctn');
    var popup = document.getElementById('popup');

   
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        popup.style.display = 'block';

        
        alert('Thank you!\nYour message has been successfully submitted. Salamat!');
    });

    document.getElementById('close-btn').addEventListener('click', function () {
        
        popup.style.display = 'none';
    });
});