import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import CardStyles from './card.css?inline';

interface CardProps {
    size: 'sm' | 'lg';
}

export default component$((props: CardProps) => {
    useStylesScoped$(CardStyles);
    return (
        <div class={`rounded-2xl p-4 bg-blue border-4 border-green h-80 ${props.size}`}>
            <div class='card-content border-4 border-black bg-black rounded-2xl text-left w-full h-full'>
                <Slot />
            </div>
        </div>
        );
    });
