
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>

</head>

<body>
    <div class="container">
        <form onsubmit="saveToLocalStorage(event)">
            <label for="name" class="form-label">Name :</label>
            <input type="text" name="name" id="name" class="form-control form-control-sm" required>
            <label name = "emsil" class="form-label">Email:</label>
            <input type="email" name="email" id="email" class="form-control form-control-sm">
            <label name= "pno" class="form-label">Phone no : </label>
            <input type = "text" name="pno" id="pno" class="form-control form-control-sm">
            
            <button> Submit</button>
        </form>
    </div>
    <ul id='listOfItems'></ul>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js"></script>
    <script>
        function saveToLocalStorage(event) {
            event.preventDefault();
            const name = event.target.name.value;
            const email = event.target.email.value;
            const pno = event.target.pno.value;
            
            const Obj = {
                name,
                email,
                pno
            }
            axios.post("https://crudcrud.com/api/205f9a6aa8d14fc7956030eaa831de11/appointmentapp",Obj)
                .then((response)=>{
                    showOnScreen(response.data)
                    console.log(response)
                })
                .catch((err)=>{
                    console.log(err);
                })

            
            // localStorage.setItem(Obj.email, JSON.stringify(Obj));
            // showOnScreen(Obj);
        }
        function showOnScreen(Obj) {
            const parentElement = document.getElementById('listOfItems');
            const childElement = document.createElement('li')
            childElement.textContent = Obj.name + "  " + Obj.email + " " + Obj.pno;
            const deleteButton = document.createElement('input');
            deleteButton.type = "button";
            deleteButton.value = "Delete"
            deleteButton.onclick = () => {
                localStorage.removeItem(Obj.email);
                parentElement.removeChild(childElement);
            }

            const editButton = document.createElement('input');
            editButton.type = "button";
            editButton.value = "Edit"
            editButton.onclick = () => {
                localStorage.removeItem(Obj.email);
                parentElement.removeChild(childElement);
                document.getElementById('name').value = Obj.name;
                document.getElementById('email').value = Obj.email;
                document.getElementById('pno').value = Obj.pno;
            }

            childElement.appendChild(deleteButton);
            childElement.appendChild(editButton);
            parentElement.appendChild(childElement);

        }
    </script>
</body>

</html>
