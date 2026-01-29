import "./Header.css"

export default function Header(props) {
    console.log(props.menuItems)

    return (
        <>
            <ul style={{display: "flex", listStyle: "none"}} className="header">
                {props.menuItems.map((item, index) => <li style={{padding: "10px 15px"}} key={index}><a href="#">{item}</a></li>)}
            </ul>
        </>
    )
}

