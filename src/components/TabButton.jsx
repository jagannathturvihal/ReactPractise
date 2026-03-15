export default function TabButton({ isTabSelected, children, handleClick }) {
    // function handleOnClick() {
    //     console.log(`You clicked the ${children} tab!`);
    // }
    return (
        <li> 
            <h3>{children}</h3>
            <button className = {isTabSelected ? 'active' : null}  onClick={handleClick}>{ children }</button>
        </li>
    );
}