import { Navbar, NavbarBrand } from "react-bootstrap"

export default function Header() {
    return (
        <Navbar expand='lg' className='px-3 mb-3 bg-dark'>
            <NavbarBrand className='text-light' href='#home'><b>マイスキー</b></NavbarBrand>
        </Navbar>
    )
}
