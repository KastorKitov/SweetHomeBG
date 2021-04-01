const authenticate = async (url,body,page) => {
    const promise = await fetch(`${url}`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([body])
        })
        const authToken = promise.headers.get('Token');
        document.cookie = `x-auth-token=${authToken}`;

        const response = await promise.json();

        // if(response.username){
        //     setIsLogged(true);
        // };
}

export default authenticate;