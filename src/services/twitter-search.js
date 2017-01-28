const ROOT_URL = 'http://localhost:3001/twitter/user/search?username='

export default function searchTwitter(username, callback) {
    const Init = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };

    fetch(ROOT_URL + username)
        .then(response => response.json())
        .then( (response) => {
            if (callback) {
                callback(response.users.slice(0,6));
            }
        })
        .catch(error => console.error(error));
}
