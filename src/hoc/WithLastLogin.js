// this is higher order comp - HOC 
// hoc is going to return props children it gets 
// can return multiple children tags 
// naming convention -- begin with 'with' prefix. 
// wrapper comp that doesn't return any JSX on its own 

const WithLastLogin = (props) => props.children;

export default WithLastLogin;


