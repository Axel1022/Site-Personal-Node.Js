const htmlInicio = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Personal</title>
  </head>

  <body>
    <h1>Sobre Mi:</h1>
    <p>
      Mi nombre es Gary Alexander Campusano. Soy un apasionado del desarrollo de
      software, actualmente estudiando el tecnologo en desarrollo de software.
      <br /><br />

      Además de mi pasión por la tecnología, soy un creyente cristiano
      comprometido. Mi fe es una parte fundamental de quien soy, y guía mis
      acciones y decisiones en todas las facetas de mi vida.<br /><br />

      En mi tiempo libre, disfruto explorando nuevas tecnologías, desarrollando
      proyectos personales y contribuyendo a la comunidad de software de código
      abierto. Creo firmemente en el poder de la tecnología para impactar
      positivamente en el mundo y estoy emocionado de ser parte de ese
      cambio.<br /><br />

      Siempre estoy abierto a nuevas oportunidades de aprendizaje y crecimiento,
      y estoy ansioso por seguir desarrollando mis habilidades y contribuir al
      mundo del desarrollo de software de manera significativa.
    </p>

    <footer>
      <nav>
        <a href="/valores">Mis valores</a><br />
        <a href="/habilidades">Mis habilidades</a><br />
        <a href="/proyectos">Mis proyectos</a><br />
        <a href="/contacto">Contactame</a>
      </nav>
    </footer>
  </body>
</html>

`;
const htmlValores = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mis valores</title>
  </head>
  <body>
    <h1>Mis valores</h1>
    <h2>Lista de valores:</h2>
    <ol>
      <li>Honestidad</li>
      <li>Empatía</li>
      <li>Responsabilidad</li>
      <li>Respeto</li>
      <li>Integridad</li>
      <li>Gratitud</li>
      <li>Determinación</li>
      <li>Generosidad</li>
      <li>Optimismo</li>
      <li>Autenticidad</li>
    </ol>

    <footer>
      <nav>
      <ul>
          <li>
              <p>Volver a <a href="/">Home</a></p>
          </li>
      </ul>

      </nav>
    </footer>
  </body>
</html>
  `;
const htmlProyectos = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Mis proyectos</title>
</head>

<body>
    <h1>Mis proyectos</h1>
    <div>
        <div>
            <div>

                <a href="https://www.facebook.com">
                    <h2>Facebook</h2>
                </a>
                <p>
                    Imagina un lugar en línea donde puedas conectar con amigos y familiares de todo el mundo, compartir
                    momentos especiales,
                    y descubrir nuevas comunidades y experiencias. ¡Así es Facebook! Fundé esta plataforma en 2004 con
                    la visión de crear un
                    espacio donde las personas puedan mantenerse conectadas y compartir sus vidas de manera fácil y
                    divertida.
                </p>
            </div>
            <div>

                <a href="https://www.youtube.com">
                    <h2>Youtube</h2>
                </a>
                <p>
                    ¿Te imaginas un sitio donde puedas ver y compartir todo tipo de videos, desde tutoriales útiles
                    hasta entretenimiento
                    emocionante? ¡Eso es YouTube! Desde su lanzamiento en 2005, he estado encantado de ver cómo esta
                    plataforma ha crecido
                    para convertirse en un lugar donde personas de todo el mundo pueden explorar, aprender y
                    entretenerse.
                </p>
            </div>
            <div>

                <a href="https://www.w3schools.com">
                   <h2>w3schools</h2>
                </a>

                <p>
                    Cuando empecé a aprender sobre desarrollo web, me di cuenta de la necesidad de recursos claros y
                    accesibles para
                    aprender tecnologías como HTML, CSS y JavaScript. Así nació w3schools en 1998: un sitio web donde
                    los estudiantes y
                    desarrolladores pueden encontrar tutoriales prácticos y referencias útiles para dominar el arte de
                    la creación web.
                    Estoy orgulloso de haber creado un recurso que ha ayudado a tantas personas a desarrollar sus
                    habilidades en
                    programación web.
                </p>
            </div>
        </div>
    </div>

    <footer>
        <nav>
            <p>Volver a <a href="/">Home</a></p>
        </nav>
    </footer>
</body>
</html>
  `;
const htmlHabilidades = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Mis habilidades </title>
</head>

<body>
<h1>Mis habilidades</h1>
    <table border="2px" style="text-align:center">
        <thead>
            <tr>
                <th>Skill</td>
                <th>Valoración</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>C#</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Python</td>
                <td>4</td>
            </tr>
            <tr>
                <td>HTML*</td>
                <td>4</td>
            </tr>
            <tr>
                <td>CCS</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>

    <footer>
        <nav>
            <p>Volver a <a href="/">Home</a></p>
        </nav>
    </footer>
</body>
</html>
  `;
const htmlContacto = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contactame</title>
  </head>

  <body>
    <h1>Contactame</h1>

    <form action="/" method="POST">
      <label for="nombre">Nombre:</label>
      <input type="text" required placeholder="Gary Alexander" /><br />
      <label for="apellido">Apellido:</label>
      <input type="text" required placeholder="Campusano Paredes" /><br />
      <label for="correo">Correo:</label>
      <input type="email" required placeholder="20221022@itla.edu.do" /><br />
      <label for="descripcion">Descripción:</label>
      <input
        type="text"
        required
        placeholder="Especifique los servicios"
      /><br />
      <button type="submit">Enviar</button>
    </form>

    <footer>
      <nav>
        <p>Volver a <a href="/">Home</a></p>
      </nav>
    </footer>
  </body>
</html>
`;
const requestHandler = function (req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(htmlInicio);
    res.end();
  } else if (url === "/" && method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.write(
      `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Personal</title>
  </head>

  <body>
    <h1>Site Personal NODE.JS</h1>

    <p>
        Enviado a una base de datos imaginaria, xd...
        Por cierto, es por POST <br/><br/>

        Perfectamente pude redirigirle al <a href="/">home</a>  pero xd...

    </p>
  </body>
</html>
      `
    );
    res.end();
  } else if (url === "/valores" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(htmlValores);
    res.end();
  } else if (url === "/habilidades" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(htmlHabilidades);
    res.end();
  } else if (url === "/proyectos" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(htmlProyectos);
    res.end();
  } else if (url === "/contacto" && method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(htmlContacto);
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Personal</title>
  </head>

  <body>
    <h1>No hablo taka taka</h1>

    <pre>
░░██╗██╗░█████╗░░░██╗██╗
░██╔╝██║██╔══██╗░██╔╝██║
██╔╝░██║██║░░██║██╔╝░██║
███████║██║░░██║███████║
╚════██║╚█████╔╝╚════██║
░░░░░╚═╝░╚════╝░░░░░░╚═╝
    </pre>

    <p>


        Bueno manito, hay un poblemo!!!
        <br/><br/>

        Yo no endiendo na' de lo que me estas hablando, xd
         <br/><br/>

         Yo te puedo llevar al <a href="/">home</a>  de mi pagina, si quieres, no es obligao'
    </p>
  </body>
</html>
      `
    );
    res.end();
  }
};
module.exports = requestHandler;
