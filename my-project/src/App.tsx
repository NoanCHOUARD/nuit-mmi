import React from 'react';
import mail from './images/mail.svg';
import video from './images/video.svg';
import doc from './images/doc.svg';
import image from './images/image.svg';
import home from './images/home.svg';
import news from './images/news.svg';
import players from './images/multi.svg';
import levels from './images/levels.svg';
import challenges from './images/challenge.svg';
import logo from './images/logo.svg';
import logob from './images/logo-b.svg';
import test from './images/test.png';
import transition2 from './images/transition-n.png';

const App: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center place-content-between bg-gray-200">
        <div>
            <a href=""><img className="pt-5 pb-5 pl-7 pr-7 transition-all hover:scale-110" src={logo} alt="logo" /></a>
        </div>

        {/* navigation   */}
        <div className="flex font-vt323 text-lg">
            <a className="mr-7 mt-5 transition-all hover:scale-105 hover:text-emerald-400 cursor-pointer">
                Our Quest
            </a>
            <a className="mr-7 mt-5 transition-all hover:scale-105 hover:text-emerald-400 cursor-pointer">
                Game Tools
            </a>
            <a className="mr-7 mt-5 transition-all hover:scale-105 hover:text-emerald-400 cursor-pointer">
                The Impact
            </a>
            <a className="mr-7 mt-5 transition-all hover:scale-105 hover:text-emerald-400 cursor-pointer">
                Level to V2?!
            </a>
            <a target="_blank" href="https://mmi.unilim.fr/~caroalquier1/NUITMMI/" className="mr-7 bg-white pl-4 pr-4 mt-4 mb-4 pt-1 items-center justify-center border border-black rounded-md shadow-md transition-all hover:bg-black hover:text-white hover:scale-105">
                Play Now
            </a>
        </div>
      </div>

      {/* section Hero */}
      <div className="relative pb-32">
        <h1 className="flex text-center items-center justify-center pt-48 text-8xl font-vt323">
            Clean the Digital World,<br />
            One Byte at a Time!
        </h1>
        <h2 className="flex text-center items-center justify-center text-bold text-2xl font-semibold pt-10 tracking-widest font-roboto">
            Play the game that fights digital pollution and inspires<br />
            real-world change.
        </h2>
        <div className="flex text-center items-center justify-center text-bold text-4xl font-semibold pt-10 tracking-widest pb-32">
            <a target="_blank" href="https://mmi.unilim.fr/~caroalquier1/NUITMMI/" className="border-2 border-black pt-2 pb-2 pl-6 pr-6 rounded-md shadow-md transition-all hover:bg-black hover:text-white hover:scale-105 font-vt323 cursor-pointer">
                Play Now
            </a>
        </div>
        <img src={transition2} className="absolute bottom-0 w-full" alt="transition2" />
      </div>
      
      {/* section Our quest */}
      <div className="flex bg-black items-center justify-center pt-64 pb-44 w-full">
        <img src={test} className="size-4/12 mr-16" alt="image" />
        <div>
            <p className="text-teal-300 text-6xl mr-60 pb-10 font-vt323">
                Our Quest
            </p>
            <p className="text-white text-3xl font-roboto">
                In the Digital Cleanup Game, you play<br />
                as a heroic janitor of the virtual<br />
                world, tackling, digital clutter and<br />
                reducing the carbon footprint of the<br />
                internet.<br />
                Your mission? Clear duplicate files,<br />
                eliminate spam, and optimize servers<br />
                all while learning real world<br />
                strategies for digital sustainability.
            </p>
        </div>
      </div>  

      {/* Début de la section */}
      <section className="w-full px-96 py-12 bg-white flex flex-col gap-8 items-center justify-center font-mono">
        {/* Titre */}
        <h1 className="text-5xl font-bold font-vt323">Your Digital toolkit</h1>
        <p className="text-lg text-center font-roboto">As a digital hero in Bit Sweep, you’ll wield powerful tools to tackle digital clutter and optimize the virtual world. Master these tools to climb the leaderboard and reduce your carbon footprint!</p>

        {/* Tableau des éléments */}
        <div className="grid grid-cols-3 gap-7 font-mono">
          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 1 */}
            <img src={mail} alt="mail" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Digital Declutter</h2>
            <p className="text-center font-roboto">Tackle digital clutter and optimize the virtual world.</p>
          </div>

          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 2 */}
            <img src={video} alt="video" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Eco-Friendly</h2>
            <p className="text-center font-roboto">Reducing the quality of a video can significantly lower its carbon emissions. Play to test!</p>
          </div>

          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 3 */}
            <img src={doc} alt="doc" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Sort your files</h2>
            <p className="text-center font-roboto">Learn how to sort your files in order to free up disk space while helping the planet !</p>
          </div>

          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 4 */}
            <img src={image} alt="image" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Low Res Graphics</h2>
            <p className="text-center font-roboto">Digital Cleaner has a pixel art esthetic in order to save performance and limit carbon footprint.</p>
          </div>

          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 5 */}
            <img src={home} alt="home" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Check your environnement</h2>
            <p className="text-center font-roboto">While playing the game, you will maybe notice some bad practises that you didn’t remarked...
</p>
          </div>

          <div className="flex flex-col items-center gap-3 transition-all hover:scale-110 hover:text-emerald-400">
            {/* élément 6 */}
            <img src={news} alt="news" className="w-32 h-32" />
            <h2 className="text-lg font-bold font-vt323">Spread Information</h2>
            <p className="text-center font-roboto">After learning about digital cleaning, your will be able to share your knowledge with your friends.</p>
          </div>
        </div>
      </section>

    {/* section Matters */}
    <section className="w-full px-64 py-28 bg-black text-white flex flex-col gap-8 items-start justify-center font-mono">
        {/* Title */}
        <h2 className='font-vt323 text-5xl'>Why Digital Pollution Matters</h2>
   
        <div className='flex gap-8 items-center justify-center'>

          <h1 className='w-1/2 text-8xl font-vt323'>Did you <br />Know?</h1>

          <div className='grid grid-cols-1 gap-8 w-1/2'>

            <p className='text-2xl font-roboto transition-all hover:text-emerald-400 hover:scale-110'>90% of stored data is never accessed after three months.</p>


            <p className='text-2xl font-roboto transition-all hover:text-emerald-400 hover:scale-110'>The internet generates more than 900 million tons of CO₂ annually.</p>
          </div>

        </div>
        
      </section>

      {/* section Next */}
      <section className="w-full px-96 py-12 bg-white flex flex-col gap-8 items-center justify-center font-mono">
        {/* Titre */}
        <h1 className="text-5xl font-bold font-vt323">What’s Next?</h1>
        <p className="text-lg text-center font-roboto font-normal">Get ready for future upgrades! Here's a sneak peek:</p>
        
        {/* card n°1 */}
        <div className='grid grid-cols-3 gap-7 font-mono'>
          <div className='flex text-center flex-col items-center gap-3 transition-all hover:scale-110 px-2 py-2 border-4 border-black rounded-2xl hover:border-emerald-400'>
            <img src={players} alt="players" />
            <h1 className='text-4xl font-vt323 text-emerald-400'>Multiplayer Mode:</h1>
            <p className=''>Join forces with friends to tackle bigger challenges.</p>
          </div>

      {/* card n°2 */}
          <div className='flex text-center flex-col items-center gap-3 transition-all hover:scale-110 px-2 py-2 border-4 border-black rounded-2xl hover:border-emerald-400'>
            <img src={levels} alt="levels" />
            <h1 className='text-4xl font-vt323 text-emerald-400'>New Levels:</h1>
            <p className=''>Explore exciting scenarios like 'Server Chaos' and 'Cloud Overload'.</p>
          </div>

      {/* card n°3 */}
          <div className='flex text-center flex-col items-center gap-3 transition-all hover:scale-110 px-2 py-2 border-4 border-black rounded-2xl hover:border-emerald-400'>
            <img src={challenges} alt="challenges" />
            <h1 className='text-4xl font-vt323 text-emerald-400'>Timed Challenges:</h1>
            <p className=''>Test your skills in high-pressure cleanup missions.</p>
          </div>
        </div>

        {/* bouton more information */}
        <a className="text-5xl text-black border-2 border-black pt-2 pb-2 pl-6 pr-6 rounded-md shadow-md transition-all hover:bg-emerald-400 hover:text-white hover:border-emerald-400 hover:scale-105 font-vt323 cursor-pointer">
                More information!
            </a>

      </section>

          <div>
              <img src={transition2} className="w-screen" alt="transition2" />
          </div>

      {/* Bas de page | Footer */}
      <footer className='bg-black'>
        
        <div className='flex justify-between items-center py-20 px-10'>

          {/* Logo */}
          <img src={logob} className='pt-5 pb-5 pl-7 pr-7 transition-all hover:scale-110' alt="" />

          {/* bouton play now */}
            <a target="_blank" href="https://mmi.unilim.fr/~caroalquier1/NUITMMI/" className="text-5xl text-white border-2 border-white pt-2 pb-2 pl-6 pr-6 rounded-md shadow-md transition-all hover:bg-white hover:text-black hover:scale-105 font-vt323 cursor-pointer">
                Play Now
            </a>

          {/* Liens vers les réseaux sociaux */}
          <div className='flex gap-8 items-center justify-center'>
                <a href="" className='text-xl text-white font-vt323 rounded-full transition-all border-2 border-white bg-black hover:border-black hover:bg-white hover:text-black px-2 py-2'>.Facebook.</a>

                <a href="" className='text-xl text-white font-vt323 rounded-full transition-all border-2 border-white bg-black hover:border-black hover:bg-white hover:text-black px-2 py-2'>.X.</a>

                <a href="" className='text-xl text-white font-vt323 rounded-full transition-all border-2 border-white bg-black hover:border-black hover:bg-white hover:text-black px-2 py-2'>.YouTube.</a>
          </div>

        </div>

      </footer>


    </div>
  );
};

export default App;