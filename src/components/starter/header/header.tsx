import { component$,useStylesScoped$, useSignal } from '@builder.io/qwik';
import HeaderStyles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(HeaderStyles);
  const menuVisible = useSignal(true)
  return (
    
      <header>
        {menuVisible.value && (
            <div class="wrapper">
                <ul class='navBar'>
                    <li>
                        <a href="http://localhost:5173/">
                            <span class="icon"><i class="fas fa-home"></i></span>
                            <span class="item">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173/members/#">
                            <span class="icon"><i class="fas fa-desktop"></i></span>
                            <span class="item">Members</span>
                        </a>
                    </li>    
                </ul>
            </div>
        )}
      </header>
    
  );
});

