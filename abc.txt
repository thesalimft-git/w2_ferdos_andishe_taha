import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function TopMenu() {
    let menu_items: string[] = Array(
        'Dashboard',
        'Courses',
        'Calendar',
        'Account',
        'Setting'
    )

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem className='flex px-3 h-12 cursor-pointer'>
                    {menu_items.map((item) => {
                        return (
                            <NavigationMenuLink>
                                {item}
                            </NavigationMenuLink>
                        )
                    })}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
