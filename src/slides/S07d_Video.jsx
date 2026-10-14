export default function S07d_Video() {
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <iframe
        src="https://www.youtube.com/embed/rB-5WWZOYFY?rel=0&modestbranding=1"
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          width: '100%', height: '100%',
          border: 'none',
          position: 'absolute', inset: 0,
        }}
      />
    </div>
  )
}
