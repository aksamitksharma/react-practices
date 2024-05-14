
import React, { Component } from "react";


class Life extends Component {

    // sabse pehle constructure run hoga
    constructor(){
        super();
        console.log("Constructure")
        this.state = {count:0};
    }

    // Hume decide karna h ki component update ho ya nhi aur view par updated value render ho ya nhi
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    // Component MOunt hone se pehle ye run hoga aur constructor k baad
    componentWillMount(){
        console.log("Component Will Mount");
    }

    // Jab pura component load ho jayega tab ye run hoga
    componentDidMount(){
        console.log("Component Did Mount");
    }

    // Jab component update ho chuka hai tab ye call hoga
    componentDidUpdate(){
        console.log("Component Did Update");
    }

    // Jab koi component umount hoga uske just pehle ye call hoga
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    // Constructure and ComponentWillMOunt k baad render run hoga
    render() {
        console.log("Render");
        return (
            <div>
                <h1> Life Cycle Test Component</h1>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Update Name</button>
            </div>
        );

    }
}
// const Life = () => {
//     return(
//         <>
//             <h1> Life Cycle Test Component</h1>
//         </>
//     );
// }

export default Life;