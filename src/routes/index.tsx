import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
import {SiMicrosoftsqlserver, SiPowerbi, SiGit, SiJavascript, SiTailwindcss, SiGithub, SiHtml5, SiCss3} from '@qwikest/icons/simpleicons';
import { QwikLogo } from '~/components/icons/qwik';



export default component$(() => {4
  return (
    <div class='mt-8'>
      <div class='w-full flex flex-row flex-wrap justify-center'>
        <Card size='sm'>
          <p>Hello!  My name is Christopher Kinney, but you may call me Chris!
          I am a full stack developer with a passion for learning and a love for problem solving.
          I love to work with new technologies and developing new projects. I am interested in starting new projects, so feel free to contact me with your offer!</p>
        </Card>
      </div>
      <div class='aboutMe w-screen'>About Me</div>
      <div class='flex flex-row flex-wrap justify-between h-auto w-full mt-8'>
        <div>
          <Card size='sm'>
            <p>I am a veteran of the United States Air Force.  I served for six years in aviation command and control. My love for technology started with learning 
              about radios and communication networking with different frequencies. During that time I have gotten to travel to many different locations
              to include: South Korea, Japan, UAE, and Ireland.
            </p>
          </Card>
        </div>
        <div>
          <Card size='sm'>
            <p>I am  a self-taught developer with about 1 year of experience.
              My passion for learning has lead me to develop a few different skill sets.  I am a big fan of aviation and fly whenever I can afford to do so.
              If I am not flying, I am usually looking up the newest technology and trying to find fun and new ways to implement it.
              Currently, I am using the Qwik Framework to develop my front-end application.  
            </p>
          </Card>
        </div>
        <div >
          <Card size='sm'>
            <p>My list of hobbies seem to grow by the day, but I would say that I am an avid gamer. I also enjoy spending time with my two dogs and disc golfing
              whenever I can. Camping, mountain hiking, and fishing are some of my favorite outdoor pasttimes. Next year I plan on moving to Alaska where I can enjoy
              more of the outdoors in my free time.</p>
          </Card>
        </div>
      </div>
      <div class='aboutMe w-screen'>Skills</div>
      <div class='mt-8 w-full flex flex-row justify-center'>
        <Card size='lg'>
          <div class='flex flex-row flex-wrap justify-start items-center mt-4'> 
            <p><SiHtml5 class="text-7xl"/></p>
            <p><SiCss3 class="text-7xl"/></p>
            <p><SiJavascript class="text-7xl"/></p>
            <p><SiMicrosoftsqlserver class="text-7xl"/></p>
            <p><SiPowerbi class="text-7xl"/></p>
            <p><SiGit class="text-7xl"/></p>
            <p><SiGithub class="text-7xl"/></p>
            <p><SiTailwindcss class="text-7xl"/></p>
            <QwikLogo></QwikLogo>
          </div>
          
        </Card>
      </div>
      <div class='aboutMe w-screen'>Projects</div>
      <div class='mt-8 w-full flex flex-row justify-center'>
        <Card size='lg'>
          <p>Projects</p>
        </Card>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Christopher Kinney's Portfolio",
  meta: [
    {
      name: 'description',
      content: 'Portfolio Website',
    },
  ],
};
