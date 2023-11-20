import React from "react";
// Asume que tu componente está en una carpeta de componentes

export default function About() {
  return (
    <div className="bg-darkBlue text-white text-center p-12">
      <div className="mb-8">
        <img
          src="https://media.graphassets.com/BigtjZrNRmCDbWSLiUzu" // Replace with your image path
          alt="Leonardo Sanchez - Frontend Developer"
          className="rounded-full mx-auto w-32 h-32 object-cover"
        />
      </div>
      <h1 className="text-2xl mb-2">Hola, mi nombre es </h1>
      <h2 className="text-4xl font-bold mb-2">Leonardo Sanchez.</h2>
      <h3 className="text-3xl mb-4">Front-End Developer.</h3>
      <p className="mb-4">
       Soy graduado en Ingeniería Informática. <br />
       Actualmente estoy enfocado en desarrollar con JavaScript  como Full Stack Web
        Developer. <br />
        Me encantaba crear productos que pudieran utilizar personas en su vida diaria. <br />
        Abierto al trabajo y la colaboración.
      </p>
      <a
        href="https://leonardo-sanchez-fullstack-developer.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 text-white font-bold"
      >
        Mira mi portafolio !
      </a>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:text-green-500 transition duration-300">
          LinkedIn
        </a>
        <a href="#" className="hover:text-green-500 transition duration-300">
          Twitter
        </a>
        <a href="#" className="hover:text-green-500 transition duration-300">
          Instagram
        </a>
        <a href="#" className="hover:text-green-500 transition duration-300">
          Email
        </a>
      </div>
    </div>
  );
}
