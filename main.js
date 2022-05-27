

$(document).ready(function () {

    let users = [];
    let selectedUsers = {};

    getUsers();
    function getUsers() {
        $.getJSON("./get_customers.php", function (result) {
            users = result.data;
            console.log(result.data);
            displayHTML();
        })
    };
    
    
    
    function displayHTML() {
        let markup = '';
        let size = users.length;
        for (let i = size - 1; i >= 0; i--) {
            let name = users[i].username;
            let email = users[i].email;
            let address = users[i].address;
            let phone = users[i].phone;
            let birthday = users[i].birthday;
            let confirm = users[i].confirm;
            let CMNDbefore = users[i].CMNDbefore;
            let CMNDafter = users[i].CMNDafter;

            if (confirm === "0" || confirm === "2") {
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${users[i].id}" > ${users[i].id} </th>
                    <td class="td"> <a data-index="${users[i].id}" class="detailUser" data-toggle='modal'  data-target='#detail-Modal'> ${name}</a></td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    

                    </tr>
                `;
                $('#usersTbl > tbody:last-child').append(markup);
            }

            else if (confirm === "1") {
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${users[i].id}" > ${users[i].id} </th>
                    <td class="td"> <a data-index="${users[i].id}" class="detailUser" data-toggle='modal'  data-target='#detail-Modal'> ${name}</a></td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    

                    </tr>
                `;
                $('#confirmedUsersTbl > tbody:last-child').append(markup);
            }
            else if (confirm === "-1") {
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${users[i].id}" > ${users[i].id} </th>
                    <td class="td"> <a data-index="${users[i].id}" class="detailUser" data-toggle='modal'  data-target='#detail-Modal'> ${name}</a></td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    

                    </tr>
                `;
                $('#canceledUsersTbl > tbody:last-child').append(markup);
            }
            else if (confirm === "3") {
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${users[i].id}" > ${users[i].id} </th>
                    <td class="td"> <a data-index="${users[i].id}" class="detailUser" data-toggle='modal'  data-target='#detail-Modal'> ${name}</a></td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    

                    </tr>
                `;
                $('#LockedUsersTbl > tbody:last-child').append(markup);
            }
       
        }

        
        

        $('.edit-btn').click(function () {
            let index = $(this).data('index');
            $("#edit-ID").val(index);
        })
        $('.del-btn').click(function () {
            let index = $(this).data('index');
            $('#del-ID').val(index);
        })
        $('.update-btn').click(function () {
            let index = $(this).data('index');
            $('#update-ID').val(index);
        })

        $('.detailUser').click(function () {
            let index = $(this).data('index');
            $('#detail-ID').val(index);
        })
    
    }

    function deleteAllRow() {
        $('#usersTbl').find('tr:gt(0)').remove();
    }
    $('#deleteBtn').click(function () {
        location.reload();
        cancelUser();
    });

    $('#editBtn').click(function () {
        location.reload();
        editUser();
    });

    $('#updateBtn').click(function () {
        location.reload();
        updateUser();
    });

    $('#getDetails').click(function () {
        location.href = `./detail.php?id=${$('#detail-ID').val()}`;
       
    })


    

    function _ajax_request(url, data, callback, type, method) {
        if (jQuery.isFunction(data)) {
            callback = data;
            data = {};
        }
        return jQuery.ajax({
            type: method,
            url: url,
            data: data,
            success: callback,
            dataType: type
        });
    }
    jQuery.extend({
        put: function (url, data, callback, type) {
            return _ajax_request(url, data, callback, type, 'PUT');
        },

    });

    function editUser() {
        let param = {
            id: $("#edit-ID").val(),
        }

        console.log(JSON.stringify(param));
        $.put("./confirmUsers.php",
            JSON.stringify(param),
            function (data, status) {
                deleteAllRow();
                getUsers();
            }
        )
    }

    function updateUser() {
        let param = {
            id: $("#update-ID").val(),
        }

        console.log(JSON.stringify(param));
        $.put("./updateInfo.php",
            JSON.stringify(param),
            function (data, status) {
                deleteAllRow();
                getUsers();
            }
        )
    }

    function cancelUser() {
        let param = {
            id: $("#del-ID").val(),
        }

        console.log(JSON.stringify(param));
        $.put("./cancelUser.php",
            JSON.stringify(param),
            function (data, status) {
                deleteAllRow();
                getUsers();
            }
        )
    }

})


let MenuItems = document.querySelector(".menuItems");
function Handle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "400px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}
