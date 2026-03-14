export default function TabButton({ children, handleClick }) {
    // function handleOnClick() {
    //     console.log(`You clicked the ${children} tab!`);
    // }
    return (
        <li> 
            <h3>{children}</h3>
            <button onClick={handleClick}>{ children }</button>
        </li>
    );
}