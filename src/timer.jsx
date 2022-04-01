import { useEffect, useState } from "react";


export const Timer = () => {
  const [timer, setTimer] = useState(1);
  const [end, setEnd] = useState(8);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval", timer);
      setTimer((p) => {
        if (p <end) {
            return p +1;
        }
        else{

            clearInterval(id);
            

        }
        return end;

      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div >
      Time:{timer}
    </div>
  );
};
