function Testi(props){

    const testHandler = ()=>{
        console.log('opa')
        fetch('http://localhost:5000/test')
        .then(res=>console.log(res))
    }

    return(
        <div>
        <h1>Hello from Test</h1>
        <button onClick={testHandler}>asd</button>
        </div>
    )
}

export default Testi;