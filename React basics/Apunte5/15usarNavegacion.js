// Para lograr lo que es la navegacio entre pantallas se necesita de react router-dom, para instalarlo se hace con el siguiente comando: npm install react-router-dom
// Para poder usarlo se necesita importar BrowserRouter, Routes y Route desde react-router-dom, BrowserRouter es el que va a envolver toda la aplicacion, Routes es el que va a contener todas las rutas y Route es el que va a definir cada ruta.

// Ejemplo de uso:
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link> // Los link son componentes que permiten navegar entre las diferentes rutas de la aplicacion, el atributo to es el que define la ruta a la que se quiere navegar.
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Routes> // El componente Routes es el que va a contener todas las rutas de la aplicacion, dentro de este componente se definen las rutas con el componente Route, el atributo path es el que define la ruta y el atributo element es el que define el componente que se va a renderizar cuando se navega a esa ruta.
            <Route path="/" element={<Home />} /> // La ruta principal es la que se va a renderizar cuando se navega a la ruta raiz de la aplicacion, en este caso se renderiza el componente Home.
            <Route path="/about" element={<About />} /> // La ruta about es la que se va a renderizar cuando se navega a la ruta /about de la aplicacion, en este caso se renderiza el componente About.
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )
}


// en el index.js se debe envolver la aplicacion con BrowserRouter para que funcione la navegacion entre pantallas.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);






// ============================================================
// APUNTE: React Router - navegación básica (BrowserRouter, Routes, Route, Link)
// ============================================================


// ------------------------------------------------------------
// 1. El problema: React no maneja "páginas" por sí solo
// ------------------------------------------------------------
// React está pensado para SPA (Single Page Application): toda la app vive en un solo HTML. Si armas una "navegación" usando simples etiquetas <a href="..."> apuntando a otros componentes,
//NO funciona como se espera, porque React no sabe interpretar eso como "cambiar de página" - el navegador intenta recargar
// la página completa y se rompe la app. Para resolver esto se usa la librería: react-router-dom


// ------------------------------------------------------------
// 2. Instalación
// ------------------------------------------------------------
// npm i react-router-dom@6
// Se confirma la instalación revisando package.json -> debe aparecer react-router-dom dentro de "dependencies".


// ------------------------------------------------------------
// 3. Los 4 elementos clave de react-router-dom v6
// ------------------------------------------------------------

// 3.1 BrowserRouter
// ------------------------------------------------------------
// Es el componente que HABILITA el enrutamiento en toda la app. Usa la API de History del navegador para sincronizar la URL
// con lo que se muestra en pantalla, sin recargar la página. Se coloca UNA sola vez, envolviendo el componente raíz de la
// aplicación (normalmente en index.js).

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// Todo lo que esté DENTRO de <BrowserRouter> puede usar
// <Routes>, <Route> y <Link>. Fuera de él, no funcionan.


// 3.2 Routes
// ------------------------------------------------------------
// Es el CONTENEDOR que agrupa todas las rutas de la app. Su trabajo es mirar la URL actual y decidir cuál <Route> hijo
// coincide, mostrando SOLO ese. (En versiones anteriores a v6 se llamaba <Switch>)

// 3.3 Route
// ------------------------------------------------------------
// Define UNA ruta individual: qué componente se muestra cuando la URL coincide con un path determinado.
//
// Sintaxis:
//   <Route path="/algo" element={<Componente />} />
//
// - path: el fragmento de URL que debe coincidir
// - element: el JSX/componente que se renderiza si coincide
// - Es una etiqueta de auto-cierre (no lleva hijos como <Route>...</Route>)

// Ejemplo de App.js con rutas:
import { Routes, Route, Link } from 'react-router-dom';
import PaginaInicio from './PaginaInicio';
import AboutMe from './AboutMe';

function App() {
  return (
    <div>
      {/* La navegación va FUERA de <Routes>, porque debe
          mostrarse siempre, sin importar la ruta activa */}
      <nav>
        <Link to="/" className="nav-item">Inicio</Link>
        <Link to="/about-me" className="nav-item">Acerca de mí</Link>
      </nav>

      {/* Routes agrupa todas las rutas posibles */}
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

// Cómo se lee esto:
// - Si la URL es "/"          -> se muestra <PaginaInicio />
// - Si la URL es "/about-me"  -> se muestra <AboutMe />
// - Routes revisa sus <Route> hijos y renderiza el que coincide
//   con la URL actual (solo uno a la vez).


// 3.4 Link
// ------------------------------------------------------------
// Reemplaza a la etiqueta <a> para navegar ENTRE rutas internas
// de la app sin recargar la página completa.
//
// Diferencia clave con <a>:
//   <a href="/about-me">        -> recarga toda la página (pierde estado, es lento)
//   <Link to="/about-me">       -> React Router intercepta el clic, cambia la URL y renderiza el componente correcto SIN recargar
//
// El atributo se llama "to", no "href":
//   <Link to="/about-me" className="nav-item">Acerca de mí</Link>
//
// className se usa igual que en cualquier componente de React  (no se usa "class" porque JSX lo reserva para clases de JS).


// ------------------------------------------------------------
// 4. Flujo completo, paso a paso
// ------------------------------------------------------------
// 1. Se instala react-router-dom.
// 2. En index.js, se envuelve <App /> con <BrowserRouter>.
// 3. En App.js, se importan Routes, Route y Link.
// 4. Se reemplazan los componentes "sueltos" por <Route> dentro
//    de <Routes>, cada uno con su "path" y su "element".
// 5. Se reemplazan las etiquetas <a> por <Link to="...">.
// 6. Al hacer clic en un Link, la URL cambia y Routes muestra
//    el componente correspondiente, sin recargar el navegador.


// ------------------------------------------------------------
// 5. Resumen rápido (tabla mental)
// ------------------------------------------------------------
//
// | Componente     | Función                                            |
// |----------------|-----------------------------------------------------|
// | BrowserRouter  | Habilita el enrutamiento en toda la app (una vez)    |
// | Routes         | Agrupa las rutas y decide cuál mostrar según la URL  |
// | Route          | Define una ruta: path -> componente                  |
// | Link           | Reemplaza <a>, navega sin recargar la página         |
//
// ------------------------------------------------------------
// 6. Errores comunes a evitar
// ------------------------------------------------------------
// - Usar <a href> en vez de <Link to> -> recarga la página completa
//   y rompe el estado de la SPA.
// - Olvidar envolver <App /> con <BrowserRouter> en index.js ->
//   <Routes>, <Route> y <Link> no funcionan si no están dentro
//   de un Router.
// - Poner la <nav> DENTRO de <Routes> -> desaparecería junto con
//   el contenido al cambiar de ruta. La nav debe ir afuera para
//   que se muestre siempre, en cualquier ruta.