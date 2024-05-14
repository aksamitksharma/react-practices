
const HOCGreen  = (props) => {
    return(
        <>
            <br />
            <span>----------------------------</span>
            <h1>This is a HOC Green Counter</h1>
            <props.cmp />
            <br />
            <span>----------------------------</span>
        </>
    );
}

export default HOCGreen;