import { component$,useStylesScoped$, useSignal } from '@builder.io/qwik';
import HeaderStyles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(HeaderStyles);
  const menuVisible = useSignal(true)
  return (
    
      <header>
        {menuVisible.value && (
            <div>
                <div class='w-full h-full text-center pt-1 animate-bounce text-4xl text-red'>In Development</div>
            </div>
        )}
      </header>
    
  );
});

