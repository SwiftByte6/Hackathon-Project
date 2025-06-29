'use client'

import { useEffect, useRef } from 'react';
import { Renderer, Transform, Vec3, Color, Polyline } from 'ogl';

const Ribbons = ({
  colors = ['#FC8EAC'],
  baseSpring = 0.03,
  baseFriction = 0.9,
  baseThickness = 30,
  offsetFactor = 0.05,
  maxAge = 500,
  pointCount = 50,
  speedMultiplier = 0.6,
  enableFade = false,
  enableShaderEffect = false,
  effectAmplitude = 2,
  backgroundColor = [0, 0, 0, 0],
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer, gl;
    try {
      renderer = new Renderer({ dpr: window.devicePixelRatio || 2, alpha: true });
      gl = renderer.gl;
    } catch (e) {
      console.error('WebGL/ogl initialization failed:', e);
      return;
    }
    if (Array.isArray(backgroundColor) && backgroundColor.length === 4) {
      gl.clearColor(...backgroundColor);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }

    gl.canvas.style.position = 'absolute';
    gl.canvas.style.top = '0';
    gl.canvas.style.left = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    container.appendChild(gl.canvas);

    const scene = new Transform();
    const lines = [];

    const vertex = `
      precision highp float;
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      varying vec2 vUV;
      vec4 getPosition() {
        vec4 current = vec4(position, 1.0);
        vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
        vec2 nextScreen = next.xy * aspect;
        vec2 prevScreen = prev.xy * aspect;
        vec2 tangent = normalize(nextScreen - prevScreen);
        vec2 normal = vec2(-tangent.y, tangent.x);
        normal /= aspect;
        normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
        float dist = length(nextScreen - prevScreen);
        normal *= smoothstep(0.0, 0.02, dist);
        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
        if(uEnableShaderEffect > 0.5) {
          current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
        }
        return current;
      }
      void main() {
        vUV = uv;
        gl_Position = getPosition();
      }
    `;

    const fragment = `
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
        float fadeFactor = 1.0;
        if(uEnableFade > 0.5) {
          fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
        }
        gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;

    function resize() {
      renderer.setSize(container.clientWidth, container.clientHeight);
      lines.forEach(line => line.polyline.resize());
    }
    window.addEventListener('resize', resize);

    const center = (colors.length - 1) / 2;
    colors.forEach((color, index) => {
      const spring = baseSpring + (Math.random() - 0.5) * 0.05;
      const friction = baseFriction + (Math.random() - 0.5) * 0.05;
      const thickness = baseThickness + (Math.random() - 0.5) * 3;
      const mouseOffset = new Vec3(
        (index - center) * offsetFactor + (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.1,
        0
      );

      const line = {
        spring,
        friction,
        mouseVelocity: new Vec3(),
        mouseOffset,
      };

      const points = Array.from({ length: pointCount }, () => new Vec3());
      line.points = points;

      try {
        line.polyline = new Polyline(gl, {
          points,
          vertex,
          fragment,
          uniforms: {
            uColor: { value: new Color(color) },
            uThickness: { value: thickness },
            uOpacity: { value: 1.0 },
            uTime: { value: 0.0 },
            uEnableShaderEffect: { value: enableShaderEffect ? 1.0 : 0.0 },
            uEffectAmplitude: { value: effectAmplitude },
            uEnableFade: { value: enableFade ? 1.0 : 0.0 },
          },
        });
        line.polyline.mesh.setParent(scene);
        lines.push(line);
      } catch (e) {
        console.error('Polyline creation failed:', e);
      }
    });

    resize();

    const mouse = new Vec3();
    function updateMouse(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.changedTouches?.[0]?.clientX || e.clientX) - rect.left;
      const y = (e.changedTouches?.[0]?.clientY || e.clientY) - rect.top;
      mouse.set((x / container.clientWidth) * 2 - 1, (y / container.clientHeight) * -2 + 1, 0);
    }
    container.addEventListener('mousemove', updateMouse);
    container.addEventListener('touchstart', updateMouse);
    container.addEventListener('touchmove', updateMouse);

    const tmp = new Vec3();
    let frameId;
    let lastTime = performance.now();
    function update() {
      frameId = requestAnimationFrame(update);
      const currentTime = performance.now();
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      lines.forEach(line => {
        tmp.copy(mouse).add(line.mouseOffset).sub(line.points[0]).multiply(line.spring);
        line.mouseVelocity.add(tmp).multiply(line.friction);
        line.points[0].add(line.mouseVelocity);
        for (let i = 1; i < line.points.length; i++) {
          const alpha = maxAge > 0 ? Math.min(1, (dt * speedMultiplier) / (maxAge / (line.points.length - 1))) : 0.9;
          line.points[i].lerp(line.points[i - 1], alpha);
        }
        if (line.polyline && line.polyline.mesh.program.uniforms.uTime) {
          line.polyline.mesh.program.uniforms.uTime.value = currentTime * 0.001;
        }
        if (line.polyline) line.polyline.updateGeometry();
      });

      renderer.render({ scene });
    }
    update();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', updateMouse);
      container.removeEventListener('touchstart', updateMouse);
      container.removeEventListener('touchmove', updateMouse);
      cancelAnimationFrame(frameId);
      if (gl && gl.canvas?.parentNode === container) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    colors,
    baseSpring,
    baseFriction,
    baseThickness,
    offsetFactor,
    maxAge,
    pointCount,
    speedMultiplier,
    enableFade,
    enableShaderEffect,
    effectAmplitude,
    backgroundColor
  ]);

  return <div ref={containerRef} className="relative w-full h-full" />;
};

export default Ribbons;