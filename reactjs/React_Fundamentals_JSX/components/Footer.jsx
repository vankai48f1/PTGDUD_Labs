import "./Footer.css"

export default function Footer(props) {
    console.log(props.menuItems)

    return (
        <footer className="footer">
            <div className="footer-ctn">
                <div className="row">
                    <div className="col-md-4 col12">
                        <h3>Column 1</h3>
                        <div className="form-outline mb-4">
                            <input type="email" id="form5Example2" className="form-control" />
                            <label className="form-label" htmlFor="form5Example2">Email address</label>
                        </div>
                    </div>
                    <div className="col-md-4 col12">
                        <h3>Column 1</h3>
                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col12">
                        <h3>Column 1</h3>
                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className="text-dark">Link 1</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 2</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 3</a>
                            </li>
                            <li>
                            <a href="#!" className="text-dark">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

