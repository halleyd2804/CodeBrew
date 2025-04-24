// Component used for enabling scrolling animation functionality

// Imports
"use client";
import { Observer } from "tailwindcss-intersect";
import { useEffect } from "react";

// ObserverProvider component is placed at the top of every page to enable scrolling animation
export default function ObserverProvider({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        Observer.start();
    }, []);

    return <>{children}</>;
}