import type { ComponentChildren } from "preact";

export default function MobileMenu(props: { children: ComponentChildren }) {
    return (
        <>
            <div class="bg-ted-green-2 w-full absolute top-0">

            </div>
            <div>
                {props.children}
            </div> 
        </>
    );
}