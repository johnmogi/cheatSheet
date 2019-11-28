/// <reference path="jquery-3.4.1.js" />
const userBase = [];
$(() => {

    const config = {
        users1: "https://reqres.in/api/users?page=1",
        users2: "https://reqres.in/api/users?page=2",
    }


    function getAjaxData(url, callback) {
        $.ajax({
            method: "GET",
            url: url,
            error: err => alert(err.message),
            success: users => callback(users)
        });
    }

    function showUsers() {

        getAjaxData(config.users1, finalData => displayUsers(finalData.data));

    }

    function showUsers2() {

        getAjaxData(config.users2, finalData => displayUsers(finalData.data));


    }


    // Display the users: 
    function displayUsers(users) {
        // JSON.parse(userBase);
        userBase.push(users)
        // console.log(users)
        // $("#stage").empty();
        for (const item of users) {
            const user = `
        <div class="card border-info col-3">  
        <img src="${item.avatar}" class="card-img-top" alt="${item.first_name}">
        <div class="card-header bg-transparent border-info>${item.first_name}</div>
        <div class="card-body text-info">
        <p class="card-text"><a href="mailto:${item.email}">${item.email}</a></p>
      </div>
      <div class="card-footer bg-transparent border-info">${item.first_name} ${item.last_name}</div>
    </div>                 
            `;
            $("#stage").append(user);
        }

    }


    showUsers();
    showUsers2();
}); //RF