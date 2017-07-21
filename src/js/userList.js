let url = require('file-loader!../img/user.png');
var _ = require('lodash');

function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const img = document.createElement("img");
            const div = document.createElement("div");
            div.append(user.name + ' ' + user.age);
            img.src = url;
            div.appendChild(img);
            container.appendChild(div);
        });
    }
}

module.exports = userList;