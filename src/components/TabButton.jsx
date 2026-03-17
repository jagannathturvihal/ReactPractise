export default function TabButton({ isTabSelected, children, ...props }) {
   
    return (
        <li> 
            <h3>{children}</h3>
            <button className = {isTabSelected ? 'active' : null}
                {...props}>
                { children }
            </button>
        </li>
    );
}