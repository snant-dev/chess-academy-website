import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Image
} from "@nextui-org/react";
import LogoPlaceHolder from "../../assets/img/LogoPlaceHolder.svg";

const menuItems = [
    { text: "Inicio", link: "/" },
    { text: "Academia", link: "/academy/" },
    { text: "Maestros", link: "/teachers/" },
    { text: "Precios", link: "/#pricing" },
]

export const MainNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState("false");

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand >
                    <Image src={LogoPlaceHolder.src} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="end" >
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/academy/">
                        Academia
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/teachers/">
                        Maestros
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" underline="hover" href="/#pricing">
                        Precios
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((menuItem, idx) => (
                    <NavbarMenuItem key={`${menuItem.text}-${idx}`}>
                        <Link color="foreground" size="lg" className="w-full" href={menuItem.link} >{menuItem.text}</Link>
                    </NavbarMenuItem>)
                )}
            </NavbarMenu>
        </Navbar>
    )
}