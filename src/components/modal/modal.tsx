import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import ModalStyles from './modal.css?inline';


export default component$(() => {
    useStylesScoped$(ModalStyles);
    return (
        <div class='modal'>
            <div class='modal-content'>
                
                <main class='main-content'>
                    <Slot />
                </main>
                <footer class='modal-footer'></footer>
            </div>
        </div>
    )
});
    