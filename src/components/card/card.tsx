import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import CardStyles from './card.css?inline';

interface CardProps {
    size: 'sm' | 'lg';
}

export default component$((props: CardProps) => {
    useStylesScoped$(CardStyles);
    return (
        <div class={`card-wrapper ${props.size}`}>
            <div class='card-content'>
                <Slot />
            </div>
        </div>
        );
    });
