import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import CardStyles from './card.css?inline';


export default component$(() => {
    useStylesScoped$(CardStyles);
    return (
        <div class='card-wrapper'>
            <div class='card-content'>
                <Slot />
            </div>
        </div>
        );
    });
