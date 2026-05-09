'use client';

const items = [
  'AC service', 'typing centre', 'home kitchen', 'plumber',
  'mover & packer', 'cake artist', 'pool maintenance', 'restaurant',
  'dental clinic', 'car detailer', 'tailor', 'salon', 'tutor', 'photographer',
];

function Row() {
  return (
    <div className="flex" aria-hidden>
      {items.map((x, i) => (
        <span
          key={i}
          className="flex items-center gap-6 shrink-0 px-6 f-display mq-item"
          style={{ color: '#EEF0EB', fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1 }}
        >
          <span>{x}</span>
          <span className="text-[18px] mq-star" style={{ color: '#E8B98A' }}>★</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <section
      className="relative py-10 overflow-hidden border-y"
      style={{ borderColor: 'rgba(180,184,171,.10)', background: 'rgba(15,30,43,.45)' }}
      aria-label="Industries served"
    >
      <div className="flex w-max mq-track">
        <Row />
        <Row />
      </div>
    </section>
  );
}
