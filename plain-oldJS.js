<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript - read JSON from URL</title>
    <!--script src="https://code.jquery.com/jquery-3.2.1.min.js"></script-->

</head>

<body>
    <div class="mypanel"></div>

    <script>

//Here is the Vanilla JS version for $.getJSON :

      var request = new XMLHttpRequest();
      var data;
      var arr = [];
      var text;

      request.open('GET', 'https://www.morgankweiss.com/img/bookData.json', true);

      request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
  
             data = JSON.parse(request.responseText);
             console.log(data);

//thingworx does not like this either.......
             data.forEach(function(book,i){
               //make this pojs
               text = `ISBN: ${book.isbn},
                       BOOK TITLE: ${book.book_title},
                       AUTHOR: ${book.author}`

               arr.push(text + "<br><br>");
             });
            alert(arr)
             //Jquery
            // $(".mypanel").html(arr);

          } else {
    // We reached our target server, but it returned an error
          }

      };

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();


    </script>

</body>
</html>
