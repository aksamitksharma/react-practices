
const HOCRed  = (props) => {
    return(
        <>
            <br />
            <span>----------------------------</span>
            <h1>This is a HOC Red Counter</h1>
            <props.cmp />
            <br />
            <span>----------------------------</span>
        </>
    );
}

export default HOCRed;