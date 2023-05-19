import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import CardStyles from './card.css?inline';

interface CardProps {
    size: 'sm' | 'lg';
}

export default component$((props: CardProps) => {
    useStylesScoped$(CardStyles);
    return (
        <div class={`rounded-2xl p-4 bg-blue border-4 border-green-900 h-80 ${props.size}`}>
            <div class='flex flex-row card-content border-4 border-slate-900 bg-slate-800 rounded-2xl text-left h-full'>
                <Slot />
            </div>
        </div>
        );
    });
