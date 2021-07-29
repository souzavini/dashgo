import Link, { LinkProps } from "next/link";
import { useRouter } from "next/Router";
import React, { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children:ReactElement;
    ShouldMatchExactHref?:boolean;
}

export function ActiveLink({children,ShouldMatchExactHref = false,...rest}:ActiveLinkProps){
    const {asPath} = useRouter()

    let isActive = false;

    if(ShouldMatchExactHref && (asPath === rest.href || asPath === rest.as)){
        isActive = true;
    }

    if(!ShouldMatchExactHref && (asPath.startsWith(String(rest.href)) || 
    asPath.startsWith(String(rest.as)))){
        isActive = true;
    }

    return(
        <Link {...rest}>
            {cloneElement(children,{
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}