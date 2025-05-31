import React from 'react';

import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import About from '../about/About';
import Contact from '../contact/Contact';
import { Experience } from '../experience/Experience';
import { Education } from '../education/Education';
import Hobbies from '../../components/Hobbies';





function Home() {
  return (
    <div>
<Navbar/>
<Banner></Banner>
<About></About>
<Education></Education>
<Experience></Experience>
<Hobbies></Hobbies>
<Contact></Contact>
<Footer></Footer>
    
    </div>
  );
}

export default Home;