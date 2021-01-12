import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import styled from "styled-components";
import { Material } from "three";

const Graphic = () => {

  useEffect(() => {
    fakeSolarSystem();
  });

  function fakeSolarSystem() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    //fake Sun
    const sunTexture = new THREE.TextureLoader().load('sun_map.jpg');
    const sungeo = new THREE.SphereGeometry( 3, 32, 32 );
    const sunMaterial = new THREE.MeshBasicMaterial( { map: sunTexture } );
    const sunSphere = new THREE.Mesh( sungeo, sunMaterial );

    //fake Earth
    const earthTexture = new THREE.TextureLoader().load('earth_map.jpg');
    const earthGeo = new THREE.SphereGeometry( 1, 32, 32 );
    const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
    const earthSphere = new THREE.Mesh( earthGeo, earthMaterial );
    earthSphere.position.x = 1.0;
    earthSphere.position.y = 1.0;

    scene.add( earthSphere, sunSphere );
    camera.position.z = 30;

    animate();

    function animate() {
      orbit();
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
      sunSphere.rotation.x += 0.001;
      sunSphere.rotation.y += 0.001;
      earthSphere.rotation.y += 0.001;
      earthSphere.rotation.x += 0.001; 
    }  

    function orbit() {
      let date = Date.now() * 0.0005;
      earthSphere.position.x = Math.cos(date) * 10.0;
      earthSphere.position.y = Math.sin(date) * 10.0;
    }
  }
  
  return (
    <GlRenderArea id="canvas"></GlRenderArea>
  );
}

const GlRenderArea = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;

  canvas {
    display: block;
    margin: auto;
    width: 100%;
    height: 550px;
    //background: #000;
  }
`

export default Graphic;
