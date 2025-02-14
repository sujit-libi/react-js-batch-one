import Intro from './components/Intro';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Intro />
      <Button>Click me</Button>
      <TechStack />
      <Projects />
    </div>
  );
}
