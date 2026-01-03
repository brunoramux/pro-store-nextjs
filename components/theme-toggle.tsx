'use client';

import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";


const ModeToggle = () => {

    const mounted = useMounted();
    const { theme, setTheme } = useTheme();

    if(!mounted) {
        return null;
    }

    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" >
                    {theme === 'system' ? (<SunMoon />) : theme === 'dark' ? (<MoonIcon />) : (<SunIcon />)}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    checked={theme === 'system'}
                    onClick={() => setTheme('system')}
                >
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'light'}
                    onClick={() => setTheme('light')}
                >
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === 'dark'}
                    onClick={() => setTheme('dark')}
                >
                    Dark
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default ModeToggle;