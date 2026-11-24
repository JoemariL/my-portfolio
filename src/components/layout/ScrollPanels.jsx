import { Children, useId } from 'react';

export default function ScrollPanels({ title, children }) {
  const titleId = useId();

  return (
    <div
      aria-labelledby={titleId}
      role="region"
      tabIndex={0}
      className="min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto motion-reduce:snap-proximity focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
    >
      <h1 id={titleId} className="sr-only">{title}</h1>
      {Children.map(children, (card) => (
        <section className="flex min-h-full flex-col snap-start snap-always">
          {card}
        </section>
      ))}
    </div>
  );
}
