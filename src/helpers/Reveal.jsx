import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.2})

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    return (
      <div ref={ref} style={{ position: "relative", width }}>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
                duration: 0.3,
                delay: 0
            }}
        >{children}</motion.div>
      </div>
    );
  };
  
  export { Reveal };