

$(document).ready(function() {
   
    let users = [];
    let selectedUsers = {};

    getUsers();
    function getUsers(){
        $.getJSON("./get_customers.php",function(result){
            users= result.data;
            console.log(result.data);
            displayHTML();
        })
    };
    function displayHTML(){
        let markup = '';
        let size = users.length;
        let count = 0 ;
        for(let i =size-1;i>=0;i--){
            count++;
            let name = users[i].username;
            let email = users[i].email;
            let address = users[i].address;
            let phone = users[i].phone;
            let birthday = users[i].birthday;
            let confirm = users[i].confirm;
            let money = users[i].moneyremaining;
            let CMNDbefore = users[i].CMNDbefore;
            let CMNDafter = users[i].CMNDafter;
            
            if(confirm==="0" || confirm==="2"){
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${count}"> ${count} </th>
                    <td class="td">${name}</td>
                    <td class="td">${email}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    <td class="td"><span class="edit-btn btn btn-success" type="submit"  data-index ="${i}" data-toggle="modal" data-target="#edit-Modal" >Confirm</span></td>

                    </tr>
                `;
                $('#usersTbl > tbody:last-child').append(markup);
            }
        
            else if (confirm==="1"){
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${count}"> ${count} </th>
                    <td class="td">${name}</td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    <td class="td"><span class="edit-btn btn btn-success" type="submit"  data-index ="${i}" data-toggle="modal" data-target="#edit-Modal" >Confirm</span></td>

                    </tr>
                `;
                $('#confirmedUsersTbl > tbody:last-child').append(markup);
            }
            else if(confirm==="-1"){
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${count}"> ${count} </th>
                    <td class="td">${name}</td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    <td class="td"><span class="edit-btn btn btn-success"  data-index ="${i}" data-toggle="modal" data-target="#edit-Modal" >Confirm</span></td>

                    </tr>
                `;
                $('#canceledUsersTbl > tbody:last-child').append(markup);
            }
            else if(confirm==="3"){
                markup = `
                <tr>
                    <th class="th" scope = 'row' id="${count}"> ${count} </th>
                    <td class="td">${name}</td>
                    <td class="td">${email}</td>
                    <td class="td">${address}</td>
                    <td class="td">${phone}</td>
                    <td class="td">${birthday}</td>
                    <td class="td">${confirm}</td>
                    <td class="td">${CMNDbefore}</td>
                    <td class="td">${CMNDafter}</td>
                    <td class="td"><span class="edit-btn btn btn-success"  data-index ="${i}" data-toggle="modal" data-target="#edit-Modal" >Confirm</span></td>

                    </tr>
                `;
                $('#LockedUsersTbl > tbody:last-child').append(markup);
            }
            

        }





        

        $('.edit-btn').click(function(){
            let index = $(this).data('index');
            selectedUsers =users[index];
            $("#edit-ID").val(selectedUsers.id);
            $("#edit-name").val(selectedUsers.username);
        })
        $('.del-btn').click(function(){
            let index = $(this).data('index');
            selectedUsers = users[index];
        })
        $('.update-btn').click(function(){
            let index = $(this).data('index');
            selectedUsers = users[index];
        })
    }

    function deleteAllRow(){
        $('#usersTbl').find('tr:gt(0)').remove();
    }
    $('#deleteBtn').click(function(){
       $('#delete').val(selectedUsers.email);
    });

    $('#editBtn').click(function(){
        location.reload();
        editUsers();
    });

    $('#updateBtn').click(function(){
        $('#update').val(selectedUsers.email);
     });

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
        put: function(url, data, callback, type) {
            return _ajax_request(url, data, callback, type, 'PUT');
        },
        
    });

    function editUsers(){
        let param = {
            id : $("#edit-ID").val(),
            confirm : $("#edit-confirm").val(),
        }

        console.log(JSON.stringify(param));
        $.put("./confirmUsers.php",
            JSON.stringify(param),
            function(data,status){
                deleteAllRow();
                getUsers();
            }
        )
    }

})

let MenuItems = document.querySelector(".menuItems");
function Handle()
{
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "400px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}
