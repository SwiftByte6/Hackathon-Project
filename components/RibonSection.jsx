// File: components/RibbonsSection.jsx
'use client'

import Ribbons from './Ribbons';

const RibbonsSection = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden pointer-events-none select-none z-0">
      <Ribbons
        baseThickness={30}
        colors={['#8B5CF6', '#3B82F6', '#9333EA']}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
        backgroundColor={[0.05, 0.02, 0.1, 0]}
      />
    </div>
  );
};

export default RibbonsSection;