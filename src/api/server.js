export async function createToken(username, password){
    const response = await fetch('https://react-js-sample-api.kmuwink.net/api-token-auth/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    });
    return await response.json();
}

export async function createUser(username, password){
    const response = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    return await response.json();
}

async function readUsers(){
    const token = localStorage.getItem('token');
    const response = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
        method: 'get',
        headers: {
            'Authorization' : token,
        }
    }).then(response => response.json());
    for(let i = 0; i<response.length; i++){
        if(localStorage.getItem('username') === response[i].username){

            return i+1;
        }
    }
}

export async function readMyInfo(){
    let id = await readUsers();
    let state = false;
    let userInfo = {};
    const token = localStorage.getItem('token');
    while(!state){
        const response = await fetch('https://react-js-sample-api.kmuwink.net/user/' + id, {
            method: 'get',
            headers: {
                'Authorization' : token,
            }
        }).then(response => response.json());

        if(localStorage.getItem('username') !== response.username){
            id++;
        }
        else{
            state = true;
            userInfo = response;
            localStorage.setItem('id', id);
        }
    }
    return {
        username: userInfo.username,
    };
}


export async function createFeed(body) {
    const token = localStorage.getItem('token');
    const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Token ' + token,
        },
        body: JSON.stringify({
            content: body,
        }),
    });
    window.location.reload();
}

export async function readFeeds(){
    const token = localStorage.getItem('token');
    const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/', {
        method: 'GET',
        headers: {
            'Authorization' : 'Token ' + token,
        },
    });
    return await feedResult.json();
}

export async function readPost(id){
    let postInfo = {};
    const token = localStorage.getItem('token');
    await fetch('https://react-js-sample-api.kmuwink.net/feed/' + id,{
        method: 'GET',
        headers: {
            'Authorization' : 'Token ' + token,
        },
    }).then(response => response.json())
        .then(response => postInfo = response);
    return {
        id: postInfo.id,
        username: postInfo.owner,
        content: postInfo.content
    };
}

export async function createComment(id, content) {
    const token = localStorage.getItem('token');
    const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/' + id  + '/comment/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Token ' + token,
        },
        body: JSON.stringify({
            content: content,
        }),
    });
    console.log(await result.json());
    window.location.reload();
}

export async function readComments(id){
    const token = localStorage.getItem('token');
    const feedResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/' + id + '/comment/', {
        method: 'GET',
        headers: {
            'Authorization' : 'Token ' + token,
        }
    });
    return await feedResult.json();
}