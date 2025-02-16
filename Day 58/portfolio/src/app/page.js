'use client';

import Intro from './components/Intro';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import supabase from './services/supabase';

export default function Home() {
  useEffect(() => {
    async function fetchTechStack() {
      let { data: TechStack, error } = await supabase
        .from('TechStack')
        .select('tech_stack');
      console.log(TechStack, 'This is from supabase ');
    }
    fetchTechStack();
  }, []);
  return (
    <div>
      <Intro />
      <TechStack />
      <Projects />
    </div>
  );
}
