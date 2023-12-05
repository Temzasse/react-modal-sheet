import * as React from 'react';

import Sheet from '../../src';

const ReproduceBug = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      setOpen((open) => !open);
    }, 3000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
    
    <p>The Sheet is mounted every three seconds.</p>
      <div>{open && <Example />}</div>
    </>
  );
};


function Example() {
  return (
    <Sheet isOpen={true} snapPoints={[0.2, 0]} onClose={() => {}}>
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}

export default ReproduceBug;
