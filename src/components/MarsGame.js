import { useEffect, useRef } from "react";
import Matter from "matter-js";
import MarsImg from "../assets/mars.svg";
import EarthImg from "../assets/earth.svg";

const MarsGame = () => {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World;
  const scene = useRef();
  const engine = useRef(Engine.create());
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;

  window.addEventListener("resize", function () {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
  });

  useEffect(() => {
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "#000",
      },
    });
    let groundPositionWidth = Math.floor(canvasWidth * 0.75);
    let groundPositionHeigth = Math.floor(canvasHeight * 0.6);
    let ground = Matter.Bodies.rectangle(
      groundPositionWidth,
      groundPositionHeigth,
      400,
      20,
      {
        isStatic: true,
      }
    );

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });
    render.mouse = mouse;
    let ballPositionWidth = Math.floor(canvasWidth * 0.15);

    let ballPositionHeigth = Math.floor(canvasHeight * 0.7);

    let ball = Matter.Bodies.circle(ballPositionWidth, ballPositionHeigth, 35, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: MarsImg,
          xScale: 0.8,
          yScale: 0.8,
        },
      },
    });
    let sling = Matter.Constraint.create({
      pointA: { x: ballPositionWidth, y: ballPositionHeigth },
      bodyB: ball,
      stiffness: 0.05,
    });
    let stack = Composites.stack(
      groundPositionWidth - 150,
      0,
      6,
      4,
      0,
      0,
      (x, y) => {
        return Matter.Bodies.polygon(x, y, 8, 30, {
          render: {
            sprite: {
              texture: EarthImg,
              xScale: 0.35,
              yScale: 0.35,
            },
          },
        });
      }
    );
    let firing = false;
    Matter.Events.on(mouseConstraint, "enddrag", (e) => {
      if (e.body === ball) {
        firing = true;
      }
    });
    Matter.Events.on(engine.current, "afterUpdate", () => {
      if (
        firing &&
        Math.abs(ball.position.x - ballPositionWidth) < 35 &&
        Math.abs(ball.position.y - ballPositionHeigth) < 35
      ) {
        ball = Matter.Bodies.circle(ballPositionWidth, ballPositionHeigth, 35, {
          restitution: 0.5,
          render: {
            sprite: {
              texture: MarsImg,
              xScale: 0.8,
              yScale: 0.8,
            },
          },
        });
        World.add(engine.current.world, ball);
        sling.bodyB = ball;
        firing = false;
      }
    });

    World.add(engine.current.world, [
      stack,
      ground,
      ball,
      sling,
      mouseConstraint,
    ]);

    Runner.run(engine.current);
    Render.run(render);
    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [canvasWidth]);

  return <div ref={scene} />;
};

export default MarsGame;
