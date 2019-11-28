/// <reference path="jquery-3.4.1.js" />

function getAjaxData(url, callback) {
    $.ajax({
        method: "GET",
        url: url, 
        error: err => alert(err.message),
        success: response => callback(response)
    });
}

function showUsers() {
    getAjaxData("https://reqres.in/api/users", finalData => displayUsers(finalData.data));
}

// Display the users: 
function displayUsers(users) {
    $("tbody").empty();
    for (const item of users) {
        const tr = `
                <tr>
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>
                        <img src="${item.avatar}">
                    </td>
                </tr>
            `;
        $("tbody").append(tr);
    }
}
