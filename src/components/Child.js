
const Child = ({pMethod}) => {
    const user = [{name:"Amit",email:"amit@mail.com"},{name:"Aks",email:"aks@mail.com"}];
    return (
        <>
            <h1>Child Component</h1>
            <button onClick={()=>pMethod(user)}>Click Me</button>
        </>
    );

}

export default Child;