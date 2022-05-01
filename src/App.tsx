import ReducerSample from './ReducerSample';
import SampleProvider from './SampleContext';

export default function App() {
  return (
    <SampleProvider>
      <ReducerSample />;
    </SampleProvider>
  );
}
