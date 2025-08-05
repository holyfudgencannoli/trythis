import React from 'react';
import { motion, useInView } from 'framer-motion';

const ENTRY_ANIMATION = {
  initial: { rotateX: 0 },
  animate: { rotateX: 90 },
};

const EXIT_ANIMATION = {
  initial: { rotateX: 90 },
  animate: { rotateX: 0 },
};

const formatCharacter = (char) => (char === ' ' ? '\u00A0' : char);

export default function RollingText({
  component: Component = 'span',
  transition = { duration: 0.8, delay: 0.1, ease: 'easeOut' },
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  children,
  ...props
}) {
  const localRef = React.useRef(null);

  const inViewResult = useInView(localRef, {
    once: inViewOnce,
    margin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  // Flatten children recursively into array of characters and JSX (e.g., <br />)
  const parsedContent = React.useMemo(() => {
    const result = [];

    const parseNode = (node) => {
      if (typeof node === 'string') {
        node.split('').forEach((char) => result.push(char));
      } else if (React.isValidElement(node)) {
        if (node.type === 'br') {
          result.push(<br key={result.length} />);
        } else if (node.props?.children) {
          parseNode(node.props.children);
        }
      } else if (Array.isArray(node)) {
        node.forEach(parseNode);
      }
    };

    parseNode(children);
    return result;
  }, [children]);

  return (
    <Component
      {...props}
      ref={localRef}
      style={{
        display: 'inline-block',
        perspective: '9999999px',
        transformStyle: 'preserve-3d',
        ...(props.style || {}), // Merge incoming style prop
      }}
      data-slot="rolling-text"
    >
      {parsedContent.map((item, idx) => {
        if (typeof item !== 'string') {
          // JSX node (like <br />) — render as-is
          return <React.Fragment key={idx}>{item}</React.Fragment>;
        }

        const char = formatCharacter(item);

        return (
          <span
            key={idx}
            aria-hidden="true"
            style={{ position: 'relative', display: 'inline-block', width: 'auto' }}
          >
            <motion.span
              initial={ENTRY_ANIMATION.initial}
              animate={isInView ? ENTRY_ANIMATION.animate : undefined}
              transition={{
                ...transition,
                delay: idx * (transition.delay || 0),
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 7 - transition.duration,
              }}
              style={{
                position: 'absolute',
                backfaceVisibility: 'hidden',
                transformOrigin: '50% 25%',
              }}
            >
              {char}
            </motion.span>

            <motion.span
              initial={EXIT_ANIMATION.initial}
              animate={isInView ? EXIT_ANIMATION.animate : undefined}
              transition={{
                ...transition,
                delay: idx * (transition.delay || 0) + 0.3,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 7 - transition.duration,
              }}
              style={{
                position: 'absolute',
                backfaceVisibility: 'hidden',
                transformOrigin: '50% 100%',
              }}
            >
              {char}
            </motion.span>

            <span style={{ visibility: 'hidden' }}>{char}</span>
          </span>
        );
      })}
    </Component>
  );
}
