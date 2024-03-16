import type { ComponentChildren } from "preact";
import { useSignal } from "@preact/signals";


export default function MobileMenu(props: { children: ComponentChildren }) {
    const isMenuOpen = useSignal<boolean>(false);

    const toggleMenu = () => {        
        isMenuOpen.value = !isMenuOpen.value;
        document.body.style.overflow = isMenuOpen.value ? "hidden" : "auto";
    }

    return (
        <>
            <div class={`
                absolute bg-ted-green w-screen top-0 left-0
                overflow-hidden text-white z-10
                transition-height duration-500 ease-in-out
                ${isMenuOpen.value ? "h-screen" : "h-0"}
            `}>
                <div class="mt-14 flex justify-end px-6">
                    <div></div>
                    <button onClick={toggleMenu}>
                        x
                    </button>
                </div>
                <ul class="px-6 text-xl mt-8">
                    <li class="my-3">Home</li>
                    <li class="my-3">News</li>
                    <li class="my-3">Lyrics</li>
                    <li class="my-3">Community</li>
                    <li class="my-3">Promote</li>     
                </ul>             
            </div>
            <button onClick={toggleMenu}>
                {props.children}
            </button> 
        </>
    );
}